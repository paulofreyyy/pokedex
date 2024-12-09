import { Box, Chip, Typography } from "@mui/material";
import { TypeColors } from "../utils/typeColors";

interface PokemonCardProps {
    name: string;
    number: string;
    types: string[];
    image: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, number, types, image }) => {
    return (
        <Box
            sx={{
                background: '#FFF',
                textAlign: 'center',
                borderRadius: 5,
                minWidth: 200,
                height: 'auto',
                boxShadow: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center",
                justifyContent: "space-between",
                padding: 2,
                mx: 2
            }}
        >
            <Box
                component="image"
                sx={{
                    width: 120,
                    height: 120,
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                }}
            />
            
            <Box>
                <Typography>{name}</Typography>
                <Typography>Nº {number}</Typography>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 2
                }}>
                    {types.map((type, index) => (
                        <Chip
                            key={index}
                            label={type}
                            sx={{
                                bgcolor: TypeColors[type] || '#D3D3D3',
                                color: '#FFF'
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default PokemonCard;
