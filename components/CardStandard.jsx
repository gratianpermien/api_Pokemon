import CardExtra from "./CardExtra";
import { useState } from "react";
import styled from "styled-components";

export default function CreateCard({ pokemonArray }) {
  const initialExtraCardState = new Array(pokemonArray.length).fill(false);

  const [extraVisible, setExtraVisible] = useState(initialExtraCardState);

  function showExtraCard(pokemonIndex) {
    const usedArray =
      extraVisible.length > 0 ? extraVisible : initialExtraCardState;
    const extraCardShowArray = usedArray.map((state, stateIndex) =>
      stateIndex === pokemonIndex ? !state : state
    );
    setExtraVisible(extraCardShowArray);
  }

  return (
    <CardSection>
      {pokemonArray.map((pokemon, pokemonIndex) => (
        <Card
          cardColor={"var(--card-color-" + pokemon.type + ")"}
          key={pokemonIndex}
        >
          <h2>Name: {pokemon.name.toUpperCase()}</h2>
          <img src={pokemon.imgFront} alt="Picture of Pokemon" />
          <div>Type: {pokemon.type.toUpperCase()}</div>
          <CardButton onClick={() => showExtraCard(pokemonIndex)}>
            {extraVisible[pokemonIndex]
              ? "Close additional info"
              : "Show additional info"}
          </CardButton>
          {extraVisible[pokemonIndex] && <CardExtra pokemon={pokemon} />}
        </Card>
      ))}
    </CardSection>
  );
}

/*-----Styled Components from here-----*/

const CardSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 120px;
`;

const Card = styled.article`
  background-color: ${(props) => props.cardColor};
  border: 3px solid var(--color-second);
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 20px;
  width: 15rem;
`;

const CardButton = styled.button`
  border: none;
  border-radius: 20px;
  padding: 0.5rem;
`;
