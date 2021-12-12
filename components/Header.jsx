import styled from "styled-components";

export default function Header() {



  
  return (
    <header>
      <h1>Pokemon</h1>
      <Sorter For="sort-characters">
        Show by Type:
        <Selection name="sort-characters" id="sort-characters">
          <option value="All">All</option>
          <option value="Bug">Bug</option>
          <option value="Fire">Fire</option>
          <option value="Grass">Grass</option>
          <option value="Normal">Normal</option>
          <option value="Water">Water</option>
        </Selection>
      </Sorter>
    </header>
  );
}

/*-----Styled Components from here-----*/

const Sorter = styled.label`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
`;

const Selection = styled.select`
  margin-left: 1rem;
`;
