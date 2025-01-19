import { Box, LinearProgress, Typography } from "@mui/material"

interface Props {
    label: string;
    value: number | undefined;
}

export const StatsBar = ({ label, value }: Props) => {
    const percentage = (value! / 150) * 100;

    const getColor = () => {
        if (percentage <= 25) return "red";
        if (percentage <= 50) return "orange";
        if (percentage <= 75) return "yellow";
        return "green";
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 3,
                mb: 1,
            }}
        >


            <Box sx={{ minWidth: 350 }}>
                <LinearProgress
                    variant="determinate"
                    value={percentage}
                    sx={{
                        borderRadius: 2,
                        height: 15,
                        backgroundColor: "#e0e0e0",
                        "& .MuiLinearProgress-bar": {
                            backgroundColor: getColor(),
                        },
                    }}
                />
            </Box>

            <Typography fontWeight={600}>{value}</Typography>
            <Typography fontWeight={600}>{label}</Typography>
        </Box>
    )
}