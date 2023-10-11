/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import bg from "./Assets/bg.svg";
import { typesImage } from "./Support/Assets";
import { defineColorCard, defineColorType, convertNumber } from "./Support";
import { HooksContext } from "../../context/HooksProvider";
import { useRequestData } from "../../hooks/useRequestData";

const CardPokemon = ({ pokemon, btn }) => {
  const { name, url } = pokemon;
  const { data: pokeInfo } = useRequestData(url);

  const {
    addPokedex,
    delPokemon,
    setPokeDetails,
    alteraPage,
    pokedex,
    setDetailsVerify,
    setBtnPokemon
  } = useContext(HooksContext);

  const [corDoCard, setCorDoCard] = useState("");
  const [corDoTipo1, setCorDoTipo1] = useState("");
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [corDoTipo2, setCorDoTipo2] = useState("");
  const [imageType1, setImageType1] = useState("");
  const [imageType2, setImageType2] = useState("");

  useEffect(() => {
    if (
      pokeInfo &&
      pokeInfo.types &&
      pokeInfo.types.length > 0 &&
      pokeInfo.types[0].type.name
    ) {
      setCorDoCard(defineColorCard(pokeInfo.types[0].type.name));
      setCorDoTipo1(defineColorType(pokeInfo.types[0].type.name));
      setImageType1(defineImageType(pokeInfo.types[0].type.name));
      setType1(pokeInfo.types[0].type.name);
    }

    if (
      pokeInfo &&
      pokeInfo.types &&
      pokeInfo.types.length > 1 &&
      pokeInfo.types[1] &&
      pokeInfo.types[1].type.name
    ) {
      setCorDoTipo2(defineColorType(pokeInfo.types[1].type.name));
      setImageType2(defineImageType(pokeInfo.types[1].type.name));
      setType2(pokeInfo.types[1].type.name);
    }
  }, [pokeInfo]);

  const defineImageType = (type) => {
    switch (type.toLowerCase()) {
      case "grass":
        return typesImage[9];

      case "poison":
        return typesImage[13];

      case "fire":
        return typesImage[7];

      case "flying":
        return typesImage[6];

      case "water":
        return typesImage[17];

      case "bug":
        return typesImage[0];

      case "normal":
        return typesImage[12];

      case "dark":
        return typesImage[1];

      case "dragon":
        return typesImage[2];

      case "electric":
        return typesImage[3];

      case "fairy":
        return typesImage[4];

      case "fighting":
        return typesImage[5];

      case "ghost":
        return typesImage[8];

      case "ground":
        return typesImage[10];

      case "ice":
        return typesImage[11];

      case "psychic":
        return typesImage[14];

      case "rock":
        return typesImage[15];

      case "steel":
        return typesImage[16];

      default:
        return typesImage[0];
    }
  };

  const openDetails = () => {
    setPokeDetails(pokemon);
    alteraPage("pokedex");
    localStorage.setItem("pokeDetails", JSON.stringify(pokemon));

    const pesquisa = pokedex.find((item) => item.name === name);

    if (pesquisa === undefined) {
      setDetailsVerify(false);
      alteraPage("pokedex");
      setBtnPokemon(true)
      localStorage.setItem("btnPokemon", JSON.stringify(true))
    } else {
      setDetailsVerify(true);
      setBtnPokemon(true)
      alteraPage("pokedex");
      localStorage.setItem("btnPokemon", JSON.stringify(true))      
    }
  };

  return (
    <>
      <CardContainer
        $colorCard={corDoCard}
        $type1={corDoTipo1}
        $type2={corDoTipo2}
      >
        <div className="pokeInfos">
          <h3>#{convertNumber(pokeInfo && pokeInfo.id)}</h3>
          <h2>{name}</h2>

          <div className="types">
            <span className="type1">
              <img src={imageType1} alt="TIPO 1" /> {type1}
            </span>
            {type2 && (
              <span className="type2">
                <img src={imageType2} alt="TIPO 2" /> {type2}
              </span>
            )}
          </div>

          <div className="action-Button">
            <Link
              onClick={openDetails}
              to={`/pokedex/details/${convertNumber(pokeInfo && pokeInfo.id)}`}
            >
              Detalhes
            </Link>
            {btn ? (
              <span className="excluir" onClick={() => delPokemon(pokemon)}>
                Excluir
              </span>
            ) : (
              <span onClick={() => addPokedex(pokemon)}>Capturar</span>
            )}
          </div>

          <div className="images">
            <img src={bg} alt="image" />
            {pokeInfo && (
              <img
                src={`https://www.serebii.net/swordshield/pokemon/${convertNumber(
                  pokeInfo.id
                )}.png`}
                className="pokeImage"
                alt="Pokemon"
              />
            )}
          </div>
        </div>
      </CardContainer>
    </>
  );
};

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  flex-direction: column;
  transition: all ease-in-out 400ms;

  & .pokeInfos {
    width: 100%;
    height: 210px;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 25px 23px 13px;
    border-radius: 8px;
    background-color: ${(props) => props.$colorCard || "#725E5E"};
    color: white;
    transition: all ease-in-out 400ms;

    & .types {
      width: 100%;
      display: flex;
      gap: 7px;
      margin: 10px 0 30px;
      & span {
        width: 100px;
        height: 32px;
        border-radius: 8px;
        border: 2px dashed white;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: white;

        &.type1 {
          background-color: ${(props) => props.$type1 || "#333"};
        }

        &.type2 {
          background-color: ${(props) => props.$type2 || "#333"};
        }

        & img {
          display: block;
          width: 17px;
          height: 19px;
          object-fit: contain;
        }
      }
    }

    & .action-Button {
      display: flex;
      justify-content: space-between;

      & a {
        font-weight: 700;
        text-decoration: underline;
        text-underline-offset: 2px;
        color: #ffffff;
      }

      & span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 146px;
        font-weight: 400;
        height: 38px;
        background-color: #ffffff;
        border-radius: 8px;
        cursor: pointer;
        z-index: 2;
        transition-duration: 100ms;
        color: black;
        &.excluir {
          background-color: red;
          color: white;
          &:hover {
            background-color: #d93030;
          }
        }

        &:hover {
          background-color: #f3f0f0;
        }
        &:active {
          scale: 0.97;
        }
      }
    }

    & .images {
      display: flex;
      & img {
        position: absolute;
        top: -50px;
        right: -30px;
        width: 275px;
        height: 275px;
      }
      & .pokeImage {
        width: 180px;
        height: 180px;
        top: -50px;
        right: 20px;
        object-fit: contain;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    & h2 {
      font-size: 1.3rem;
    }

    & .pokeInfos {
      padding: 15px 10px 0px;
      height: 190px;

      & .types {
        & span {
          width: 80px;
          height: 28px;
          font-size: 0.9rem;
        }
      }

      & .action-Button {
        & a {
          font-size: 1rem;
        }

        & span {
          width: 120px;
          height: 30px;
        }
      }

      & .images {
        & img {
          width: 230px;
          top: -70px;
        }

        & .pokeImage {
          width: 150px;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 768px) {
    & .pokeInfos {
      & .images {
        & img {
          width: 220px;
          top: -70px;
        }

        & .pokeImage {
          width: 160px;
        }
      }
    }
  }
`;

export default CardPokemon;
