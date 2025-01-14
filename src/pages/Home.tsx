import { Box, Grid, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchPokemons } from "../service/axiosPokedex";
import PokemonCard from "../components/PokemonCard";
import { CgArrowLeftR, CgArrowRightR } from "react-icons/cg";

export const Home = () => {
    const [pokemons, setPokemons] = useState<any[]>([]);
    const [offset, setOffset] = useState(0);
    const limit = 12;

    useEffect(() => {
        const handleFetchPokemon = async () => {
            try {
                const results = await fetchPokemons(offset);
                console.log(results)
                setPokemons(results);
            } catch (error) {
                console.log('Erro ao buscar pokemons', error)
            }
        };
        handleFetchPokemon();
    }, [offset]);

    return (
        <>
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

            <Box
                display="flex"
                justifyContent="space-between"
                position='absolute'
                width='100%'
                top='50%'
                sx={{
                    transform: "translateY(-50%)",
                }}
            >
                <IconButton
                    onClick={() => setOffset((prev) => Math.max(0, prev - limit))}
                    disabled={offset === 0}
                >
                    <CgArrowLeftR size={60} />

                </IconButton>
                <IconButton
                    onClick={() => setOffset((prev) => prev + limit)}
                >
                    <CgArrowRightR size={60} />
                </IconButton>
            </Box>

        </>
    );
};