import { InputAdornment, TextField } from "@mui/material"
import { CiSearch } from "react-icons/ci"

export const CustomTextField = () => {
    return (
        <TextField
            variant="outlined"
            fullWidth
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