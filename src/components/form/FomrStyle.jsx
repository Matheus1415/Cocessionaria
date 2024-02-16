import styled, {css} from "styled-components";

export const FomrStyle = styled.div`
    ${({theme}) => css`
        width:400px ;
        height: 500px;
        border-radius: 10px;
        box-shadow: 1px 10px 10px 5px rgba(0, 0, 0, 0.33);
        background-color: ${theme.colors.primary};

        & > form{
            width: 100%;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        
    `}
`;