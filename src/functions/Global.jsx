import { createGlobalStyle } from 'styled-components';
import colors from './Colors';

export default createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 1rem;
        font-weight: normal;
        outline: none;
        border: none;
        font-family: 'Barlow Semi Condensed', sans-serif;
    }

    body {
        height: 100vh;
        background: ${colors.background.bck};

        #root {
            height: 100%;
        }
    }
`;
