import styled,{css} from "styled-components";

export const Link = styled.div`
${({theme}) => css`

    font-size: ${theme.fontSizes.large};
    text-decoration: none;
    padding: ${theme.spacing.xSmall};
    display: inline-block;
`}
`;