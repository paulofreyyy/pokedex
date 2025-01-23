import { AppBar, Box, Container, IconButton, Toolbar, Typography } from "@mui/material"
import { LuJoystick } from "react-icons/lu";
import { TbMovie, TbNews, TbPokeball, TbVideo } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";
import { ScrollToTop } from "../buttons/ScrollToTop";

interface Props {
    children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
    const navigate = useNavigate();
    const location = useLocation();

    const pages = [
        { name: "Pokedex", icon: <TbPokeball />, path: '/' },
        { name: "Notícias", icon: <TbNews />, path: '/noticias' },
        { name: "Jogos", icon: <LuJoystick />, path: '/jogos' },
        { name: "Séries", icon: <TbVideo />, path: '/series' },
        { name: "Filmes", icon: <TbMovie />, path: '/filmes' },
    ];

    return (
        <>
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
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                }}
                            >
                                {pages.map(({ icon, name, path }) => (
                                    <IconButton
                                        key={name}
                                        sx={{
                                            my: 2,
                                            color: location.pathname === path ? "#E3350D" : '#9c9c9c',
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                        disableRipple
                                        onClick={() => navigate(path)}
                                    >
                                        {icon}
                                        <Typography sx={{ ml: 1 }} fontWeight={location.pathname === path ? 600 : 500}>{name}</Typography>
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

            <ScrollToTop />
        </>
    )
}