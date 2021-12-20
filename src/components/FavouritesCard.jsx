import styled from "styled-components";
import Pokeball from "../images/PokeBall.svg";
import PokeballInactive from "../images/PokeBallBlack.svg";
import typeToColor from "../lib/typeToColor";

function FavouritesCard({
  onAddToFavourites,
  allFavouritePokemon,
  onChangeView,
  showBackPokemon,
}) {
  return (
    <>
      {allFavouritePokemon.map((favouritePokemon, index) => (
        <FavouritesArticle key={index}>
          <ImageOfFavourite
            src={
              showBackPokemon ? favouritePokemon.imgBack : favouritePokemon.img
            }
            alt='Nö'
            onClick={() => onChangeView()}
          />
          <span onClick={() => onAddToFavourites(favouritePokemon)}>
            {allFavouritePokemon.some(
              (favourite) => favouritePokemon.id === favourite.id
            ) ? (
              <img src={Pokeball} alt='★' width='35' height='35' />
            ) : (
              <img src={PokeballInactive} alt='☆' width='30' height='30' />
            )}
          </span>
          <DetailsOfFavourite
            style={{
              backgroundColor: typeToColor(favouritePokemon.type),
            }}>
            <h2>{favouritePokemon.name.toUpperCase()}</h2>
            <p>Type: {favouritePokemon.type}</p>
            <p>Stength: {favouritePokemon.strength}</p>
            <p>Height: {favouritePokemon.height}0 cm</p>
            <p>Weight: {favouritePokemon.weight} kg</p>
          </DetailsOfFavourite>
        </FavouritesArticle>
      ))}
    </>
  );
}

export default FavouritesCard;

const FavouritesArticle = styled.article`
  text-align: center;
  margin: 1rem;
`;

const ImageOfFavourite = styled.img`
  transform: scale(2);
  margin: 2rem;
  margin-top: 4rem;
  cursor: pointer;
`;

const DetailsOfFavourite = styled.div`
  padding: 1rem;
  border: 2px solid black;
  border-radius: 25px;
  box-shadow: 5px 5px 5px grey;
  @media (min-width: 768px) {
    margin-left: 10rem;
    margin-right: 10rem;
  }
`;
