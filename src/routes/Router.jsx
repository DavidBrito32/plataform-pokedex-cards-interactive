import { HashRouter, Routes, Route } from 'react-router-dom';
import LayoutPage from '../layouts';
import PageHome from '../pages/pageHome';
import ErrorPage from '../pages/ErrorPage';
import PokedexPage from '../pages/pokedexPage';
import PokemonDetails from '../pages/pokemonDetails';

const Router = () => {
    return(
        <>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<LayoutPage />}>
                        <Route index element={<PageHome />} />
                        <Route path='/pokedex' element={<PokedexPage />} />
                        <Route path='/pokedex/details/:id' element={<PokemonDetails />} />
                        <Route path='*' element={<ErrorPage />} />
                    </Route>
                </Routes>
            </HashRouter>
        </>
    )
}

export default Router;