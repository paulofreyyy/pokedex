import { Box, SelectChangeEvent, TextField } from "@mui/material"
import { CustomSelect } from "./select";
import { CustomTextField } from "./input/customTextField";

interface Props {
    selectedType: string;
    setSelectedType: (type: string) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    fromValue: number | string;
    setFromValue: (query: number) => void;
    toValue: number | string;
    setToValue: (query: number) => void;
}

export const Filters = ({ ...props }: Props) => {
    const handleTypeChange = (event: SelectChangeEvent<string>) => {
        props.setSelectedType(event.target.value);
    };

    const handleSearchChange = (value: string) => {
        props.setSearchQuery(value);
    };

    return (
        <Box display='flex' justifyContent='space-around'>
            <Box width='100%' display={'flex'} gap={4}>
                <CustomSelect value={props.selectedType} onChange={handleTypeChange} />

                <CustomTextField value={props.searchQuery} onChange={handleSearchChange} label='Nome ou ID' />

                <Box display='flex' gap={2} width='100%'>
                    <TextField
                        label="De"
                        placeholder="Informe o número"
                        fullWidth
                        type="number"
                        size="small"
                        value={props.fromValue}
                        onChange={(e) => props.setFromValue(Number(e.target.value))}
                    />

                    <TextField
                        label="Até"
                        value={props.toValue}
                        onChange={(e) => props.setToValue(Number(e.target.value))}
                        type="number"
                        placeholder="Informe o número"
                        fullWidth
                        size="small"
                    />
                </Box>
            </Box>
        </Box>
    )
}