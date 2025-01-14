import { useParams } from "react-router-dom";
import { Box, Typography, Chip, lighten } from "@mui/material";
import { TypeColors } from "../utils/typeColors";
import { capitalizeFirstLetter } from "../utils/stringUtils";
import { PokemonDetails } from "../types/pokemon";
import { useEffect, useState } from "react";
import { StatsBar } from "../components/StatsBar";
import useData from "../hooks/useData";


export const Details = () => {
    const { number } = useParams<{ number: string }>();
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>()
    const { fetchPokemonDetails } = useData();

    const handleFetchDetails = async (number: number) => {
        try {
            const results = await fetchPokemonDetails(number);
            setPokemonDetails(results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (number) {
            handleFetchDetails(Number(number)); // Converte para número, se necessário
        }
    }, [number]);


    if (!pokemonDetails) {
        return <Typography>Pokémon não encontrado.</Typography>;
    }

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    bgcolor: TypeColors[pokemonDetails.types[0]] || "#D3D3D3",
                    display: "flex",
                    borderRadius: "0 0 30px 30px",
                    py: 8,
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <Typography
                        fontWeight={600}
                        fontSize='20rem'
                        sx={{
                            color: () =>
                                lighten(TypeColors[pokemonDetails.types[0]] || "#D3D3D3", 0.3),
                        }}
                    >#{number}</Typography>
                </Box>

                <Box
                    component="img"
                    src={pokemonDetails.image}
                    alt={pokemonDetails.name}
                    sx={{
                        width: 200,
                        height: 200,
                        margin: "16px auto",
                        borderRadius: 5,
                        zIndex: 1,
                    }}
                />
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: "center",
                justifyContent: "space-evenly",
                mt: 2,
            }}
            >
                <Box sx={{ padding: 4, textAlign: "center" }}>
                    <Typography fontWeight={600} color="#7a7979">#{pokemonDetails.number} </Typography>
                    <Typography variant="h4" fontWeight={600}>{capitalizeFirstLetter(pokemonDetails.name)}</Typography>
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
                <Box>
                    <StatsBar label="Speed" value={pokemonDetails.speed} />
                    <StatsBar label="Special Defense" value={pokemonDetails.sp_defense} />
                    <StatsBar label="Special Attack" value={pokemonDetails.sp_attack} />
                    <StatsBar label="Defense" value={pokemonDetails.defense} />
                    <StatsBar label="Attack" value={pokemonDetails.attack} />
                    <StatsBar label="Hp" value={pokemonDetails.hp} />
                </Box>
            </Box>
        </>

    );
};
