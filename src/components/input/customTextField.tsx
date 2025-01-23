import { InputAdornment, TextField } from "@mui/material"
import { CiSearch } from "react-icons/ci"

interface Props {
    value: string;
    onChange: (q: string) => void;
    label: string;
}

export const CustomTextField = ({ value, onChange, label }: Props) => {
    return (
        <TextField
            variant="outlined"
            fullWidth
            label={label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            size="small"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <CiSearch size={25} />
                    </InputAdornment>
                ),
            }}
        />
    )
}