import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutPage from '../layouts';
import PageHome from '../pages/pageHome';
import ErrorPage from '../pages/ErrorPage';
import PokedexPage from '../pages/pokedexPage';
import PokemonDetails from '../pages/pokemonDetails';
import { useRequestData } from '../hooks/useRequestData';
import { BASE_URL } from '../services/Constants/BASE_URL';
import { useEffect } from 'react';

const Router = () => {
    const {data: pokeLista} = useRequestData(BASE_URL);
    useEffect(()=>{
      localStorage.setItem("pokeLista", JSON.stringify(pokeLista));
    }, [pokeLista]);

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LayoutPage />}>
                        <Route index element={<PageHome />} />
                        <Route path='/pokedex' element={<PokedexPage />} />
                        <Route path='/pokedex/details/:id' element={<PokemonDetails />} />
                        <Route path='*' element={<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;