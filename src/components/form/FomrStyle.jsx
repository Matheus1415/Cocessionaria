import styled, {css} from "styled-components";

export const FomrStyle = styled.div`
    ${({theme}) => css`
        width:400px ;
        height: 500px;
        border-radius: 10px;
        box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.43);
        background-color: ${theme.colors.primary};
        
    `}
`;