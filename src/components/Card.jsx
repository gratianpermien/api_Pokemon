import styled from "styled-components";
import Pokeball from "../images/PokeBall.svg";
import PokeballInactive from "../images/PokeBallBlack.svg";
import typeToColor from "../lib/typeToColor";

function Card({
  allPokemon,
  newSelectedPokemon,
  onAddToFavourites,
  allFavouritePokemon,
}) {
  return (
    <>
      {allPokemon.length &&
        allPokemon.map((onePokemon, index) => (
          <CardContainer
            key={index}
            style={{
              backgroundColor: typeToColor(onePokemon.type),
            }}>
            <h2>{onePokemon.name.toUpperCase()}</h2>
            <button onClick={() => newSelectedPokemon(index)}>More info</button>
            <span onClick={() => onAddToFavourites(onePokemon)}>
              {allFavouritePokemon.some(
                (favourite) => onePokemon.id === favourite.id
              ) ? (
                <img src={Pokeball} alt='★' width='35' height='35' />
              ) : (
                <img src={PokeballInactive} alt='☆' width='30' height='30' />
              )}
            </span>
          </CardContainer>
        ))}
    </>
  );
}

{
  /* <img src={Pokeball} alt="" width="30" height="30" /> */
}
export default Card;

const CardContainer = styled.article`
  margin: 1rem;
  border: 1px solid black;
  border-radius: 15px;
  width: 10rem;
  box-shadow: 5px 5px 5px grey;

  h2 {
    text-align: center;
    font-size: 1rem;
  }

  button {
    margin-right: 1rem;
    margin-left: 1rem;
    cursor: pointer;
    background: none;
    border: none;
  }

  span {
    cursor: pointer;
  }
`;
