import styled, {css} from "styled-components";

export const SocialBarStyle = styled.div`
    ${({theme}) => css`
        width: ${theme.spacing.xLarge};
        background-color: ${theme.colors.secondary};
        height: 30px;
        padding: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: white;
    `}
`;