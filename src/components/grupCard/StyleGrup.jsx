import styled, {css} from "styled-components";

export const StyleGrup = styled.div`
    width: 100%;  
    max-width: 1000px;
    height: 500px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;

    & > div{
        width: 46%;
        margin-right: 2%;
        padding: 2%;
    }
`;