import styled from "styled-components";

export const Container = styled.span`
    font-size: 12px;
    padding: 5px 14px; //espaçamento interno de 5px em cima e embaixo, 14px dos lados
    border-radius: 5px;
    margin-right: 6px; // espaçameno externo
    color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    background-color : ${({theme}) => theme.COLORS.ORANGE}; 
`;