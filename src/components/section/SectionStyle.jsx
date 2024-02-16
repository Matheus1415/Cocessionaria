import styled, { css } from "styled-components";

export const SectionStyle = styled.section`
    ${({ theme }) => css`
        padding: 20px;
        width: ${theme.spacing.xLarge}; 
        background-color: ${theme.colors.light};
        min-height: 500px;
        color: ${theme.colors.dark};
        & > h1 {
            font-size: ${theme.fontSizes.xLarge};
            padding: 10px 0 25px 0;
        }

        & > img{
            width: 100%;
            max-width: 50%;
        }
    `}
`;
