import Image from "../components/Image";
import SelectSort from "../components/SelectMenu";
import Searchbar from "../components/Searchbar";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import Details from "../components/Details";
import styled from "styled-components";

function Pokedex({
  allPokemon,
  allFilteredPokemon,
  onSetPokemon,
  onAddToFavourites,
  allFavouritePokemon,
}) {
  const [selectedPokemon, setSelectedPokemon] = useState(0);

  return (
    <section>
      <label htmlFor='sortPokemon'>Sort: </label>
      <SelectSort allPokemon={allPokemon} onSetPokemon={onSetPokemon} />
      <Searchbar
        allFilteredPokemon={allFilteredPokemon}
        onSetPokemon={onSetPokemon}
      />
      <Image allPokemon={allPokemon} selectedFromCard={selectedPokemon} />
      <Details selectedFromCard={selectedPokemon} allPokemon={allPokemon} />
      <Card
        //Ever only set State of selected Pokemon in this component!
        allPokemon={allPokemon}
        newSelectedPokemon={setSelectedPokemon}
        onAddToFavourites={onAddToFavourites}
        allFavouritePokemon={allFavouritePokemon}
      />
    </section>
  );
}

export default Pokedex;
