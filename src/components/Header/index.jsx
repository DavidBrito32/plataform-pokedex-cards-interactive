/* eslint-disable no-unused-vars */
import { styled } from "styled-components";

import Logo from "./assets/logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HooksContext } from "../../context";

const ContainerHeader = styled.header`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 160px;
  position: sticky;
  top: 0;
  z-index: 110;

  & .botao1 {
    width: fit-content;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease-in-out 400ms;
    & .arrowLeft {
      width: 10px;
      height: 10px;
      transform: rotate(45deg);
      border-left: 2px solid black;
      border-bottom: 2px solid black;
    }

    & a {
      font-size: 1.5rem;
    }
  }

  & .logo {
    width: 307px;
    height: 113px;
    transition: all ease-in-out 400ms;
    & img {
      width: 100%;
      height: 100%;
      transition: all ease-in-out 400ms;
    }
  }

  & .botao2 {
    width: 287px;
    height: 74px;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    transition: all ease-in-out 400ms;

    & a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      background-color: #33a4f5;
      font-size: 1.5rem;
      color: white;
      font-weight: bold;
      cursor: pointer;
      border-radius: 12px;
      transition: all ease-in-out 400ms;
      &:active {
        transform: scale(0.97);
      }

      &:hover {
        background-color: #49b2fd;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    justify-content: space-between;
    padding: 0;
    & .botao1 {
      & a {
        font-size: 0.8rem;
      }
    }

    & .logo {
      width: 120px;
      & img {
        width: 100%;
      }
    }

    & .botao2 {
      width: 100px;
      height: 40px;
      & a {
        font-size: 1rem;
      }
    }
  }
  @media only screen and (min-width: 480px) and (max-width: 768px) {
    padding: 0 20px;
    justify-content: space-between;
    & .botao1 {
      & a {
        font-size: 1rem;
      }
    }

    & .logo {
      width: 190px;
      height: auto;
      & img {
        width: 100%;
      }
    }

    & .botao2 {
      width: 160px;
      height: 55px;
      & a {
        font-size: 1rem;
      }
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 0 20px;
    justify-content: space-between;
    & .botao1 {
      & a {
        font-size: 1.3rem;
      }
    }

    & .logo {
      width: 250px;
      height: auto;
      & img {
        width: 100%;
      }
    }

    & .botao2 {
      width: 230px;
      height: 65px;
      & a {
        font-size: 1rem;
      }
    }
  }
`;

const Header = () => {
  const { page, setPage, setAddOrExclui, addOrExclui } =
    useContext(HooksContext);

  const mudapagesAndButtons = () => {
    setAddOrExclui(!addOrExclui);
    setPage(!page);
  };

  return (
    <>
      <ContainerHeader>
        <div className="botao1">
          {page && (
            <>
              <div className="arrowLeft"></div>
              <Link onClick={mudapagesAndButtons} to="/">
                Todos os pokemons
              </Link>
            </>
          )}
        </div>

        <div className="logo">
          <img src={Logo} alt="Logomarca Pokemon" />
        </div>

        <div className="botao2">
          {!page && (
            <Link onClick={mudapagesAndButtons} to="/pokedex">
              Pokédex
            </Link>
          )}
        </div>
      </ContainerHeader>
    </>
  );
};

export default Header;
