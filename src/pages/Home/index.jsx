/* eslint-disable no-unused-vars */
import axios from "axios";
import { styled }  from 'styled-components';
import CardPokemon from '../../components/CardPokemon';
import { useContext, useEffect, useState } from 'react';
import { HooksContext } from "../../context";

const ContainerHome = styled.div`
    width: 100%;
    background-color: #5E5E5E;
    padding: 60px 40px 0;
    display: flex;
    flex-direction: column;
        & h1{
            color: white;
            font-size: 2.8rem;
        }

        & ul{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            gap: 20px;
            box-sizing: border-box;


                & li{
                    width: 27.5rem;
                    height: 16.5rem;
                }
        }

        @media only screen and (max-width: 480px){
            padding: 0 10px;
            & ul{
                gap: 50px;
            }

                & h1{
                    font-size: 1.5rem;
                    margin: 30px 0;
                }

                & ul{
                    width: 100%;

                        & li{
                            width: 100%;
                            height: 12rem;
                            
                        }
                }
        }

        @media only screen and (min-width: 480px) and (max-width: 768px){
            padding: 0 10px;
            gap: 50px;
            & h1{
                margin-top: 30px;
                font-size: 2rem;
            }

            & ul{
                & li{
                    width: 21rem;
                    height: 14rem;
                }
            }
        }
`;

const Home = () => {
    const { pokemons, pokebola, setIdPokemon, idPokemon } = useContext(HooksContext);

     return (
        <>
            <ContainerHome>                
                <h1>Todos os Pokémons</h1>
                    <ul>
                         {pokemons.map((item, i) => {
                            return (
                                    <li key={i}>
                                        <CardPokemon infos={item} />              
                                    </li>
                            )
                         })}                 
                    </ul>
            </ContainerHome>
        </>
    )
}

export default Home;