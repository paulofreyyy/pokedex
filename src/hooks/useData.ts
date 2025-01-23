import { useEffect, useState } from "react";
import { PokemonDetails } from "../types/pokemon";
import { fetchPokemons, getPokemonDetails, getPokemonTypes } from "../service/axiosPokedex";

function useData() {
    const [pokemons, setPokemons] = useState<PokemonDetails[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const cachedPokemons = localStorage.getItem("pokemons");

            if (cachedPokemons) {
                setPokemons(JSON.parse(cachedPokemons));
                return;
            }

            try {
                const results = await fetchPokemons();
                localStorage.setItem("pokemons", JSON.stringify(results))
            } catch (error) {
                console.log('Erro ao buscar pokemons', error)
            }
        };
        fetchData();
    }, []);

    const fetchPokemonDetails = async (number: number) => {
        try {
            const results = await getPokemonDetails(number);
            console.log(results)
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

    return { pokemons, fetchPokemonDetails, fetchPokemonTypes };
}

export default useData;