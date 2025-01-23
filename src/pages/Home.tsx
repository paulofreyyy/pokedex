import PokemonCard from "../components/PokemonCard";
import useData from "../hooks/useData";
import { Filters } from "../components/Filters";
import Grid from '@mui/material/Grid2';
import { useState } from "react";

export const Home = () => {
    const { pokemons } = useData();
    const [selectedType, setSelectedType] = useState<string>("Todos");
    const [searchQuery, setSearchQuery] = useState<string>("");


    //Filtra os pokemons pelo tipo
    const filteredPokemons =
        selectedType === "Todos"
            ? pokemons
            : pokemons.filter((pokemon) =>
                pokemon.types.includes(selectedType.toLowerCase())
            )

    // Aplica o filtro por nome ou id
    const filteredBySearch = filteredPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pokemon.number.toString().includes(searchQuery)
    );

    return (
        <>
            <Filters
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            <Grid
                container
                spacing={4}
                mt={3}
            >
                {filteredBySearch.map((pokemon, index) => (
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