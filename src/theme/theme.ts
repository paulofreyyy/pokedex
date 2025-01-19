import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    components: {
        MuiFormControl: {
            styleOverrides: {
                root: {
                    backgroundColor: "#ffffff",
                    borderRadius: 6,
                    boxShadow: '0px 0px 10px 3px rgba(221,225,235,1)',
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
                    color: "#5e5e5e !important",
                    fontWeight: "bold",
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    backgroundColor: "#ffffff",
                    borderRadius: 6,
                    color: "#5e5e5e !important",
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
                    color: "#5e5e5e !important",
                },
            },
        },
    },
});
