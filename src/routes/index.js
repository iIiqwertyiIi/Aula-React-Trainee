import { Route, Routes } from "react-router-dom";
import CategoriesPage from "../pages/categories";
import GamesPage from "../pages/games";
import Home from "../pages/home";
import NotFound from "../pages/NotFound";
import Numero from "../pages/numero";

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/game/:gameId" element={<Numero />} />
        </Routes>
    );
}

export default MyRoutes