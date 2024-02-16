import styled, {css} from "styled-components";

export const CarroselStyle = styled.div`
    width:50% ;
    & > .carousel {
        position: relative;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        overflow: hidden;
    }

    & > .carousel button {
        position: absolute;
        border-radius: 50%;
        width: 35px;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(6, 95, 150, 0.5);
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
    }

    & >  .carousel button:first-of-type {
        left: 0;
    }

    & >  .carousel button:last-of-type {
        right: 0;
    }

    & >  .carousel img {
        margin: 0 42px;
        display: block;
        width: 100%;
        max-width: 500px;
        height: auto;
    }

`;