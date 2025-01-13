import { Box, CircularProgress, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchPokemons } from "../service/axiosPokedex";
import PokemonCard from "../components/PokemonCard";

export const Home = () => {
    const [pokemons, setPokemons] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const handleFetchPokemon = async () => {
            try {
                const results = await fetchPokemons();
                setPokemons(results);
            } catch (error) {
                console.log('Erro ao buscar pokemons', error)
            } finally {
                setLoading(false);
            }
        };
        handleFetchPokemon();
    }, [pokemons]);

    if (loading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

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