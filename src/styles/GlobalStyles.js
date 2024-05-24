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
        font-family: sans-serif, Serif;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyles;