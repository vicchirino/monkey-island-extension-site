import { createGlobalStyle } from "styled-components"
import variables from "./variables"

const GlobalStyle = createGlobalStyle`
  /* @import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"); */
  
  ${variables};

  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    background-color: var(--dark-blue);
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: "100vh";
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    font-family: "Fira Code", sans-serif;
  }
`

export default GlobalStyle
