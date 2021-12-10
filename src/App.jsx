import { useState, useEffect } from 'react'



export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [sort, setSort] = useState(1);

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
                type: pokemonInfo.types[0].type.name
              };
            });
        });

        Promise.all(pokemonPromises)
          .then((allPokemonWithType) => setPokemon(allPokemonWithType));
        });
  }
  
  // function sortName(a, b) {
  //   return result = a.name > b.name ? 1 : -1
  //  }

  return (
    <div>
    <header>
      <h1>Pokemon</h1>
      <label for="sortCharacters">Sort alphabetically:</label>
      <select name="sortCharacters" id="sortCharacters">
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </select>
    </header>
    <section>
      {pokemon &&
        pokemon.map((pokemon, index) => (
          <article>
          <h2>{pokemon.name}</h2>
          <p>{pokemon.type}</p>
          <button>
            <div>More info</div>
            {/* <img src={Pokeball} alt="" width="30" height="30" /> */}
          </button>
          </article>
          //<Card key={index} name={pokemon.name} type={pokemon.type} />
        ))}
    </section>
    </div>
  );
}
// Übergabe der Kartenfarbe mit SC statt getColor Function in helpers.jsx