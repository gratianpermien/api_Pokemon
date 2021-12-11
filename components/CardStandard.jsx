import CardExtra from "./CardExtra";
import { useState } from "react";
import styled from "styled-components";

export default function CreateCard({ pokemonArray }) {
  const initialExtraCardState = new Array(pokemonArray.length).fill(false);

  const [extraVisible, setExtraVisible] = useState(initialExtraCardState);

  function showExtraCard(pokemonIndex) {
    const extraVisibleArrayState = extraVisible.map((state, stateIndex) =>
      stateIndex === pokemonIndex ? !state : state
    );
    setExtraVisible(extraVisibleArrayState);
  }

  return (
    <CardSection>
      {pokemonArray.map((pokemon, pokemonIndex) => (
        <article key={pokemonIndex}>
          <h2>Name: {pokemon.name.toUpperCase()}</h2>
          <img src={pokemon.imgFront} alt="Picture of Pokemon" />
          <p>Type: {pokemon.type.toUpperCase()}</p>
          <button onClick={() => showExtraCard(pokemonIndex)}>
            {extraVisible[pokemonIndex]
              ? "Close additional info"
              : "Show additional info"}
          </button>
          {extraVisible[pokemonIndex] && <CardExtra pokemon={pokemon} />}
        </article>
      ))}
    </CardSection>
  );
}


/*-----Styled Components from here-----*/ 

const CardSection = styled.section`
display: flex;
flex-wrap: wrap;
margin-top: 120px;
gap: 50px;
`
