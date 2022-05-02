import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 1rem;
        font-weight: normal;
        outline: none;
        border: none;
    }

    body {
        font-family: 'Barlow Semi Condensed', sans-serif;
    }
`;
