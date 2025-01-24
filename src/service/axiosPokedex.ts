import axios from "axios";
import { PokemonDetails, PokemonTypes } from "../types/pokemon";

// Função para armazenar status dos pokemons
const fetchPokemonStats = (data: any) => ({
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    sp_attack: data.stats[3].base_stat,
    sp_defense: data.stats[4].base_stat,
    speed: data.stats[5].base_stat,
});

// Função para processar a cadeia evolutiva
const processEvolutionChain = async (chain: any): Promise<{ name: string; number: number; image: string; min_level: number | null }[]> => {
    const evolutions: { name: string; number: number; image: string; min_level: number | null }[] = [];

    let currentChain = chain;
    while (currentChain) {
        const species = currentChain.species;
        const name = species.name;
        const minLevel = currentChain.evolution_details[0]?.min_level || null;

        // Chamada para obter os detalhes do Pokémon
        const pokemonData = await axios.get(species.url.replace('pokemon-species', 'pokemon'));
        const number = pokemonData.data.id;
        const image = pokemonData.data.sprites.front_default;

        evolutions.push({ name, number, image, min_level: minLevel });
        currentChain = currentChain.evolves_to[0] || null;
    }

    return evolutions;
};

export const fetchPokemons = async (): Promise<PokemonDetails[]> => {
    try {
        const { data } = await axios.get<{ results: { name: string; url: string }[] }>(`https://pokeapi.co/api/v2/pokemon?limit=1000`);

        return Promise.all(
            data.results.map(({ url }) =>
                axios.get(url).then(({ data }) => ({
                    name: data.name,
                    types: data.types.map((typeInfo: { type: { name: string } }) => typeInfo.type.name),
                    number: data.id,
                    images: [data.sprites.front_default].filter((image) => image !== null),
                    ...fetchPokemonStats(data)
                }))
            )
        );
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao buscar pokémons.');
    }
};

export const getPokemonDetails = async (number: number): Promise<PokemonDetails> => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`);
        const specieResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${number}`);
        const evolutionResponse = await axios.get(specieResponse.data.evolution_chain.url);

        const evolution_chain = await processEvolutionChain(evolutionResponse.data.chain);

        return {
            name: data.name,
            number: data.id,
            types: data.types.map((type: any) => type.type.name),
            images: [
                data.sprites.front_default,
                data.sprites.back_shiny,
                data.sprites.front_shiny,
                data.sprites.back_default,
            ].filter(image => image !== null),
            ...fetchPokemonStats(data),
            weight: data.weight,
            height: data.height,
            evolution_chain,
        };
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao buscar pokémons.');
    }
}

export const getPokemonTypes = async (type: string): Promise<PokemonTypes> => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);

        return {
            weakness: data.damage_relations.double_damage_from.map((item: { name: string }) => item.name),
            strength: data.damage_relations.double_damage_to.map((item: { name: string }) => item.name),
        };
    } catch (error) {
        console.error(error)
        throw new Error('Erro ao buscar tipos.');
    }
}