/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from "styled-components";


const ModalStyles = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #00000085;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

        & h1{
            font-size: ;
        }

`;

const Modal = ({children}) => {
    return (
        <>
            <div className="mensagem">
            {children}

            </div>
        </>
    )
}

export default Modal;