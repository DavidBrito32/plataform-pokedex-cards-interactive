/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { styled } from "styled-components";
import bg from "./assets/bg.svg";
import { useContext, useEffect, useState, memo } from "react";
import { HooksContext } from "../../context/HooksProvider";
import { useParams } from "react-router-dom";
import { defineImageType } from "../../components/CardPokemon/Support/Assets";
import { useRequestData } from "../../hooks/useRequestData";
import { ColorCard, ColorType, strongCalc, powerFullProgress} from "../../services/Support_Functions";
import LoadingStats from "../../components/loadindStats";

const PokemonDetails = () => {
  const [corDoCard, setCorDoCard] = useState("");
  const [corDoTipo1, setCorDoTipo1] = useState("");
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [corDoTipo2, setCorDoTipo2] = useState("");
  const [imageType1, setImageType1] = useState("");
  const [imageType2, setImageType2] = useState("");
  const { id } = useParams();
  const { pokeDetails } = useContext(HooksContext);
  const { data: details, loading, error} = useRequestData(pokeDetails.url);

  useEffect(() => {
    if (details && details.types && details.types.length > 0 && details.types[0].type.name) {
      setCorDoCard(ColorCard(details.types[0].type.name));
      setCorDoTipo1(ColorType(details.types[0].type.name));
      setImageType1(defineImageType(details.types[0].type.name));
      setType1(details.types[0].type.name);
    }

    if (details && details.types && details.types.length > 1 && details.types[1] && details.types[1].type.name) {
      setCorDoTipo2(ColorType(details.types[1].type.name));
      setImageType2(defineImageType(details.types[1].type.name));
      setType2(details.types[1].type.name);
    }
  }, [details]);

  

  let pontos = [];
  details && details.stats.map((item) => (pontos = [...pontos, item.base_stat]));
  const powerFull = pontos.reduce((acumulador, atual) => acumulador + atual, 0);
  return (
    <>
      <ContainerDetails
        $colorCard={corDoCard}
        $type1={corDoTipo1}
        $type2={corDoTipo2}
      >
        {loading && <LoadingStats />}
        {error && <p>Ocorreu um erro</p>}
        {details && (
          <>
            <h1>Detalhes</h1>
            <div className="bg">
              <img src={bg} alt="" />
            </div>
            <div className="pokemonInfos">
              <div className="background"></div>
              <div className="sprites">
                <div className="bloco">
                  {details && (
                    <img
                      src={details.sprites.front_default}
                      alt="front_default"
                    />
                  )}
                </div>

                <div className="bloco">
                  {details && (
                    <img
                      src={details.sprites.back_default}
                      alt="back_default"
                    />
                  )}
                </div>
              </div>

              <div className="base_stats">
                <ul>
                  <h3>Base stats</h3>

                  {loading ||
                    details.stats.map((item, i) => (
                      <Li key={i} $barra={`${item.base_stat}`}>
                        <h4>{item.stat.name}</h4> <span>{item.base_stat}</span>{" "}
                        <div className="progress">
                          <div className="status"></div>
                        </div>
                      </Li>
                    ))}
                  <Li $total={powerFull} $barra={powerFull}>
                    <h4>{"Total"}</h4> <span>{powerFull}</span>
                    <div className="progress">
                      <div className="status total"></div>
                    </div>
                  </Li>
                </ul>
              </div>

              <div className="poke">
                <h3>#{id}</h3>
                <h2>{pokeDetails.name}</h2>
                <div className="types">
                  {imageType1 && (
                    <span className="type1">
                      <img src={imageType1} alt="img" />
                      {type1}
                    </span>
                  )}
                  {imageType2 && (
                    <span className="type2">
                      <img src={imageType2} alt="img" />
                      {type2}
                    </span>
                  )}
                </div>

                <div className="moves">
                  <h2>Moves: </h2>
                  {details &&
                    details.moves.map((moviment, i) => (
                      <span key={i}>{moviment.move.name}</span>
                    ))}
                </div>
              </div>

              <img
                className="pokemon"
                src={`https://www.serebii.net/swordshield/pokemon/${id}.png`}
                alt="pokemon"
              />
            </div>
          </>
        )}
      </ContainerDetails>
    </>
  );
};

