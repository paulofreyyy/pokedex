import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { TbPokeball } from "react-icons/tb";
import { pokemonTypes } from "../../types/pokemon";

interface Props {
    value: string;
    onChange: (event: SelectChangeEvent<string>) => void;
}

export const CustomSelect = ({ value, onChange }: Props) => {
    return (
        <FormControl fullWidth size="small">
            <InputLabel>
                <TbPokeball /> Tipo
            </InputLabel>
            <Select value={value} onChange={onChange} displayEmpty>
                {pokemonTypes.map((type) => (
                    <MenuItem value={type} key={type}>
                        {type}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
