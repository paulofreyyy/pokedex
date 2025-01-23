import { InputAdornment, TextField } from "@mui/material"
import { CiSearch } from "react-icons/ci"

interface Props {
    value: string;
    onChange: (q: string) => void;
}

export const CustomTextField = ({ value, onChange }: Props) => {
    return (
        <TextField
            variant="outlined"
            fullWidth
            value={value}
            onChange={(e) => onChange(e.target.value)}
            size="small"
            placeholder="Nome ou ID"
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