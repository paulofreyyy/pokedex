import axios from "axios";
import { PokemonDetails } from "../types/pokemon";

interface Pokemon {
    name: string;
    url: string;
}

export const fetchPokemons = async (offset: number): Promise<PokemonDetails[]> => {
    try {
        const { data } = await axios.get<{ results: Pokemon[] }>(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`);

        const pokemonsDetails = await Promise.all(
            data.results.map(({ url }) => 
                axios.get(url).then(({ data }) => ({
                    name: data.name,
                    types: data.types.map((typeInfo: { type: { name: string } }) => typeInfo.type.name),
                    number: data.id,
                    image: data.sprites.front_default,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    sp_attack: data.stats[3].base_stat,
                    sp_defense: data.stats[4].base_stat,
                    speed: data.stats[5].base_stat,
                }))
            )
        );

        return pokemonsDetails;
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao buscar pokémons.');
    }
};

export const getPokemonDetails = async (number: number) => {
    try {
        const { data } = await axios.get<{ results: Pokemon[] }>(`https://pokeapi.co/api/v2/pokemon/${number}`);

        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao buscar pokémons.');
    }
}