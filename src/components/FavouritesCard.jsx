import { useState, useEffect } from "react";
import styled from "styled-components";
import Pokeball from "../images/PokeBall.svg";
import PokeballInactive from "../images/PokeBallBlack.svg";

function FavouritesCard({ onAddToFavourites, allFavouritePokemon }) {
  return (
    <>
      {allFavouritePokemon.map((favouritePokemon, index) => (
        <article key={index}>
          <span onClick={() => onAddToFavourites(favouritePokemon)}>
            {allFavouritePokemon.some(
              (favourite) => favouritePokemon.id === favourite.id
            ) ? (
              <img src={Pokeball} alt='★' width='30' height='30' />
            ) : (
              <img src={PokeballInactive} alt='☆' width='30' height='30' />
            )}
          </span>
          <img src={favouritePokemon.img} alt='' />
          <h2>{favouritePokemon.name}</h2>
          <p>Type: {favouritePokemon.type}</p>
          <p>Stength: {favouritePokemon.strength}</p>
          <p>Height: {favouritePokemon.height}0 cm</p>
          <p>Weight: {favouritePokemon.weight} kg</p>
        </article>
      ))}
    </>
  );
}

{
  /* <img src={Pokeball} alt="" width="30" height="30" /> */
}
export default FavouritesCard;