import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`

*,
*::before
*::after {
box-sizing: border-box;
}

body {
  margin: 5px 20px;
  }

h1 {
  font-size: 3rem;
  margin: 0;
}


header {
  align-content: center;
  align-items: center;
  display:flex;
  flex-direction: column;
  justify-content: center;
  left: 20px;
  position: fixed;
  right: 20px;
  top: 0;
}



`;
