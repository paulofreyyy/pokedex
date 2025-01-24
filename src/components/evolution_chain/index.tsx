import { Box, Chip } from "@mui/material";

interface Props {
    pokemonDetails: any;
}

export const EvolutionChain = ({ pokemonDetails }: Props) => {
    return (
        <>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='space-evenly'
            >
                <Box
                    component="img"
                    src={pokemonDetails.evolution_chain[0].image}
                    alt={pokemonDetails.name}
                    sx={{
                        height: 100,
                        borderRadius: 5,
                        zIndex: 1,
                    }}
                />

                <Chip
                    label={`Lvl ${pokemonDetails.evolution_chain[1].min_level}`}
                    size="small"
                    sx={{
                        fontWeight: 600,
                        px: 1
                    }}
                />

                <Box
                    component="img"
                    src={pokemonDetails.evolution_chain[1].image}
                    alt={pokemonDetails.name}
                    sx={{
                        height: 100,
                        borderRadius: 5,
                        zIndex: 1,
                    }}
                />
                <Chip
                    label={`Lvl ${pokemonDetails.evolution_chain[2].min_level}`}
                    size="small"
                    sx={{
                        fontWeight: 600,
                        px: 1
                    }}
                />

                <Box
                    component="img"
                    src={pokemonDetails.evolution_chain[2].image}
                    alt={pokemonDetails.name}
                    sx={{
                        height: 100,
                        borderRadius: 5,
                        zIndex: 1,
                    }}
                />
            </Box>
        </>
    )
}