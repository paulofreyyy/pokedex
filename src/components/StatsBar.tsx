import { Box, LinearProgress, Typography } from "@mui/material"

interface Props {
    label: string;
    value: number;
}

export const StatsBar = ({ label, value }: Props) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2
            }}
        >
            <Typography fontWeight={600}>{label}</Typography>
            <Typography fontWeight={600}>{value}</Typography>

            <LinearProgress
                variant="determinate"
                value={value}
                sx={{
                    borderRadius: 2,
                    height: 15,
                }}
            />
        </Box>
    )
}