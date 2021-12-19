import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import Pokeball from "../images/PokeBall.svg";
import PokeballInactive from "../images/PokeBallBlack.svg";
import { typeToColor } from "../lib/typeToColor.js";

//RANDOM POKEMON FOR YOUUU
function Home({
  allPokemon,
  onAddToFavourites,
  allFavouritePokemon,
  onChangeView,
  showBackPokemon,
}) {
  const newRandom =
    allPokemon.length && Math.floor(Math.random() * allPokemon.length);
  const [randomPokemonIndex, setRandomPokemonIndex] = useState(newRandom);

  return (
    <HomeSection>
      <h2>Pokemon of the Day:</h2>
      {allPokemon.length && (
        <>
          <PokeBallContainer
            onClick={() => onAddToFavourites(allPokemon[randomPokemonIndex])}>
            {allFavouritePokemon.some(
              (favourite) => allPokemon[randomPokemonIndex].id === favourite.id
            ) ? (
              <img src={Pokeball} alt='★' width='30' height='30' />
            ) : (
              <img src={PokeballInactive} alt='☆' width='30' height='30' />
            )}
          </PokeBallContainer>
          <PokeImageOfTheDay
            src={
              showBackPokemon
                ? allPokemon[randomPokemonIndex].imgBack
                : allPokemon[randomPokemonIndex].img
            }
            alt='Nö'
            onClick={() => onChangeView()}
          />
          <RandomPokemon
            style={{
              backgroundColor: typeToColor(allPokemon[randomPokemonIndex].type),
            }}>
            <h3>{allPokemon[randomPokemonIndex].name.toUpperCase()}</h3>
            <p>Type: {allPokemon[randomPokemonIndex].type}</p>
            <p>Stength: {allPokemon[randomPokemonIndex].strength}</p>
            <p>Height: {allPokemon[randomPokemonIndex].height}0 cm</p>
            <p>Weight: {allPokemon[randomPokemonIndex].weight} kg</p>
          </RandomPokemon>
        </>
      )}
    </HomeSection>
  );
}

export default Home;

const HomeSection = styled.section`
  background-image: url("Masterball.png");
  height: 100vh;
  margin: 1rem;
  text-align: center;
  position: relative;
  h2 {
    margin: 2rem;
  }
`;

const PokeBallContainer = styled.span`
  position: absolute;
  transform: scale(1.5);
  top: 0;
  right: 0;
  margin-top: 4rem;
  cursor: pointer;
`;

const PokeImageOfTheDay = styled.img`
  transform: scale(2);
  margin: 2rem;
  cursor: pointer;
`;

const RandomPokemon = styled.article`
  padding: 1rem;
  border: 2px solid black;
  border-radius: 25px;
`;
