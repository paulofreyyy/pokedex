import { Grid } from "@mui/material";
import PokemonCard from "../components/PokemonCard";
import useData from "../hooks/useData";
import { NavigationCards } from "../components/NavigationCards";

export const Home = () => {
    const limit = 12;
    const { pokemons, offset, setOffset } = useData(limit)

    return (
        <>
            <NavigationCards limit={limit} offset={offset} setOffset={setOffset} />

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
        </>
    );
};