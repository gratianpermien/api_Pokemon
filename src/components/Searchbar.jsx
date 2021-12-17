function Searchbar({ originalPokemon, setPokemonFromHeader }) {
  const filterPokemon = (event) => {
    const searchString = event.target.value;
    const searchedPokemon = originalPokemon.filter((onePokemon) =>
      onePokemon.name.includes(searchString)
    );
    setPokemonFromHeader(searchedPokemon);
  };
  return (
    <>
      <input
        onInput={filterPokemon}
        type='text'
        placeholder='Search for Pokemon...'
      />
    </>
  );
}

export default Searchbar;
