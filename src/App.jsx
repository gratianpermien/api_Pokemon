import Header from "./components/Header";
import Pokedex from "./pages/Pokedex";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Route, Routes, NavLink, Link } from "react-router-dom";

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [favouritePokemon, setFavouritePokemon] = useState([]);

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
                imgBack: pokemonInfo.sprites.back_default,
                strength: pokemonInfo.base_experience,
                height: pokemonInfo.height,
                weight: pokemonInfo.weight,
              };
            });
        });

        Promise.all(pokemonPromises).then((allPokemonWithType) => {
          setPokemon(allPokemonWithType);
          setFilteredPokemon(allPokemonWithType);
        });
      });
  }

  const onSetPokemon = (newArray) => {
    setPokemon(newArray);
  };

  function addToFavourites(pokemonToAdd) {
    if (
      favouritePokemon.some(
        (oneFavouriteProduct) => oneFavouriteProduct.id === pokemonToAdd.id
      )
    ) {
      setFavouritePokemon(
        favouritePokemon.filter(
          (oneFavouriteProduct) => oneFavouriteProduct.id !== pokemonToAdd.id
        )
      );
    } else {
      setFavouritePokemon([...favouritePokemon, pokemonToAdd]);
    }
  }

  return (
    <PokeWorld>
      <Header />
      <nav>
        <ul>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='pokedex'>Pokedex</NavLink>
          <NavLink to='favourite-pokemon'>Favourites</NavLink>
        </ul>
      </nav>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              allPokemon={pokemon}
              onAddToFavourites={addToFavourites}
              allFavouritePokemon={favouritePokemon}
            />
          }
        />
        <Route
          path='pokedex'
          element={
            <Pokedex
              allPokemon={pokemon}
              onAddToFavourites={addToFavourites}
              allFavouritePokemon={favouritePokemon}
              onSetPokemon={onSetPokemon}
              allFilteredPokemon={filteredPokemon}
            />
          }
        />
        <Route
          path='favourite-pokemon'
          element={
            <Favourites
              onAddToFavourites={addToFavourites}
              allFavouritePokemon={favouritePokemon}
              allPokemon={pokemon}
              onSetPokemon={onSetPokemon}
              allFilteredPokemon={filteredPokemon}
            />
          }
        />
      </Routes>
    </PokeWorld>
  );
}

const PokeWorld = styled.div``;
