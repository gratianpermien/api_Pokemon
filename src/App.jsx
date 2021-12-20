import Header from "./components/Header";
import Pokedex from "./pages/Pokedex";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Route, Routes, NavLink, Link } from "react-router-dom";
import { saveToLocal, loadFromLocal } from "./lib/localStorage";

export default function App() {
  const initialFavouritePokemon = loadFromLocal("_favouritePokemon");
  const [pokemon, setPokemon] = useState([]);
  const [allSearchedPokemon, setSearchedPokemon] = useState([]);
  const [favouritePokemon, setFavouritePokemon] = useState(
    initialFavouritePokemon ?? []
  );

  useEffect(() => {
    saveToLocal("_pokemon", pokemon);
  }, [pokemon]);
  useEffect(() => {
    saveToLocal("_favouritePokemon", favouritePokemon);
  }, [favouritePokemon]);

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
          setSearchedPokemon(allPokemonWithType);
        });
      })
      .catch(() => {
        initialPokemon = loadFromLocal("_pokemon");
        setPokemon(initialPokemon);
        setSearchedPokemon(initialPokemon);
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

  const [showBack, setShowBack] = useState(false);

  const changeView = () => {
    setShowBack(!showBack);
  };

  return (
    <>
      <Link to='/'>
        {" "}
        <Header />{" "}
      </Link>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              allPokemon={pokemon}
              onAddToFavourites={addToFavourites}
              allFavouritePokemon={favouritePokemon}
              onChangeView={changeView}
              showBackPokemon={showBack}
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
              allSearchedPokemon={allSearchedPokemon}
              onChangeView={changeView}
              showBackPokemon={showBack}
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
              allSearchedPokemon={allSearchedPokemon}
              onChangeView={changeView}
              showBackPokemon={showBack}
            />
          }
        />
      </Routes>
      <Footer>
        <nav>
          <Linklist>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='pokedex'>Pokedex</NavLink>
            <NavLink to='favourite-pokemon'>Favourites</NavLink>
          </Linklist>
        </nav>
      </Footer>
    </>
  );
}

const Footer = styled.footer`
  background-color: #cc0000;
  position: fixed;
  bottom: 0;
  padding: 1rem;
  width: 100%;

  nav {
    width: 100%;
  }
`;

const Linklist = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  justify-content: space-around;

  a {
    background: #b3a125;
    border: 3px solid #3b4cca;
    color: #3b4cca;
    border-radius: 5px;
    text-decoration: none;
    margin-left: 5px;
    margin-right: 5px;
    padding: 5px;
  }

  a.active {
    background: #ffde00;
    color: #3b4cca;
  }

  a:hover {
    background: #ffde00;
  }
`;
