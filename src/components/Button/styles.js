import styled from "styled-components";

export const Container = styled.button`
    width: 100%; //OCUPA 100% DO ESPAÇO
    background-color: ${({theme}) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    height: 56px; //ALTURA
    border: 0; //A BORDA 
    padding: 0 16px; //0 px de cima e embaixo, porém 16px das laterais.
    margin-top: 16px; //SEMPRE TER UM ESPAÇO DE 16px ACIMA DELE.
    border-radius: 10px; //CANTOS ARREDONDADOS;
    font-weight: 500;

    &:disabled{
        opacity: 0.5;
    }
`;