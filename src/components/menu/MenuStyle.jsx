import styled, { css } from 'styled-components';

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.spacing.large};
    background-color: ${theme.colors.primary};
  `}
`;
