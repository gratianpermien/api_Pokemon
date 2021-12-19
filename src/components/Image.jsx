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
        <ImageContainer>
          <PokemonImage
            src={
              showBackPokemon
                ? allPokemon[selectedFromCard].imgBack
                : allPokemon[selectedFromCard].img
            }
            alt='Nö'
            onClick={() => onChangeView()}
          />
        </ImageContainer>
      )}
    </>
  );
}

export default Image;

const PokemonImage = styled.img``;

const ImageContainer = styled.div`
  position: sticky;
  top: 0;
  padding-left: 12rem;
  padding-top: 5rem;
`;
