import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body {
    height: 100%;
    margin: 0;
    color-scheme: ${localStorage.theme === "dark" ? "dark" : "light"};
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }


  body, textarea {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.white};
  }
  
  a {
    color: ${({ theme }) => theme.colors.sky500};
    cursor: pointer;
    text-decoration: unset;
    background-color: transparent;
  }


  ul {
    padding: 0;
    margin: 0;
  }
  
  ol {
    padding: 0;
    margin: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0;
  }
  
  table {
    border-spacing: 0;
  }
`;
