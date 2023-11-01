import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LayoutPage from "../layouts";
import PageHome from "../pages/pageHome";
import ErrorPage from "../pages/ErrorPage";
import PokedexPage from "../pages/pokedexPage";
import PokemonDetails from "../pages/pokemonDetails";

const Router = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence
        mode="wait"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<PageHome />} />
            <Route path="/pokedex" element={<PokedexPage />} />
            <Route path="/pokedex/details/:id" element={<PokemonDetails />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Router;
