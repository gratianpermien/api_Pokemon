import styled from "styled-components";

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
      <Input
        onInput={filterPokemon}
        type='text'
        placeholder='Search for Pokemon...'
      />
    </>
  );
}

export default Searchbar;

const Input = styled.input`
  height: 2rem;
  margin: 0.3rem;
`;
