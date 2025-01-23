import { Box, Chip, Typography } from "@mui/material";
import { TypeColors } from "../utils/typeColors";
import { capitalizeFirstLetter } from "../utils/stringUtils";
import { useNavigate } from "react-router-dom";
import { PokemonDetails } from "../types/pokemon";

const PokemonCard = ({ name, number, types, image }: PokemonDetails) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/details/${number}`)
    }

    return (
        <Box
            sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                cursor: "pointer",
            }}
            onClick={handleNavigate}
        >
            <Box
                component="img"
                sx={{
                    height: 300,
                    display: "flex",
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    bgcolor: TypeColors[types[0]] || '#D3D3D3',
                    borderRadius: 5,
                    transition: 'transform 0.5s ease-in-out',
                    boxShadow: '0px 0px 10px 3px rgba(221,225,235,1)',
                    "&:hover": {
                        transform: "scale(1.1)",
                    }
                }}
            />

            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between' width='100%' textAlign='left'>
                <Box>
                    <Typography>#{number}</Typography>
                    <Typography fontWeight={600}>{capitalizeFirstLetter(name)}</Typography>
                </Box>

                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 1
                }}>
                    {types.map((type, index) => (
                        <Chip
                            key={index}
                            label={capitalizeFirstLetter(type)}
                            size="small"
                            sx={{
                                bgcolor: TypeColors[type] || '#D3D3D3',
                                color: '#FFF',
                                fontWeight: 600,
                                px: 1
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default PokemonCard;