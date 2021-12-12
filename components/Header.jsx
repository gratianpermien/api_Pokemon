import styled from "styled-components";

export default function Header({ pokemonArray, newArray, newFetch }) {

 
function filterPokemonArray(pokemon) {
 pokemon==="all" && newFetch();
 const newSortedArray = pokemonArray.filter((char) => char.type === pokemon)
 newArray(newSortedArray)
}


return (
    <header>
      <h1>Pokemon</h1>
      <Sorter For="sort">
        Show by Type:
        <Selection name="sort" id="sort" onChange={()=> filterPokemonArray(sort.value)}  >
          <option value="all">All</option>
          <option value="bug">Bug</option>
          <option value="fire">Fire</option>
          <option value="grass">Grass</option>
          <option value="normal">Normal</option>
          <option value="water">Water</option>
        </Selection>
        </Sorter>  
      </header>
)}

/*-----Styled Components from here-----*/

const Sorter = styled.label`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
`;

const Selection = styled.select`
 background-color: var(--bg-main);
 border: 1px solid var(--color-second);
 color: var(--color-second);
 margin-left: 1rem;
 `;
