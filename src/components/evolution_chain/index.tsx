import { Box, Chip } from "@mui/material";

interface Props {
    pokemonDetails: any;
}

export const EvolutionChain = ({ pokemonDetails }: Props) => {
    // Se a cadeia de evolução tiver apenas um item, não renderiza o componente
    if (pokemonDetails.evolution_chain.length <= 1) {
        return null;
    }

    return (
        <>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
            >
                {pokemonDetails.evolution_chain.map((evolution: any, index: any) => (
                    <Box
                        key={evolution.number}
                        display='flex'
                        alignItems='center'
                    >
                        {/* Imagem do Pokémon */}
                        <Box
                            component="img"
                            src={evolution.image}
                            alt={evolution.name}
                            sx={{
                                height: 100,
                                borderRadius: 5,
                                zIndex: 1,
                                mx: 1,
                            }}
                        />

                        {/* Chip com nível mínimo, exceto no último item */}
                        {index < pokemonDetails.evolution_chain.length - 1 && (
                            <Chip
                                label={`Lvl ${pokemonDetails.evolution_chain[index + 1].min_level || "???"}`}
                                size="small"
                                sx={{
                                    fontWeight: 600,
                                    px: 1,
                                    mx: 1,
                                }}
                            />
                        )}

                    </Box>


                ))}
            </Box>
        </>
    )
}