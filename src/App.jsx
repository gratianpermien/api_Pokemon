import { useState, useEffect } from "react";
import Header from "../components/Header";
import CardStandard from "../components/CardStandard";

export default function App() {
  const [pokemon, setPokemon] = useState([]);

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
                type: pokemonInfo.types[0].type.name,
                imgFront: pokemonInfo.sprites.front_default,
                imgBack: pokemonInfo.sprites.back_default,
                baseExperience: pokemonInfo.base_experience,
                height: pokemonInfo.height,
                weight: pokemonInfo.weight,
              };
            });
        });

        Promise.all(pokemonPromises).then((allPokemonWithType) =>
          setPokemon(allPokemonWithType)
        );
      });
  }

  function newSortedArrayforRender(sortedArray) {
    setPokemon(sortedArray);
  }

  return (
    <div>
      <Header
        pokemonArray={pokemon}
        newArray={newSortedArrayforRender}
        newFetch={initialPokemon}
      />
      <CardStandard pokemonArray={pokemon} />
    </div>
  );
}
