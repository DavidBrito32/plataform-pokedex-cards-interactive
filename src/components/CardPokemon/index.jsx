/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { typesImage } from "./assets/icones tipos";
import { corDoCard, corDoType } from "./defineCor";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import pokebola from "./assets/pokebola.svg";
import { useEffect, useState, useContext } from "react";
import { HooksContext } from "../../context";

const ContainerCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;

  & .containerInternal {
    display: flex;
    width: 100%;
    height: 13rem;
    background-color: ${(props) => props.$cardColor};
    justify-content: space-between;
    border-radius: 12px;
    position: relative;
    & .texto {
      width: 40%;
      height: 100%;
      position: relative;
      padding-top: 20px;
      padding-left: 20px;
      color: white;

      & .types {
        width: 100%;
        display: flex;
        gap: 7px;
        & .tipo1 {
          background-color: ${(props) => props.$type};
        }
        & .tipo2 {
          background-color: ${(props) => props.$type1};
        }
        & span {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 92px;
          height: 31px;
          border: 1px solid black;
          border-radius: 8px;
          overflow: hidden;
          text-transform: capitalize;
          border: 2px dashed white;

          & img {
            width: 17px;
            height: 17px;
          }
        }
      }
    }

    & .botoes {
      width: 100%;
      height: 40px;
      position: absolute;
      bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 22px;
      z-index: 3;

      & a {
        color: white;
        text-decoration: underline;
        font-size: 1rem;
      }

      & button {
        width: 146px;
        height: 38px;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 400;
        border: none;
        cursor: pointer;

        &:active {
          transform: scale(0.97);
        }
      }
    }

    & .imagem {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      height: 100%;
      position: relative;

      & img {
        width: 230px;
        height: 230px;
        object-fit: cover;
        position: absolute;
        top: -80px;
        right: 0;
      }

      & .fundo {
        display: block;
        width: 310px;
        height: 310px;
        position: absolute;
        background-image: url(${pokebola});
        background-size: cover;
        background-position: center;
        top: -90px;
        right: -40px;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    & .containerInternal {
      height: 10rem;

      & .texto {
        padding: 0 5px;

        & h3 {
          font-size: 0.8rem;
        }

        & h2 {
          font-size: 1.3rem;
        }

        & .types {
          & span {
            height: 25px;
            & img {
              width: 15px;
              height: 15px;
            }
          }
        }
      }

      & .botoes {
        & a {
          font-size: 1rem;
        }

        & button {
          width: 130px;
          height: 30px;
        }
      }

      & .imagem {
        & img {
          width: 120px;
          height: 120px;
          top: -40px;
          right: 20px;
        }

        & .fundo {
          width: 13rem;
          height: 13rem;
          top: -65px;
          right: -15px;
        }
      }
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    & .containerInternal {
      height: 11rem;

      & .texto {
        padding: 10px 10px;

        & h3 {
          font-size: 1.1rem;
        }

        & h2 {
          font-size: 1.4rem;
        }
      }

      & .imagem {
        & img {
          width: 145px;
          height: 145px;
          top: -40px;
          right: 5px;
        }

        & .fundo {
          width: 15rem;
          height: 15rem;
          top: -65px;
          right: -30px;
        }
      }
    }
  }
`;
const CardPokemon = (props) => {
    const { setPokebola, pokebola } = useContext(HooksContext);
    const { name, url } = props.infos;
    const [pokemon, setPokemon] = useState([]);
    const [cardType1, setCardType1] = useState("");
    const [cardType2, setCardType2] = useState("");

    const formatarNumero = (numero) => {
        if (numero >= 1 && numero <= 9) {
          return `00${numero}`;
        } else if (numero >= 10 && numero <= 99) {
          return `0${numero}`;
        } else if (numero >= 100) {
          return `${numero}`;
        } else {
          return "Número inválido";
        }
    }
    const id = formatarNumero(props.id + 1);

    const adicionaNaPokebola = () => {
       const poke =  pokebola.find((item) => {
            return item.name === props.infos.name;
        });

        if(poke === undefined){
            setPokebola([...pokebola, props.infos])
        }else{
            console.log("Pokemon ja esta na pokebola");
        }

        console.log(pokebola);
    }


  const [cardColor, setCardColor] = useState("");
  const [corDoTipo1, setCorDoTipo1] = useState("");
  const [corDoTipo2, setCorDoTipo2] = useState("");

  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch(url, { method: "GET" });
      const result = await response.json();
      setPokemon(result);
    };
    getPokemons();
  }, []);

  useEffect(() => {
    if(pokemon.types && pokemon.types.length > 0 && pokemon.types[0].type.name){
        setCardColor(corDoCard(pokemon.types[0].type.name));
        setCorDoTipo1(corDoType(pokemon.types[0].type.name));
        setCardType1(pokemon.types[0].type.name);
    }

    if((
        pokemon.types &&
        pokemon.types.length > 1 &&
        pokemon.types[1] &&
        pokemon.types[1].type.name
      )){
        setCorDoTipo2(corDoType(pokemon.types[1].type.name));
        setCardType2(pokemon.types[1].type.name)
    }
  })

  return (
    <>
      <ContainerCard
        $cardColor={cardColor}
        $type={corDoTipo1}
        $type1={corDoTipo2}
      >
        <div className="containerInternal">
          <div className="texto">
            <h3>
              #{id}
            </h3>
            <h2>{name}</h2>
            <div className="types">
              <span className="tipo1">
                <img src={""} alt="imagem" />
                {cardType1}
              </span>
              {cardType2 && <span className="tipo2">
                <img src={""} alt="imagem" />
                {cardType2}
              </span>}
            </div>
          </div>
          <div className="botoes">
            <Link to="/">Detalhes</Link>
            <button onClick={adicionaNaPokebola}>Capturar</button>
          </div>
          <div className="imagem">
            <div className="fundo"></div>
            <img
              src={`https://www.serebii.net/swordshield/pokemon/${id}.png`}
              alt="pokemon"
            />
          </div>
        </div>
      </ContainerCard>
    </>
  );
};

export default CardPokemon;
