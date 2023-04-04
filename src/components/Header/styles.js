import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 105px; //altura do cabeçalho
    width: 100%; //largura do cabeçalho

    border-bottom-width: 1px; //a linha embaixo do cabeçalho
    border-bottom-style: solid; // definimos a linha como sólida
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700}; // definindo cor da linha

    display: flex; // dentro do cabeçalho aplicamos display flex
    justify-content: space-between; // o conteúdo será colocado em extremidades diferentes

    padding: 0 80px; // 80px dos lados
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;

        span {
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }

        strong {
            font-size: 18px;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        color: ${({theme}) => theme.COLORS.GRAY_100};;
        font-size: 24px;
    }
`;