/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {  createContext, useEffect, useState } from 'react';
export const HooksContext = createContext();

export const HooksProvider = ({children}) => {
    const [pokebola, setPokebola] = useState(JSON.parse(localStorage.getItem('pokebola')) || []);
    const [idPokemon, setIdPokemon] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [addOrExclui, setAddOrExclui] = useState(false);
    const [page, setPage] = useState(JSON.parse(localStorage.getItem('page')) || false);

    //pegando a lista de pokemons
    useEffect(()=>{
        const getPokemons = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100', {"method": "GET"});
            const result = await response.json();
            setPokemons(result.results);
        }
        getPokemons();
    },[]);

    return (

        <HooksContext.Provider
            value={
                {
                    pokemons,
                    pokebola,
                    setPokebola,
                    page,
                    setPage,
                    idPokemon,
                    setIdPokemon,
                    addOrExclui,
                    setAddOrExclui
                }
            }
        >
            {children}
        </HooksContext.Provider>
    )
}