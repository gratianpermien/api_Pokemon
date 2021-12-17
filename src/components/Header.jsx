import SelectSort from "./SelectMenu";
import Searchbar from "./Searchbar";

function Header({ pokemonFromApp, setPokemonFromApp, originalPokemonFromApp }) {
  return (
    <header>
      <h1>Gotta catch 'em all</h1>
      <label htmlFor='sortPokemon'>Sort: </label>
      <SelectSort
        pokemonFromHeader={pokemonFromApp}
        setPokemonFromHeader={setPokemonFromApp}
        originalPokemonFromHeader={originalPokemonFromApp}
      />
      <Searchbar
        originalPokemon={originalPokemonFromApp}
        setPokemonFromHeader={setPokemonFromApp}
      />
    </header>
  );
}

export default Header;
