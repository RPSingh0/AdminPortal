import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root {
        // Element specific colors
        --color-brand-normal: #0b69ff;
        --color-brand-hover: #0a48ff;

        --color-text-normal: #252c51;
        --color-text-subtitle: #7e858e;
        --color-text-whitesmoke: whitesmoke;
        --color-text-error: darkred;

        --color-button-disabled: gray;
        --color-button-secondary: #2dca73;
        --color-button-secondary-hover: #208d6a;

        --color-tab-normal: #f3f4f7;
        --color-tab-hover: #c0c1c3;

        --color-border: #d7dfe9;

        // Global colors
        --color-whitesmoke: whitesmoke;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        transition: background-color 0.5s ease;
        scrollbar-width: none;
    }

    *::-webkit-scrollbar {
        display: none;
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
    
    ul:empty {
        display: none;
    }
`;

export default GlobalStyles;