const ContainerDetails = styled.div`
  width: 100%;
  /* min-height: 130vh; */
  background-color: #5e5e5e;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  transition-duration: 400ms;
  padding-bottom: 80px;

  & h1 {
    color: white;
    font-weight: bold;
    font-size: 48px;
    line-height: 72px;
    margin: 60px 0;
  }

  & .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    z-index: 0;

    & img {
      display: block;
      margin: 0 auto;
      width: 80%;
      height: 96%;
      object-fit: cover;
    }
  }

  & .pokemonInfos {
    width: 85rem;
    margin: 0 auto;
    background-color: ${(props) => props.$colorCard || "#242466"};
    border-radius: 29px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 26px 40px;
    z-index: 1;
    position: relative;
    transition: all ease-in-out 400ms;

    & .pokemon {
      position: absolute;
      top: -110px;
      right: -30px;
      width: 300px;
      height: 300px;
    }

    & .background {
      width: 50%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0px;
      background: url(${bg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      z-index: 0;
    }

    & .sprites {
      width: 285px;
      height: 500px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 45px;
      margin-right: 35px;
      z-index: 1;

      & .bloco {
        width: 282px;
        height: 45%;
        background-color: white;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        & img {
          display: block;          
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    & .base_stats {
      width: 343px;
      height: 500px;
      background-color: white;
      border-radius: 12px;
      padding: 19px 18px;
      margin-right: 70px;
      z-index: 1;
      & ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px 0;

        & h3 {
          width: 100%;
          font-size: 28px;
          border-bottom: 1px solid black;
        }
      }
    }

    & .poke {
      width: 300px;
      height: 500px;
      display: flex;
      flex-direction: column;
      z-index: 1;
      transition-duration: 400ms;

      & h2,
      h3 {
        color: white;
        margin: 10px 0;
      }

      & .types {
        width: 100%;
        display: flex;
        gap: 10px;
        margin-bottom: 50px;
        & span {
          width: 100px;
          height: 32px;
          border-radius: 8px;
          border: 2px dashed white;
          display: flex;
          justify-content: space-around;
          align-items: center;
          color: white;
          transition-duration: 400ms;

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

      & .moves {
        width: 100%;
        background-color: white;
        height: 380px;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        gap: 20px;
        padding: 18px;
        border-radius: 12px;

        & h2 {
          font-size: 24px;
          line-height: 30px;
          color: black;
        }
        & span {
          width: 117px;
          padding: 5px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          background-color: #ececec;
          border: 2px dashed #f4bf82;
          font-size: 14px;
        }

        &::-webkit-scrollbar {
          width: 10px;
          background-color: ${(props) => props.$type2 || "#242466"};
        }
        &::-webkit-scrollbar-thumb {
          width: 10px;
          border-radius: 8px;
          background-color: ${(props) => props.$type1 || "#242466"};
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 0 10px;
    height: auto;
    overflow: initial;
    & h1 {
      font-size: 28px;
      margin: 20px 0;
    }

    & .bg {
      display: none;
    }

    & .pokemonInfos {
      width: 100%;
      flex-direction: column-reverse;
      padding: 0;
      gap: 30px;
      align-items: center;

      & .sprites {
        & .bloco {
          & img {
            width: 150px;
            height: 150px;
          }
        }
      }

      & .pokemon {
        width: 180px;
        height: 180px;
        top: -60px;
        right: 0;
      }

      & .poke {
        width: 95%;
        height: 400px;
        padding: 5px;
        margin: 0;

        & .moves {
          padding: 10px;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;

          & h2 {
            width: 100%;
          }
        }
      }

      & .base_stats {
        width: 95%;
        height: 350px;
        padding: 5px;
        margin: 0;
      }

      & .sprites {
        width: 95%;
        height: 300px;
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 5px;
        & .bloco {
          width: 45%;
        }
      }
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    padding: 0 10px;
    height: auto;
    overflow: initial;
    & h1 {
      font-size: 28px;
      margin: 20px 0;
    }

    & .bg {
      display: none;
    }

    & .pokemonInfos {
      width: 100%;
      flex-direction: column-reverse;
      padding: 0;
      gap: 30px;
      align-items: center;

      & .pokemon {
        width: 220px;
        height: 220px;
        top: -80px;
      }

      & .poke {
        width: 95%;
        height: 400px;
        padding: 5px;
        margin: 0;

        & .moves {
          padding: 10px;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;

          & h2 {
            width: 100%;
          }
        }
      }

      & .base_stats {
        width: 95%;
        height: 330px;
        padding: 5px;
        margin: 0;
      }

      & .sprites {
        width: 95%;
        height: 300px;
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 5px;
        & .bloco {
          width: 45%;
        }
      }
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    & .pokemonInfos {
      width: 90%;
      margin: 0;
      gap: 10px;
      flex-wrap: nowrap;

      & .pokemon {
        width: 180px;
        height: 180px;
        margin: 0;
      }

      & .sprites {
        width: 30%;
        margin: 0;

        & .bloco {
          height: 40%;
        }
      }

      & .base_stats {
        width: 40%;
        margin: 0;
      }

      & .poke {
        width: 30%;
        margin: 0;

        & .moves {
          padding: 10px;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;

          & h2 {
            width: 100%;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1025px) {
    & .pokemonInfos {
      width: 90vw;
      margin: 0 auto;
      gap: 10px;
      flex-wrap: nowrap;

      & .pokemon {
        width: 270px;
        height: 270px;
        margin: 0;
      }

      & .sprites {
        width: 30%;
        margin: 0;
      }

      & .poke {

        & .moves {
          padding: 10px;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;

          & h2 {
            width: 100%;
          }
        }
      }
    }
  }
`;

const Li = styled.li`
  width: 100%;
  height: 35px;
  border-bottom: 1px solid black;
  font-weight: bold;
  display: flex;
  gap: 15px;
  font-size: 0.7rem;
  align-items: center;

  & h4 {
    width: 95px;
    text-align: right;
  }

  & span {
    width: 30px;
    text-align: center;
  }

  & .progress {
    width: 140px;
    height: 15px;
    overflow: hidden;
    border-radius: 12px;
    transition-duration: 400ms;
    transition-delay: 3s;
    background-color: #5e5e5e25;

    & .status {
      /* width: calc(100 * ${(props) => props.$barra / 100 + "%" || "0%"}); */
      width: calc(1 * ${(props) => Math.min(props.$barra, 100) || 0}%);
      border-radius: 12px;
      background-color: ${(props) => strongCalc(props.$barra)};
      height: 100%;
      transition-delay: 3s;
      transition-duration: 400ms;

      &.total {
        width: calc(${(props) => props.$total / 10 + "%" || "50%"});
        background-color: ${(props) => powerFullProgress(props.$barra)};
      }
    }
  }
`;

export default memo(PokemonDetails);