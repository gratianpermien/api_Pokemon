import { useState, useEffect } from "react";
import styled from "styled-components";

function PokeInfo({ pokemonFromCard, setSelectedFromCard }) {
  return (
    <>
      {pokemonFromCard &&
        pokemonFromCard.map((pokemons, index) => (
          <article>
            <h2>{pokemons.name}</h2>
            <button onClick={() => setSelectedFromCard(index)}>
              More info
            </button>
          </article>
        ))}
    </>
  );
}

{
  /* <img src={Pokeball} alt="" width="30" height="30" /> */
}
export default PokeInfo;
