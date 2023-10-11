/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../../services/Constants/BASE_URL";
import { useRequestData } from "../../hooks/useRequestData";

export const HooksContext = createContext();
export const HooksProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState( JSON.parse(localStorage.getItem("pokedex")) || []);
  const [pokeDetails, setPokeDetails] = useState(JSON.parse(localStorage.getItem("pokeDetails")) || []);
  const { data: pokeLista, loading, error } = useRequestData(BASE_URL);
  //--------------- header---------------------------------
  const [page, setPage] = useState(
    JSON.parse(localStorage.getItem("page")) || "home"
  );
  useEffect(
    () => localStorage.setItem("page", JSON.stringify(page)),
    [page]
  );
  const alteraPage = (pagina) =>{
    setPage(pagina);
  }
  //--------------- header---------------------------------
  const addPokedex = (pokemon) => {
    const filtrado = pokedex.find((item) => item.name === pokemon.name);
    if(filtrado === undefined){
      setPokedex([...pokedex, pokemon]);
    }else{
      alert("Ja esta na pokedex")
    }
  }

  useEffect(()=>{
    if(pokedex.length > 0){
      localStorage.setItem("pokedex", JSON.stringify(pokedex));
    }
    if(pokeDetails.length > 0){
      localStorage.setItem("pokeDetails", JSON.stringify(pokeDetails))
    }
  }, [pokedex])

  const delPokemon = (pokemon) => {
    const poke = pokedex.filter(item => item.name !== pokemon.name);
    setPokedex(poke)
    localStorage.setItem("pokedex", JSON.stringify(poke));
  }

  return (
    <HooksContext.Provider value={{ pokeLista, loading, error, addPokedex, pokedex, page, alteraPage, delPokemon, setPokeDetails, pokeDetails }}>
      {children}
    </HooksContext.Provider>
  )
};
