import styled from "styled-components";

function PokeDetails({ pokemonFromCard, selectedFromCard }) {
  return (
    <>
      {pokemonFromCard.length && (
        <DetailedCard>
          <p>Type: {pokemonFromCard[selectedFromCard].type}</p>
          <p>Stength: {pokemonFromCard[selectedFromCard].strength}</p>
          <p>Height: {pokemonFromCard[selectedFromCard].height}0 cm</p>
          <p>Weight: {pokemonFromCard[selectedFromCard].weight} kg</p>
        </DetailedCard>
      )}
    </>
  );
}

export default PokeDetails;

const DetailedCard = styled.article`
  position: fixed;
  z-index: 99;
  margin-left: 200px;
  padding: 15px;
  background-color: green;
  border-radius: 50px;
`;
