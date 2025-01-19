import { AppBar, Box, Container, IconButton, Toolbar, Typography } from "@mui/material"
import { LuJoystick } from "react-icons/lu";
import { TbMovie, TbNews, TbPokeball, TbVideo } from "react-icons/tb";

interface Props {
    children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
    const pages = [
        { name: "Pokedex", icon: <TbPokeball /> },
        { name: "Notícias", icon: <TbNews /> },
        { name: "Jogos", icon: <LuJoystick /> },
        { name: "Séries", icon: <TbVideo /> },
        { name: "Filmes", icon: <TbMovie /> },
    ];

    return (
        <Container sx={{ py: 3 }}>
            <AppBar
                sx={{
                    position: 'relative',
                    mb: 3,
                    bgcolor: '#FFF',
                    boxShadow: '0px 0px 10px 3px rgba(221,225,235,1)',
                    borderRadius: 3
                }}
                elevation={0}
            >
                <Container>
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'space-evenly' } }}>
                            {pages.map(({ icon, name }) => (
                                <IconButton
                                    key={name}
                                    sx={{ my: 2, color: "#9c9c9c", display: "flex", alignItems: "center" }}
                                    disableRipple
                                >
                                    {icon}
                                    <Typography sx={{ ml: 1 }}>{name}</Typography>
                                </IconButton>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Área principal */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    transition: 'margin-left 0.3s',
                }}
            >
                <Box>{children}</Box>
            </Box>
        </Container>
    )
}