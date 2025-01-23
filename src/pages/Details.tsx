import { useParams } from "react-router-dom";
import { Box, Typography, Chip, lighten, IconButton } from "@mui/material";
import { TypeColors } from "../utils/typeColors";
import { capitalizeFirstLetter } from "../utils/stringUtils";
import { PokemonDetails, PokemonTypes } from "../types/pokemon";
import { useEffect, useState } from "react";
import { StatsBar } from "../components/StatsBar";
import useData from "../hooks/useData";
import { CardBadge } from "../components/badge";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";


export const Details = () => {
    const { number } = useParams<{ number: string }>();
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>()
    const [pokemonTypes, setPokemonTypes] = useState<PokemonTypes | null>(null);
    const { fetchPokemonDetails, fetchPokemonTypes } = useData();
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Estado para rastrear a imagem atual

    const handleFetchDetails = async (number: number) => {
        try {
            const results = await fetchPokemonDetails(number);
            const typesDetails = await Promise.all(
                results.types.map((type) => fetchPokemonTypes(type))
            );

            setPokemonDetails(results);
            setPokemonTypes(typesDetails[0]);
        } catch (error) {
            console.log(error);
        }
    }

    const handlePrevImage = () => {
        if (pokemonDetails && pokemonDetails.images.length > 1) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pokemonDetails.images.length)
        };
    }
    const handleNextImage = () => {
        if (pokemonDetails && pokemonDetails.images.length > 1) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? pokemonDetails.images.length - 1 : prevIndex - 1)
        }
    }

    useEffect(() => {
        if (number) {
            handleFetchDetails(Number(number));
        }
    }, [number]);


    if (!pokemonDetails) {
        return <Typography>Pokémon não encontrado.</Typography>;
    }

    return (
        <Box display='flex' justifyContent='space-between' alignItems='center'>
            {/* Card */}
            <Box
                width='50%'
                bgcolor="#FFF"
                boxShadow='0px 0px 10px 3px rgba(221,225,235,1)'
                borderRadius="30px"
                py={4}
                position='relative'
            >
                {/* Badges */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: 'space-between',
                        position: "absolute",
                        top: 0,
                        width: "100%",
                    }}
                >
                    <CardBadge position="left" value={`${pokemonDetails.height}m`} />
                    <CardBadge position="right" value={`${pokemonDetails.weight}kg`} />
                </Box>

                {/* Imagem */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
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
                            fontSize={Number(number) > 999 ? '10rem' : Number(number) > 99 ? '15rem' : '20rem'}
                            sx={{
                                color: () =>
                                    lighten(TypeColors[pokemonDetails.types[0]] || "#D3D3D3", 0.3),
                            }}
                        >#{number}</Typography>
                    </Box>

                    <Box
                        component="img"
                        src={pokemonDetails.images[currentImageIndex]}
                        alt={pokemonDetails.name}
                        sx={{
                            height: 250,
                            margin: "16px auto",
                            borderRadius: 5,
                            zIndex: 1,
                        }}
                    />

                    {/* Alteração de imagem */}
                    <Box
                        sx={{
                            display: 'flex',
                            width: "100%",
                            justifyContent: 'space-between',
                            top: "50%",
                            transform: 'translateY(-50%)',
                            position: 'absolute',
                        }}
                    >
                        <IconButton
                            onClick={handlePrevImage}
                            disableRipple
                            sx={{
                                transition: "ease 0.5s",
                                ":hover": {
                                    color: '#E3350D'
                                },
                            }}
                        >
                            <TbArrowBigLeftLine size={30} />
                        </IconButton>
                        <IconButton
                            onClick={handleNextImage}
                            disableRipple
                            sx={{
                                transition: "ease 0.5s",
                                ":hover": {
                                    color: '#E3350D'
                                },
                            }}
                        >
                            <TbArrowBigRightLine size={30} />
                        </IconButton>
                    </Box>
                </Box>

                {/* Informações */}
                <Box
                    sx={{
                        textAlign: "center",
                        display: 'flex',
                        alignItems: "center",
                        flexDirection: 'column',
                    }}
                >
                    <Box>
                        <Typography fontWeight={600} color="#7a7979">#{pokemonDetails.number} </Typography>
                        <Typography variant="h4" fontWeight={600}>{capitalizeFirstLetter(pokemonDetails.name)}</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1, marginTop: 2 }}>
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
            </Box>

            {/* Status */}
            <Box sx={{
                display: 'flex',
                flexDirection: "column",
                gap: 4,
            }}
            >
                <Box>
                    <Typography fontWeight={600} mb={2}>Status</Typography>
                    <StatsBar label="Speed" value={pokemonDetails.speed} />
                    <StatsBar label="Special Defense" value={pokemonDetails.sp_defense} />
                    <StatsBar label="Special Attack" value={pokemonDetails.sp_attack} />
                    <StatsBar label="Defense" value={pokemonDetails.defense} />
                    <StatsBar label="Attack" value={pokemonDetails.attack} />
                    <StatsBar label="Hp" value={pokemonDetails.hp} />
                </Box>

                <Box>
                    <Typography fontWeight={600} mb={2}>Fraquezas</Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        {pokemonTypes?.weakness.map((weakness, index) => (
                            <Chip
                                key={index}
                                label={capitalizeFirstLetter(weakness)}
                                sx={{
                                    bgcolor: TypeColors[weakness] || "#D3D3D3",
                                    color: "#FFF",
                                    fontWeight: 600,
                                    px: 1,
                                }}
                            />
                        ))}
                    </Box>
                </Box>

                <Box>
                    <Box>
                        <Typography fontWeight={600} mb={2}>Vantagens</Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            {pokemonTypes?.strength.map((strength, index) => (
                                <Chip
                                    key={index}
                                    label={capitalizeFirstLetter(strength)}
                                    sx={{
                                        bgcolor: TypeColors[strength] || "#D3D3D3",
                                        color: "#FFF",
                                        fontWeight: 600,
                                        px: 1,
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                </Box>


            </Box >
        </Box >

    );
};
