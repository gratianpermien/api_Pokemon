import styled from "styled-components";

function PokeImg({ pokemonFromCard, selectedFromCard }) {
  return (
    <div>
      {pokemonFromCard.length && (
        <PokeImage src={pokemonFromCard[selectedFromCard].img} alt='Nö' />
      )}
    </div>
  );
}

export default PokeImg;

const PokeImage = styled.img`
  position: fixed;
  z-index: 99;
  margin-left: 200px;
  margin-top: 300px;
  transform: scale(2.5);
`;
