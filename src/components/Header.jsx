import PokemonLogo from "../images/PokemonLogo.svg";
import styled from "styled-components";

function Header({}) {
  return (
    <StyledHeader>
      <h1>
        <img src={PokemonLogo} alt='POKEMON' />
      </h1>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  background-color: #cc0000;
  position: sticky;
  h1 {
    margin: 0;
    padding: 0;
    text-align: center;
  }
  img {
    width: 60%;
    height: 60%;
  }

  @media (min-width: 768px) {
    background-color: #cc0000;
    position: sticky;

    h1 {
      margin: 0;
      padding: 0;
      text-align: center;
    }
    img {
      width: 25%;
      height: 25%;
    }
  }
`;
