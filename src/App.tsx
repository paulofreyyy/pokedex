import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { Layout } from "./components/layout";

export const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/:number" element={<Details />} />
                </Routes>
            </Layout>
        </Router>
    );
};