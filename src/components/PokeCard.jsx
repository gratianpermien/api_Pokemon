import PokeImg from "./PokeImg";
import PokeInfo from "./PokeInfo";
import { useState, useEffect } from "react";
import PokeDetails from "./PokeDetails";
import styled from "styled-components";

function PokeCard({ pokemonFromApp }) {
  const [selectedPokemon, setSelectedPokemon] = useState(0);

  return (
    <section>
      <PokeImg
        pokemonFromCard={pokemonFromApp}
        selectedFromCard={selectedPokemon}
      />
      <PokeDetails
        selectedFromCard={selectedPokemon}
        pokemonFromCard={pokemonFromApp}
      />
      <PokeInfo
        pokemonFromCard={pokemonFromApp}
        setSelectedFromCard={setSelectedPokemon}
      />
    </section>
  );
}

export default PokeCard;
