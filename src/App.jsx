import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import AllChars from "./components/AllChars";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [favouritePokemons, setFavouritePokemons] = useState([]);

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
                id: pokemonInfo.id
              };
            });
        });

        Promise.all(pokemonPromises).then((allPokemonWithType) =>
          setPokemon(allPokemonWithType)
        );
      });
  }

  // function newSortedArrayforRender(sortedArray) {
  //   setPokemon(sortedArray);
  // }

  return (
    <>
      <Header
        pokemonArray={pokemon}
        // newArray={newSortedArrayforRender}
        newFetch={initialPokemon}
      />


      <Routes>
      <Route path="/" element={<Home pokemonArray={pokemon} />} />
      <Route path="characters" element={<AllChars pokemonArray={pokemon} />} />
      </Routes>

      <Navbar />
    </>
  );
}
