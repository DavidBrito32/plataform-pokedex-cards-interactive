/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {  createContext, useEffect, useState } from 'react';
export const HooksContext = createContext();

export const HooksProvider = ({children}) => {
    const [pokebola, setPokebola] = useState(JSON.parse(localStorage.getItem('pokebola')) || [])
    const [pokemons, setPokemons] = useState([]);


    //pegando a lista de pokemons
    useEffect(()=>{
        const getPokemons = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=150', {"method": "GET"});
            const result = await response.json();
            setPokemons(result.results)
        }
        getPokemons();
    },[]);

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   
  //usados para definir as cores dos cards e dos tipos dos cards e as imagens tambem  


    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 



      //useEffect que guarda os pokemons na pokebola local storage

    return (

        <HooksContext.Provider
            value={
                {
                    pokemons,
                    pokebola,
                    setPokebola,

                }
            }
        >
            {children}
        </HooksContext.Provider>
    )
}