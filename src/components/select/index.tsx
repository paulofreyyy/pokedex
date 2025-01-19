import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import { TbPokeball } from "react-icons/tb";

interface Props {
    value?: string;
}

export const CustomSelect = ({ value }: Props) => {
    return (
        <>
            <FormControl fullWidth>
                <InputLabel>
                    <TbPokeball /> Tipo
                </InputLabel>
                <Select value={value}>
                    <MenuItem value={value}>aaaa</MenuItem>
                </Select>
            </FormControl>
        </>
    );
};
