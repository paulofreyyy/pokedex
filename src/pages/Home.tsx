import PokemonCard from "../components/PokemonCard";
import useData from "../hooks/useData";
import { Filters } from "../components/Filters";
import Grid from '@mui/material/Grid2';

export const Home = () => {
    const limit = 12;
    const { pokemons, offset, setOffset } = useData(limit)

    return (
        <>
            <Filters limit={limit} offset={offset} setOffset={setOffset} />

            <Grid
                container
                spacing={4}
                mt={3}
            >
                {pokemons.map((pokemon, index) => (
                    <Grid
                        key={index}
                        size={3}
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
        </ >
    );
};