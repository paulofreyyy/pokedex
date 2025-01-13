import axios from "axios";
import { PokemonDetails } from "../types/pokemon";

interface Pokemon {
    name: string;
    url: string;
}

export const fetchPokemons = async (): Promise<PokemonDetails[]> => {
    try {
        // Verificar se os detalhes dos Pokémon já estão armazenados no sessionStorage
        const cachedPokemons = sessionStorage.getItem("pokemonDetails");
        if (cachedPokemons) {
            return JSON.parse(cachedPokemons);
        }
        const { data } = await axios.get<{ results: Pokemon[] }>('https://pokeapi.co/api/v2/pokemon?limit=12');

        const pokemonsDetails = await Promise.all(
            data.results.map(({ url }) => 
                axios.get(url).then(({ data }) => ({
                    name: data.name,
                    types: data.types.map((typeInfo: { type: { name: string } }) => typeInfo.type.name),
                    number: data.id,
                    image: data.sprites.front_default,
                }))
            )
        );

        // Armazenar os detalhes dos Pokémon no sessionStorage
        sessionStorage.setItem("pokemonDetails", JSON.stringify(pokemonsDetails));

        return pokemonsDetails;
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao buscar pokémons.');
    }
};
