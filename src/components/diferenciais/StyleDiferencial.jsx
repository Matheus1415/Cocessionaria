import styled, {css} from "styled-components";

export const StyleSingle = styled.div`
    color: black;
    width: 100%; 
    height: 130px;
    padding: 20px;
    margin: 20px;
    & > h1{
        text-align: center;
        padding: 5px;
    }
    & > p{
        text-align: justify;
    }
`;