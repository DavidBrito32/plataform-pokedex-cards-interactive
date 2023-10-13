/* eslint-disable react/prop-types */
import styled from "styled-components";


const Modal = ({titulo, subTitulo, active, modal}) => {
    return (
        <>
            <ModalContainer className={active && "active"} onClick={modal && modal} >
                <div className="modal">
                    <h1>{titulo}</h1>
                    <p>{subTitulo}</p>
                </div>
            </ModalContainer>
        </>
    )
}

const ModalContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #00000085;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    transition-duration: 400ms;
    visibility: hidden;
    opacity: 0;

    &.active{
            visibility: visible;
            opacity: 1;
    }
    & .modal{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            width: 451px;
            height: 222px;
            border-radius: 8px;
            background-color: white;
                & h1{
                    /* margin: 0; */
                    color: black;
                    font-size: 48px;
                    font-weight: 700;
                    text-align: center;
                }

                & p{
                    font-size: 16px;
                    font-weight: 700;
                    color: black;
                    text-align: center;
                }
    }
    @media only screen and (max-width: 480px){
            & .modal{
                width: 90vw;
                height: 40vh;

                & h1{
                    font-size: 2rem;
                }

                & p{
                    font-size: 1rem;
                }
            }
    }
`;
export default Modal;