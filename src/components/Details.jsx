import styled from "styled-components";

function Details({ allPokemon, selectedFromCard }) {
  return (
    <>
      {allPokemon.length && (
        <PokeDetails>
          <p>Type: {allPokemon[selectedFromCard].type}</p>
          <p>Stength: {allPokemon[selectedFromCard].strength}</p>
          <p>Height: {allPokemon[selectedFromCard].height}0 cm</p>
          <p>Weight: {allPokemon[selectedFromCard].weight} kg</p>
        </PokeDetails>
      )}
    </>
  );
}

export default Details;

const PokeDetails = styled.article`
  position: sticky;
  top: 0;
  margin-left: 12rem;
  margin-top: 5rem;
`;
