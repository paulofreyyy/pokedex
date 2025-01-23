import { useEffect, useState } from "react";
import { PokemonDetails } from "../types/pokemon";
import { fetchPokemons, getPokemonDetails, getPokemonTypes } from "../service/axiosPokedex";

function useData() {
    const [pokemons, setPokemons] = useState<PokemonDetails[]>([])
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await fetchPokemons();
                setPokemons(results);
            } catch (error) {
                console.log('Erro ao buscar pokemons', error)
            }
        };
        fetchData();
    }, [offset]);

    const fetchPokemonDetails = async (number: number) => {
        try {
            const results = await getPokemonDetails(number);
            return results;
        } catch (err) {
            console.log(err)
            throw err;
        }
    };

    const fetchPokemonTypes = async (type: string) => {
        try {
            const results = await getPokemonTypes(type);
            return results;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    return { pokemons, offset, setOffset, fetchPokemonDetails, fetchPokemonTypes };
}

export default useData;