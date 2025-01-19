import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { Layout } from "./components/layout";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/details/:number" element={<Details />} />
                    </Routes>
                </Layout>
            </Router>
        </ThemeProvider>
    );
};