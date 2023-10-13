/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../../services/Constants/BASE_URL";
import { useRequestData } from "../../hooks/useRequestData";

export const HooksContext = createContext();
export const HooksProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState( JSON.parse(localStorage.getItem("pokedex")) || []);
  //estado que controla o pokemon da pagina de detalhes
  const [pokeDetails, setPokeDetails] = useState(JSON.parse(localStorage.getItem("pokeDetails")) || []);
  const [message, setMessage] = useState("");

  const [addPokemon] = useState({titulo: "Gotcha!", subTitle: "O Pokémon foi adicionado a sua Pokédex"});

  const [removePokemon] = useState({titulo: "Oh, no!", subTitle: "O Pokémon foi removido da sua Pokedéx"});

  const [modal, setModal] = useState(false);

  const modificaModal = () => {
    setModal(!modal);
  }

  //-----------------------------------------------------------------------------------------------
  const [btnPokemon, setBtnPokemon] = useState( JSON.parse(localStorage.getItem("btnPokemon")) || false);
  //-----------------------------------------------------------------------------------------------

  const { data: pokeLista, loading, error } = useRequestData(BASE_URL);
  //--------------- header---------------------------------
  const [page, setPage] = useState(
    JSON.parse(localStorage.getItem("page")) || "home"
  ); 
  
  const [detailsVerify, setDetailsVerify] = useState( JSON.parse(localStorage.getItem("detailsVerify")) || false)
  //--------------- header---------------------------------+
  useEffect(
    () => localStorage.setItem("page", JSON.stringify(page)),
    [page]
  );
  const alteraPage = (pagina) =>{
    setPage(pagina);
  }
  //-------------------------------------------------------+
  /* Funções do fluxo que adiciona ou remove o pokemon da pokedex */
  const addPokedex = (pokemon) => {
    const filtrado = pokedex.find((item) => item.name === pokemon.name);    
    if(filtrado === undefined){
      setPokedex([...pokedex, pokemon]);
      modificaModal();
      setMessage("adicionar")
    }else{
      modificaModal();
      setMessage("ja foi adicionado")
    }
  }
  const delPokemon = (pokemon) => {
    const poke = pokedex.filter(item => item.name !== pokemon.name);
    modificaModal();
    setMessage("remover")
    setPokedex(poke)
    localStorage.setItem("pokedex", JSON.stringify(poke));
  }
  //-----------------------------------------------------------------
  //--------------- header---------------------------------+
  useEffect(()=>{
    if(pokedex.length > 0){
      localStorage.setItem("pokedex", JSON.stringify(pokedex));
    }
    if(pokeDetails.length > 0){
      localStorage.setItem("pokeDetails", JSON.stringify(pokeDetails))
    }
  }, [pokedex])

  return (
    <HooksContext.Provider 
    value={{ 
      pokeLista, 
      loading,
      error, 
      addPokedex, 
      pokedex, 
      page, 
      alteraPage, 
      delPokemon, 
      setPokeDetails, 
      pokeDetails, 
      setDetailsVerify,
      detailsVerify,
      btnPokemon,
      setBtnPokemon,
      modificaModal,
      modal,
      addPokemon,
      removePokemon,
      message
      }}>
      {children}
    </HooksContext.Provider>
  )
};
