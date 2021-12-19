import { useState, useEffect } from "react";
import styled from "styled-components";

function SelectSort({ allPokemon, onSetPokemon }) {
  const [sortDirection, setSortDirection] = useState("ascending");
  const [sortAttribute, setSortAttribute] = useState("id");

  useEffect(() => sortPokemon(), [sortAttribute, sortDirection]);

  const sortPokemon = () => {
    const copy = [...allPokemon];
    const sorted = copy.sort((a, b) => {
      if (sortDirection === "ascending") {
        return a[sortAttribute] > b[sortAttribute] ? 1 : -1;
      } else if (sortDirection === "descending") {
        return a[sortAttribute] > b[sortAttribute] ? -1 : 1;
      }
    });
    onSetPokemon(sorted);
  };

  const changeSortAttribute = (event) => {
    setSortAttribute(event.target.value);
  };

  const changeSortDirection = (event) => {
    setSortDirection(event.target.value);
  };

  return (
    <SortContainer>
      <select
        onChange={changeSortDirection}
        name='sortPokemon'
        id='sortPokemon'>
        <option value='ascending'>Ascending</option>
        <option value='descending'>Descending</option>
      </select>
      <select
        onChange={changeSortAttribute}
        name='sortPokemon'
        id='sortPokemon'>
        <option value='id'>ID</option>
        <option value='type'>Type</option>
        <option value='strength'>Strength</option>
        <option value='height'>Height</option>
        <option value='weight'>Weight</option>
      </select>
    </SortContainer>
  );
}

export default SelectSort;

const SortContainer = styled.div`
  margin: 0.2rem;
  select {
    margin: 0.1rem;
  }
`;
