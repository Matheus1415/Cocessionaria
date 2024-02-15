import styled, { css } from 'styled-components';

export const Section = styled.section`
  ${({ theme }) => css`
    width: ${theme.spacing.xLarge}%;
    height: ${theme.spacing.large};
    background-color: ${theme.colors.primary};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing.xSmall};
  `}
`;
