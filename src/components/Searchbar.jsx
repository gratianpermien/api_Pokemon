import styled from "styled-components";

function Searchbar({ allSearchedPokemon, onSetPokemon }) {
  const filterPokemon = (event) => {
    const searchString = event.target.value;
    const searchedPokemon = allSearchedPokemon.filter(
      (onePokemon) =>
        onePokemon.name.includes(searchString) ||
        onePokemon.type.includes(searchString)
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
  border-radius: 5px;
`;
