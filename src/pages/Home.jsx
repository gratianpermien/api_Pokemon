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
      <p>
        There are currently 901 known species that inhabit the Pokémon world;
        however, it is implied that there are more waiting to be discovered.
        Inherent to them are several fantastic powers not demonstrated by most
        real animals, such as the manipulation of elements/aspects of life, such
        as electricity or fire. Pokémon are shown to exist instead of animals in
        their world, although animals are also seldom seen in older media.
      </p>
      <World
        src='https://www.pokewiki.de/images/thumb/b/b3/Alola_Artwork_2.jpg/1600px-Alola_Artwork_2.jpg'
        alt='World of Pokemon!'
      />
      <p>
        While most Pokémon resemble animals and may behave like them, there are
        many that do not resemble animals at all, taking on other forms such as
        plants, inanimate objects, machines, human-like forms, or other more
        enigmatic and exotic appearances. Pokémon inhabit an extremely diverse
        range of habitats, ranging from the driest deserts to the lushest
        jungles, the deepest oceans to the highest mountains and everything else
        in-between, even outer space and other dimensions.
      </p>
      <h2>Pokemon of the Day:</h2>
      {allPokemon.length && (
        <>
          <PokeImageOfTheDay
            src={
              showBackPokemon
                ? allPokemon[randomPokemonIndex].imgBack
                : allPokemon[randomPokemonIndex].img
            }
            alt='Nö'
            onClick={() => onChangeView()}
          />
          <PokeBallContainer
            onClick={() => onAddToFavourites(allPokemon[randomPokemonIndex])}>
            {allFavouritePokemon.some(
              (favourite) => allPokemon[randomPokemonIndex].id === favourite.id
            ) ? (
              <img src={Pokeball} alt='★' width='35' height='35' />
            ) : (
              <img src={PokeballInactive} alt='☆' width='30' height='30' />
            )}
          </PokeBallContainer>
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
  margin: 1rem;
  text-align: center;
  margin-bottom: 8rem;
  h2 {
    margin: 2rem;
  }
  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const PokeBallContainer = styled.span`
  transform: scale(1.5);
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
  box-shadow: 5px 5px 5px grey;
`;

const World = styled.img`
  height: 90%;
  width: 90%;
  border-radius: 15px;
`;
