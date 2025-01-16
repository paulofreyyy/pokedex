import { Box, IconButton, Typography } from "@mui/material"
import { CgArrowLeftR, CgArrowRightR } from "react-icons/cg"

interface Props {
    limit: number;
    offset: number;
    setOffset: any;
}

export const NavigationCards = ({ limit, offset, setOffset }: Props) => {

    return (
        <Box display='flex' justifyContent='space-between'>
            <Box display='flex' alignItems='center'>
                <IconButton
                    onClick={() => setOffset((prev: number) => Math.max(0, prev - limit))}
                    disabled={offset === 0}
                >
                    <CgArrowLeftR />

                </IconButton>
                <Typography>{offset} à {offset + 12}</Typography>
                <IconButton
                    onClick={() => setOffset((prev: number) => prev + limit)}
                >
                    <CgArrowRightR />
                </IconButton>
            </Box>
        </Box>
    )
}