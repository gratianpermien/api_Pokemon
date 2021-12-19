import { useState, useEffect } from "react";
import styled from "styled-components";
import Pokeball from "../images/PokeBall.svg";
import PokeballInactive from "../images/PokeBallBlack.svg";

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
          <CardContainer key={index}>
            <h2>{onePokemon.name}</h2>
            <span onClick={() => onAddToFavourites(onePokemon)}>
              {allFavouritePokemon.some(
                (favourite) => onePokemon.id === favourite.id
              ) ? (
                <img src={Pokeball} alt='★' width='30' height='30' />
              ) : (
                <img src={PokeballInactive} alt='☆' width='30' height='30' />
              )}
            </span>
            <button onClick={() => newSelectedPokemon(index)}>More info</button>
          </CardContainer>
        ))}
    </>
  );
}

{
  /* <img src={Pokeball} alt="" width="30" height="30" /> */
}
export default Card;

const CardContainer = styled.article``;
