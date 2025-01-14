import { Box, Grid, IconButton } from "@mui/material";
import PokemonCard from "../components/PokemonCard";
import { CgArrowLeftR, CgArrowRightR } from "react-icons/cg";
import useData from "../hooks/useData";

export const Home = () => {
    const limit = 12;
    const { pokemons, offset, setOffset } = useData(limit)

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