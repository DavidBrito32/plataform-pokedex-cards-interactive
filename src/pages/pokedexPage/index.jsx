import { useContext } from "react";
import styled from "styled-components";
import { HooksContext } from "../../context/HooksProvider";
import CardPokemon from "../../components/CardPokemon";
import Modal from "../../components/Modal";

const PokedexPage = () => {
  const { pokedex,  message, removePokemon, modal, modificaModal } = useContext(HooksContext);
    return(
        <>
            {message === "remover" && <Modal titulo={removePokemon.titulo} subTitulo={removePokemon.subTitle}   modal={modificaModal} active={modal} />}
            <ContainerPokedex>
              <h1>Seus Pokemons</h1>
                <ListaPokedex>
                   {pokedex && pokedex.map((item) => <li key={item.name}><CardPokemon pokemon={item} btn={true} /></li>)} 
                </ListaPokedex>
            </ContainerPokedex>
        </>
    );
};
const ContainerPokedex = styled.div`
  width: 100%;
  min-height: 100vh;
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
const ListaPokedex = styled.ul`
  width: 100%;
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
export default PokedexPage;