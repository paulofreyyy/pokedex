import { useParams } from "react-router-dom";
import { Box, Typography, Chip } from "@mui/material";
import { TypeColors } from "../utils/typeColors";
import { capitalizeFirstLetter } from "../utils/stringUtils";
import { PokemonDetails } from "../types/pokemon";
import { useMemo } from "react";

export const Details = () => {
    const { number } = useParams<{ number: string }>();

    const pokemonDetails: PokemonDetails | null = useMemo(() => {
        const storedData = sessionStorage.getItem("pokemonDetails");
        if (storedData) {
            const pokemons: PokemonDetails[] = JSON.parse(storedData);
            return pokemons.find(pokemon => pokemon.number === Number(number)) || null;
        }
        return null;
    }, [number]);

    if (!pokemonDetails) {
        return <Typography>Pokémon não encontrado.</Typography>;
    }

    return (
        <Box sx={{ padding: 4, textAlign: "center" }}>
            <Typography variant="h4" fontWeight={600}>
                {capitalizeFirstLetter(pokemonDetails.name)} (#{pokemonDetails.number})
            </Typography>
            <Box
                component="img"
                src={pokemonDetails.image}
                alt={pokemonDetails.name}
                sx={{
                    width: 200,
                    height: 200,
                    margin: "16px auto",
                    borderRadius: 5,
                    bgcolor: TypeColors[pokemonDetails.types[0]] || "#D3D3D3",
                }}
            />
            <Typography variant="h6">Types:</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1, marginTop: 2 }}>
                {pokemonDetails.types.map((type, index) => (
                    <Chip
                        key={index}
                        label={capitalizeFirstLetter(type)}
                        sx={{
                            bgcolor: TypeColors[type] || "#D3D3D3",
                            color: "#FFF",
                            fontWeight: 600,
                            px: 1,
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};
