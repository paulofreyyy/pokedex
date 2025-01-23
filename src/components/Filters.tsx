import { Box, IconButton, Typography } from "@mui/material"
import { CgArrowLeftR, CgArrowRightR } from "react-icons/cg"
import { CustomSelect } from "./select";
import { CustomTextField } from "./input/customTextField";

interface Props {
    limit: number;
    offset: number;
    setOffset: any;
}

export const Filters = ({ limit, offset, setOffset }: Props) => {

    return (
        <Box display='flex' justifyContent='space-between'>
            <Box width={400} display={'flex'} gap={4}>
                <CustomSelect />

                <CustomTextField />
            </Box>

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