import styled, { css } from 'styled-components';

export const Section = styled.section`
  ${({ theme }) => css`
    width: ${theme.spacing.xLarge}%;
    height: calc(${theme.spacing.large} + 50px);
    background-color: ${theme.colors.primary};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    padding: ${theme.spacing.xSmall};
  `}
`;
