import styled, { css } from "styled-components";

export const LogoStyle = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt
}))`
  ${({ theme }) => css`
    width: ${theme.spacing.xLarge};
    max-width: 100px;
    margin: -15px 0;
  `}
`;
