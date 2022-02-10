import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
  }

  body {
    background-image: linear-gradient(to bottom right, #023E8A, #0077B6);
    background-repeat: no-repeat;
    min-height: 100%;
    color: snow;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 3rem 0 0 0;

    @media (max-width: 414px) {
      font-size: 80%;
    }

    
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  img {
    width: 100%;
  }
`;

export default GlobalStyles;
