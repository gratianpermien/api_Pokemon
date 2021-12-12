import styled from "styled-components";


export default function CardExtra({ pokemon }) {
  return (
    <article>
      <p>
        Picture from behind: <br />
        <img src={pokemon.imgBack} alt="Picture of Pokemon from back" />
      </p>
      <div>Base Experience: {pokemon.baseExperience}</div>
      <div>Pokemon height: {pokemon.height}</div>
      <div>Pokemon weight: {pokemon.weight}</div>
    </article>
  );
}

