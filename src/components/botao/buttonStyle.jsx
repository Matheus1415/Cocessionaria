import styled, {css} from "styled-components";

export const ButtonStyle = styled.div`
        width: 300px;
        margin-top: 20px;
    & > button{
        width: 120px;
        text-align: center;
        padding: 8px 10px;
        border: 0;
        background-color: #012d2e;
        color: white;
        border-radius: 10px;
        transition: background 0.8s;
    }

    & > button:hover{
        background-color: #024d4e;
        padding: 8px 12px;
    }
`;