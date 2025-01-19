import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    components: {
        MuiFormControl: {
            styleOverrides: {
                root: {
                    backgroundColor: "#ffffff",
                    borderRadius: 4,
                    "& .MuiOutlinedInput-root": {
                        border: "none",
                        "&:hover": {
                            border: "none",
                        },
                        "&.Mui-focused": {
                            border: "none",
                        },
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "red !important",
                    fontWeight: "bold",
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    backgroundColor: "#ffffff",
                    borderRadius: 4,
                    color: "red !important",
                    textAlign: "left",
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    border: "none",
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: "red",
                },
            },
        },
    },
});
