import { Box, SelectChangeEvent } from "@mui/material"
import { CustomSelect } from "./select";
import { CustomTextField } from "./input/customTextField";

interface Props {
    selectedType: string;
    setSelectedType: (type: string) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export const Filters = ({ selectedType, setSelectedType, searchQuery, setSearchQuery }: Props) => {
    const handleTypeChange = (event: SelectChangeEvent<string>) => {
        setSelectedType(event.target.value);
    };

    const handleSearchChange = (value: string) => {
        setSearchQuery(value);
    };

    return (
        <Box display='flex' justifyContent='space-between'>
            <Box width={400} display={'flex'} gap={4}>
                <CustomSelect value={selectedType} onChange={handleTypeChange} />

                <CustomTextField value={searchQuery} onChange={handleSearchChange} />
            </Box>
        </Box>
    )
}