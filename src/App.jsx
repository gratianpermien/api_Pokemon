import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'



export default function App() {
  const [pokemon, setPokemon] = useState([])
  

  useEffect(() => {
    initialPokemon();
  }, []);

  function initialPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((data) => {

        const pokemonPromises = data.results.map((pokemon) => {
          return fetch(pokemon.url)
            .then((response) => response.json())
            .then((pokemonInfo) => {
              return {
                name: pokemon.name,
                type: pokemonInfo.types[0].type.name,
                img: pokemonInfo.sprites.front_default,
                experience: pokemonInfo.base_experience,
                height: pokemonInfo.height,
                weight: pokemonInfo.weight
              };
            });
        });

        Promise.all(pokemonPromises)
          .then((allPokemonWithType) => setPokemon(allPokemonWithType));
        });     
  }


  return (
    <div>
     <Header />
    <Card pokemonArray={pokemon} />
    </div>
  );
}

