import { Box, Typography } from "@mui/material"

interface Props {
    value: string;
    position: "left" | "right"
}

export const CardBadge = ({ value, position }: Props) => {
    return (
        <Box
            sx={{
                bgcolor: "#FFF",
                borderRadius: position === 'left' ? "30px 0 20px 0" : "0 30px 0 20px",
                px: 2,
                boxShadow: "0px 0px 10px 1px rgba(221,225,235,1)",
                width: 60,
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
            }}
        >
            <Typography fontWeight={600}>{value}</Typography>
        </Box>
    )
}