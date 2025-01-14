import { useEffect, useState } from "react";
import { PokemonDetails } from "../types/pokemon";
import { fetchPokemons } from "../service/axiosPokedex";

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

    return { pokemons, offset, setOffset };
}

export default useData;