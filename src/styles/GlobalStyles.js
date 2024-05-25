import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Inter', sans-serif;
        letter-spacing: 1px;
    }

    button {
        cursor: pointer;
    }

    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }
`;

export default GlobalStyles;