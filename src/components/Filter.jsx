import styled from "styled-components";

function Filter({ onSetPokemon, allSearchedPokemon }) {
  let filteredPokemon;

  const filterType = (event) => {
    if (event.target.value !== "sort") {
      filteredPokemon = allSearchedPokemon.filter(
        (onePokemon) => onePokemon.type === event.target.value
      );
      onSetPokemon(filteredPokemon);
    } else {
      onSetPokemon(allSearchedPokemon);
    }
  };

  return (
    <TypeFilter onChange={filterType} name='sortPokemon' id='sortPokemon'>
      <option value='sort'>Sort for Type</option>
      <option value='fire'>Fire</option>
      <option value='water'>Water</option>
      <option value='grass'>Grass</option>
      <option value='bug'>Bug</option>
      <option value='normal'>Normal</option>
    </TypeFilter>
  );
}

export default Filter;

const TypeFilter = styled.select`
  height: 2rem;
  margin: 0.3rem;
  border-radius: 5px;
`;
