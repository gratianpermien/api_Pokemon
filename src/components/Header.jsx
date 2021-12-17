import styled from "styled-components";

export default function Header({ pokemonArray, newArray, newFetch }) {
  function filterPokemonArray(pokemon) {
    pokemon === "all" && newFetch();
    const newSortedArray = pokemonArray.filter((char) => char.type === pokemon);
    newArray(newSortedArray);
  }

  return (
    <Headline>
      <h1>
        <IMG src="src/img/pokemon-logo.svg" alt="Pokemon" />
      </h1>
    </Headline>
  );
}

/*-----Styled Components from here-----*/

const Headline = styled.header`
  background-color: var(--bg-main);
  color: var(--color-second);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  text-align: center;
  
  h1 {
    margin: 0;
  padding: 0;
  }
`;

const IMG = styled.img`
  width: 220px;
`;
