import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import Pokeball from "../images/PokeBall.svg";
import PokeballInactive from "../images/PokeBallBlack.svg";

//RANDOM POKEMON FOR YOUUU
function Home({ allPokemon, onAddToFavourites, allFavouritePokemon }) {
  const [randomPokemonIndex, setRandomPokemonIndex] = useState(
    allPokemon.length && Math.floor(Math.random() * allPokemon.length)
  );

  return (
    <section>
      <span onClick={() => onAddToFavourites(allPokemon[randomPokemonIndex])}>
        {allFavouritePokemon.some(
          (favourite) => allPokemon[randomPokemonIndex].id === favourite.id
        ) ? (
          <img src={Pokeball} alt='★' width='30' height='30' />
        ) : (
          <img src={PokeballInactive} alt='☆' width='30' height='30' />
        )}
      </span>
      {allPokemon.length && (
        <img src={allPokemon[randomPokemonIndex].img} alt='Nö' />
      )}
      {allPokemon.length && (
        <article>
          <h2>{allPokemon[randomPokemonIndex].name}</h2>
        </article>
      )}
      {allPokemon.length && (
        <article>
          <p>Type: {allPokemon[randomPokemonIndex].type}</p>
          <p>Stength: {allPokemon[randomPokemonIndex].strength}</p>
          <p>Height: {allPokemon[randomPokemonIndex].height}0 cm</p>
          <p>Weight: {allPokemon[randomPokemonIndex].weight} kg</p>
        </article>
      )}
    </section>
  );
}

export default Home;
