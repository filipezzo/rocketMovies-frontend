import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body{
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color:${({ theme }) => theme.COLORS.WHITE};
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
}

body, input, button, textarea{
  font-family: 'Roboto Slab', serif;
  outline: none;
  font-size: 1.6rem;
}

a{
  text-decoration: none;
}

a, button{
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover, a:hover{
  filter: brightness(0.9);
}

`;