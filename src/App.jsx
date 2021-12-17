import Header from "./components/Header";
import PokeCard from "./components/PokeCard";
import { useState, useEffect } from "react";
import styled from "styled-components";

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [originalPokemon, setOriginalPokemon] = useState();

  useEffect(() => {
    initialPokemon();
  }, []);

  function initialPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        const pokemonPromises = data.results.map((pokemon) => {
          return fetch(pokemon.url)
            .then((response) => response.json())
            .then((pokemonInfo) => {
              return {
                name: pokemon.name,
                id: pokemonInfo.id,
                type: pokemonInfo.types[0].type.name,
                img: pokemonInfo.sprites.front_default,
                strength: pokemonInfo.base_experience,
                height: pokemonInfo.height,
                weight: pokemonInfo.weight,
              };
            });
        });

        Promise.all(pokemonPromises).then((allPokemonWithType) => {
          setPokemon(allPokemonWithType);
          setOriginalPokemon(allPokemonWithType);
        });
      });
  }

  return (
    <PokeWorld>
      <Header
        pokemonFromApp={pokemon}
        setPokemonFromApp={setPokemon}
        originalPokemonFromApp={originalPokemon}
        setOriginalPokemonFromApp={setOriginalPokemon}
      />
      <PokeCard pokemonFromApp={pokemon} />
    </PokeWorld>
  );
}

const PokeWorld = styled.div``;
