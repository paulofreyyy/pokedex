import { useEffect, useState } from "react";
import { PokemonDetails } from "../types/pokemon";
import { fetchPokemons, getPokemonDetails } from "../service/axiosPokedex";

function useData(limit: number = 12) {
    const [pokemons, setPokemons] = useState<PokemonDetails[]>([])
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await fetchPokemons(offset);
                setPokemons(results);
            } catch (error) {
                console.log('Erro ao buscar pokemons', error)
            }
        };
        fetchData();
    }, [offset, limit]);

    const fetchPokemonDetails = async (number: number) => {
        try {
            const results = await getPokemonDetails(number);
            return results;
        } catch (err) {
            console.log(err)
            throw err;
        }
    };

    return { pokemons, offset, setOffset, fetchPokemonDetails };
}

export default useData;