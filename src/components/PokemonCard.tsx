import { Box, Chip, Typography } from "@mui/material";
import { TypeColors } from "../utils/typeColors";
import { capitalizeFirstLetter } from "../utils/stringUtils";

interface PokemonCardProps {
    name: string;
    number: string;
    types: string[];
    image: string;
}

const PokemonCard = ({ name, number, types, image }: PokemonCardProps) => {
    return (
        <Box
            sx={{
                textAlign: 'center',
                maxWidth: 200,
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                cursor: "pointer",
            }}
        >
            <Box
                component="image"
                sx={{
                    width: 200,
                    height: 200,
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    bgcolor: TypeColors[types[0]] || '#D3D3D3',
                    borderRadius: 5,
                    transition: 'transform 0.5s ease-in-out',
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