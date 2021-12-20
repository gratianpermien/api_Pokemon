import styled from "styled-components";

function Image({
  allPokemon,
  selectedFromCard,
  onChangeView,
  showBackPokemon,
}) {
  return (
    <>
      {allPokemon.length && (
        <PokemonImage
          src={
            showBackPokemon
              ? allPokemon[selectedFromCard].imgBack
              : allPokemon[selectedFromCard].img
          }
          alt='Nö'
          onClick={() => onChangeView()}
        />
      )}
    </>
  );
}

export default Image;

const PokemonImage = styled.img`
  position: fixed;
  top: 0;
  margin-left: 13rem;
  margin-top: 30rem;
  transform: scale(1.5);
  cursor: pointer;
`;
