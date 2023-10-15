import { useContext } from "react";
import CardPokemon from "../../components/CardPokemon";
import { styled } from "styled-components";
import { HooksContext } from "../../context/HooksProvider";
import LoadingStats from "../../components/loadindStats";
import Modal from "../../components/Modal";

const PageHome = () => {
  const { pokeLista, loading, error, message, addPokemon, modal, modificaModal } = useContext(HooksContext);

  return (
    <>
      {message === "adicionar" && <Modal titulo={addPokemon.titulo} subTitulo={addPokemon.subTitle}   modal={modificaModal} active={modal} />}
      {message === "ja foi adicionado" && <Modal titulo={"Ops !"} subTitulo={"O pokemon Ja esta na Pokedex"}   modal={modificaModal} active={modal} />}
      <ContainerHome>
        <h1>Todos os Pokemons</h1>
        <ListaPokemons>          
          {loading && <LoadingStats />}
          {error && <p>Ocorreu um erro</p>}
          {pokeLista && pokeLista.results.map((item) => <li key={item.name}><CardPokemon pokemon={item} /></li>)}
          
        </ListaPokemons>
      </ContainerHome>
    </>
  );
};

const ContainerHome = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #5e5e5e;
  padding: 0 40px;
  gap: 10px;
  transition-duration: 400ms;

  & h1 {
    margin-top: 60px;
    width: 100%;
    color: white;
    transition-duration: 400ms;
  }

  @media only screen and (max-width: 480px){
    padding: 0 10px;

    & h1{
      font-size: 1.3rem;
      margin: 30px 0;
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 768px){
    padding: 0 5px;

      & h1{
        font-size: 1.8rem;
        margin: 30px 0;
      }

  }


`;

const ListaPokemons = styled.ul`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  & li {
    width: 440px;
    height: 230px;
  }

  @media only screen and (max-width: 480px){

    & li{
      width: 100%;
    }
    
  }

  @media only screen and (min-width: 480px) and (max-width: 768px){
    gap: 5px;
    & li{
      width: 48%;
    }
  }

`;

export default PageHome;
