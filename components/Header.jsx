import styled from "styled-components";

export default function Header() {
  return (
    <header>
      <h1>Pokemon</h1>
      <label /*for="sort-characters"*/>
        Sort alphabetically:
        <select name="sort-characters" id="sort-characters">
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
      </label>
    </header>
  );
}
