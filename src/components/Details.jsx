import styled from "styled-components";
import typeToColor from "../lib/typeToColor";

function Details({ allPokemon, selectedFromCard }) {
  return (
    <>
      {allPokemon.length && (
        <PokeDetails
          style={{
            backgroundColor: typeToColor(allPokemon[selectedFromCard].type),
          }}>
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
  position: fixed;
  margin-left: 13rem;
  margin-top: 5rem;
  padding: 0.5rem;
  border-radius: 15px;
  border: 1px solid black;
  box-shadow: 5px 5px 5px grey;
`;
