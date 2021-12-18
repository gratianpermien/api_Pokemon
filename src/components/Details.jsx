import styled from "styled-components";

function Details({ allPokemon, selectedFromCard }) {
  return (
    <>
      {allPokemon.length && (
        <DetailedCard>
          <p>Type: {allPokemon[selectedFromCard].type}</p>
          <p>Stength: {allPokemon[selectedFromCard].strength}</p>
          <p>Height: {allPokemon[selectedFromCard].height}0 cm</p>
          <p>Weight: {allPokemon[selectedFromCard].weight} kg</p>
        </DetailedCard>
      )}
    </>
  );
}

export default Details;

const DetailedCard = styled.article`
  position: fixed;
  z-index: 99;
  margin-left: 200px;
  padding: 15px;
  background-color: green;
  border-radius: 50px;
`;
