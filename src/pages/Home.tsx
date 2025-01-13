import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchPokemons } from "../service/axiosPokedex";
import PokemonCard from "../components/PokemonCard";

export const Home = () => {
    const [pokemons, setPokemons] = useState<any[]>([]);

    useEffect(() => {
        const handleFetchPokemon = async () => {
            try {
                const results = await fetchPokemons();
                console.log(results)
                setPokemons(results);
            } catch (error) {
                console.log('Erro ao buscar pokemons', error)
            }
        };
        handleFetchPokemon();
    }, [pokemons]);

    return (
        <Grid
            container
            rowSpacing={4}
        >
            {pokemons.map((pokemon, index) => (
                <Grid
                    item
                    md={2}
                    key={index}
                >
                    <PokemonCard
                        name={pokemon.name}
                        number={pokemon.number}
                        types={pokemon.types}
                        image={pokemon.image}
                    />
                </Grid>
            ))}
        </Grid>
    );
};