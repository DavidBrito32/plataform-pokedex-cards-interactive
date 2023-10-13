import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./assets/pokemon.svg";
import { useContext } from "react";
import { HooksContext } from "../../context/HooksProvider";
import Modal from "../Modal";

const Header = () => {
  const {
    page,
    alteraPage,
    detailsVerify,
    addPokedex,
    delPokemon,
    pokeDetails,
    setDetailsVerify,
    btnPokemon,
    setBtnPokemon,
    message, 
    addPokemon, 
    removePokemon, 
    modal, 
    modificaModal
  } = useContext(HooksContext);
  const mudaPage = (directory) => {
    alteraPage(directory);
    setBtnPokemon(false);
    localStorage.setItem("btnPokemon", JSON.stringify(false));
  };
  const excluiPokemon = (poke) => {
    delPokemon(poke);
    setDetailsVerify(!detailsVerify);
    localStorage.setItem("detailsVerify", JSON.stringify(false));
  };
  const AddPokemon = (poke) => {
    addPokedex(poke);
    setDetailsVerify(!detailsVerify);
    localStorage.setItem("detailsVerify", JSON.stringify(true));
  };

  return (
    <>
      {message === "adicionar" && <Modal titulo={addPokemon.titulo} subTitulo={addPokemon.subTitle}   modal={modificaModal} active={modal} />}
      
      {message === "remover" && <Modal titulo={removePokemon.titulo} subTitulo={removePokemon.subTitle}   modal={modificaModal} active={modal} />}

      <HeaderContainer>
        <div className="home">
          {page === "pokedex" && (
            <Link to={"/"} onClick={() => mudaPage("home")}>
              {" "}
              <span></span> Todos os Pokémons
            </Link>
          )}
        </div>

        <div className="logo">
          <img src={Logo} alt="Logo_Pokemon" />
        </div>

        <div className="pokedex">
          {page === "home" && (
            <Link onClick={() => mudaPage("pokedex")} to={"/pokedex"}>
              Pokédex
            </Link>
          )}

          {btnPokemon && detailsVerify && (
            <Link className="excluir" onClick={() => excluiPokemon(pokeDetails)}>Excluir</Link>
          )}

          {btnPokemon && !detailsVerify && (
            <Link className="adicionar" onClick={() => AddPokemon(pokeDetails)}>Adicionar</Link>
          )}
        </div>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 41px 0 71px;

  & .home {
    width: 12.5rem;

    & a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      text-decoration: underline;
      text-underline-offset: 2px;

      & span {
        width: 7px;
        height: 7px;
        border-bottom: 2px solid black;
        border-left: 2px solid black;
        transform: rotate(45deg);
      }
    }
  }

  & .logo {
    width: 19.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      display: block;
      width: 100%;
      object-fit: contain;
    }
  }

  & .pokedex {
    width: 18rem;
    height: 4.7rem;

    & a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      background-color: #33a4f5;
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 36px;
      color: white;
      transition-duration: 400ms;
      &:hover {
        background-color: #1f8cd9;
      }
      &:active {
        scale: 0.97;
      }

      &.adicionar{
        transition-duration: 400ms;
        background-color: #529600;
        transition-delay: 100ms;
      }

      &.excluir{
        transition-duration: 400ms;
        background-color: red;
        transition-delay: 100ms;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    height: 5rem;
    padding: 0 10px;
    gap: 20px;

    & .home {
      width: 8rem;
      & a {
        font-size: 0.8rem;
      }
    }

    & .logo {
      width: 10rem;
    }

    & .pokedex {
      width: 10rem;
      height: 2rem;

      & a {
        font-size: 0.9rem;
      }
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    height: 7rem;
    padding: 0 20px;

    & .logo {
      width: 12rem;
    }

    & .pokedex {
      width: 12rem;
      height: 3.5rem;

      & a {
        font-size: 1.5rem;
      }
    }
  }
`;

export default Header;
