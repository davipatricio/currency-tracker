import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-size: 62.5%;
    text-rendering: optimizeLegibility;
    color-scheme: dark;
  }

  body {
    background-color: #030304;
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  main {
    display: flex;
    justify-content: center;

    padding: 50px;

    min-height: calc(100vh - 55px);

    @media (max-width: 768px) {
      padding: 20px;
    }
  }
`;
