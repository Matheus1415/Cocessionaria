import styled,{css} from "styled-components";

export const InputStyle = styled.div`
    ${({theme}) => css`
        & > input, #text, #email, #tel, #senha{
            width: 300px !important;
            margin: 10px 0;
            max-width: 400px;
            height: 35px;
            padding: 15px;
            border: 0;
            border-radius: 10px;
        }

        & > input:focus, #text, #email, #tel, #senha{
            outline: none;
            box-shadow: 1px 3px 10px  rgba(0,0,0,1.7);
        }
    `}
`;