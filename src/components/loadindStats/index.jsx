import styled from "styled-components";
import Pokebola from './assets/Pokebola.png';


const LoadingStats = () => {
    return (
        <>
            <LoadingContainer>
                <div className="div_loading">
                    <div className="loading"></div>
                </div>
                <div className="image">
                    <img src={Pokebola} alt="" />
                </div>
                <h3>Carregando Dados...</h3>
            </LoadingContainer>
        </>
    )
}

const LoadingContainer = styled.div`
    width: 100%;
    height: 50vh;
    position: relative;
    display: flex;
    justify-content: center;

        & h3{
            font-size: 2rem;
            overflow: hidden;
            animation: textAnimation 3s infinite alternate;
            transition-duration: 400ms;
        }
    
        & .div_loading{
            width: 250px;
            height: 250px;
            background-color: #000000;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 20px solid;
            border-color:#766DF4 #000000;
            top: 10%;
            position: absolute;
            animation: spinerHour 2s infinite;
            transition-duration: 400ms;

                & .loading{
                    width: 80%;
                    height: 80%;
                    background-color: black;
                    border-radius: 50%;               
                    border: 20px solid;
                    border-color:#fa00cc #f2ff00;  
                    animation: spinerHourInverse 1s infinite;   
                }
        }

        & .image{
            position: absolute;
            animation: pull 1s infinite alternate-reverse;
            top: 18.5%;
            transition-duration: 400ms;
            
                & img{
                    width: 120px;
                }
        }       
       
       @keyframes spinerHour {
            from{
                transform: rotate(0deg);
            }to{    
                transform: rotate(360deg);
            }
       }
       @keyframes spinerHourInverse {
            from{
                transform: rotate(0deg);
            }to{    
                transform: rotate(-360deg);
            }
       }
       @keyframes pull {
        from{
            scale: .9;
        }to{
            scale: 1.1;
        }
       }
       @keyframes textAnimation {
        from{
            color: white;
        }to{
            color: green;
        }
       }

    @media only screen and (max-width: 480px){
        & h3{
            font-size: 1.5rem;
        }

        & .div_loading{
            width: 150px;
            height: 150px;
            top: 15%;
            border-width: 8px;
        }

        & .image{
            top: 25%;
            & img{
                width: 65px;
            }
        }
    }

    @media only screen and (min-width: 481px) and (max-width: 1024px){
        & .image{
            top: 35%;
        }

        & .div_loading{
            top: 20%;
        }
    }

    @media only screen and (min-width: 1024px){
        & .image{
            top: 24%;
        }
    }

    
`;


export default LoadingStats;