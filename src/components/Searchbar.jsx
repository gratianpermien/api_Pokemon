function Searchbar({ allFilteredPokemon, onSetPokemon }) {
  const filterPokemon = (event) => {
    const searchString = event.target.value;
    const searchedPokemon = allFilteredPokemon.filter((onePokemon) =>
      onePokemon.name.includes(searchString)
    );
    onSetPokemon(searchedPokemon);
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
