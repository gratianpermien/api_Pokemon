import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`

*,
*::before
*::after {
box-sizing: border-box;
}

:root {
  --bg-main: dimgrey;
  --bg-second: silver;

  --color-main: black;
  --color-second: gold;

  --card-color-fire: orange;
  --card-color-grass: green;
  --card-color-water: lightblue;
  --card-color-normal: grey;
  --card-color-bug: darkolivegreen;

}


body {
  color: var(--color-main);
  background-color: var(--bg-second);
  font-family: Verdana, Helvetica;
  margin: 5px 20px;
   }

h1 {
 font-size: 3rem;
  margin: 0;
}


header {
  align-content: center;
  align-items: center;
  background-color: var(--bg-main);
  color: var(--color-second);
  display:flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
}

`;
