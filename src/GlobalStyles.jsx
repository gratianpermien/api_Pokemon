import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`

*,
*::before
*::after {
box-sizing: border-box;
}

:root {
  --bg-main: darkred;
  --bg-second: silver;

  --color-main: black;
  --color-second: gold;

  --card-color-fire: orange;
  --card-color-grass: green;
  --card-color-water: lightblue;
  --card-color-normal: grey;
  --card-color-bug: darkolivegreen;

}


a {
   color: var(--bg-main);
  }

body {
  color: var(--color-main);
  background-color: var(--bg-second);
  font-family: Verdana, Helvetica;
  margin: 5px 20px;
   }



`;
