import styled from "styled-components";

function Image({ allPokemon, selectedFromCard }) {
  return (
    <div>
      {allPokemon.length && (
        <PokeImage src={allPokemon[selectedFromCard].img} alt='Nö' />
      )}
    </div>
  );
}

export default Image;

const PokeImage = styled.img`
  position: fixed;
  z-index: 99;
  margin-left: 200px;
  margin-top: 300px;
  transform: scale(2.5);
`;
