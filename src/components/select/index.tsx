import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import { TbPokeball } from "react-icons/tb";
import { pokemonTypes } from "../../types/pokemon";

interface Props {
    value?: string;
}

export const CustomSelect = ({ value }: Props) => {
    return (
        <>
            <FormControl fullWidth size="small">
                <InputLabel>
                    <TbPokeball /> Tipo
                </InputLabel>
                <Select value={value}>
                    {pokemonTypes.map((type) => (
                        <MenuItem value={value} key={type}>
                            {type}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
};
