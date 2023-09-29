import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayout from '../layouts/BaseLayout';
import Home from '../pages/Home';
import Pokedex from '../pages/Pokedex';

const Ways = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<BaseLayout />}>
                        <Route index element={<Home />} />
                        <Route path='/pokedex' element={<Pokedex />} />
                    </Route>
                </Routes>
            </BrowserRouter>        
        </>
    )
}

export default Ways;