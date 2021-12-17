import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Nav>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="characters">All Characters</NavLink>
        <NavLink to="favourites">Favourites</NavLink>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  background-color: var(--bg-main);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 5rem;

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 2rem;
    padding: 0;
  }

  a {
    text-decoration: none;
    border-radius: 0.3rem;
    color: var(--color-second);
    background-color: var(--color-main);
    display: inline-block;
    padding: 0.3rem;
  }

  a:hover {
    color: var(--color-main);
    background-color: var(--color-second);
  }

  a:active {
    color: var(--color-main);
    background-color: var(--color-second);
  }

  .active {
    color: var(--color-main);
    background-color: var(--color-second);
  }
`;
