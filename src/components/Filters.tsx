import { Box, IconButton, SelectChangeEvent, Typography } from "@mui/material"
import { CgArrowLeftR, CgArrowRightR } from "react-icons/cg"
import { CustomSelect } from "./select";
import { CustomTextField } from "./input/customTextField";
import { useState } from "react";

interface Props {
    limit: number;
    offset: number;
    setOffset: any;
}

export const Filters = ({ limit, offset, setOffset }: Props) => {
    const [selectedType, setSelectedType] = useState<string>("Todos")

    const handleTypeChange = (event: SelectChangeEvent<string>) => {
        console.log(event.target.value)
        setSelectedType(event.target.value);
    };

    return (
        <Box display='flex' justifyContent='space-between'>
            <Box width={400} display={'flex'} gap={4}>
                <CustomSelect value={selectedType} onChange={handleTypeChange} />

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