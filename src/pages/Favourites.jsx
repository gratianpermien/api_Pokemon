import FavouritesCard from "../components/FavouritesCard";
import SelectSort from "../components/SelectMenu";
import Searchbar from "../components/Searchbar";
import styled from "styled-components";

function Favourites({
  allPokemon,
  allFilteredPokemon,
  onSetPokemon,
  allFavouritePokemon,
  onAddToFavourites,
  onChangeView,
  showBackPokemon,
}) {
  return (
    <FavouritesSection>
      <Sort>
        <label htmlFor='sortPokemon'>Sort: </label>
        <SelectSort allPokemon={allPokemon} onSetPokemon={onSetPokemon} />
        <Searchbar
          allFilteredPokemon={allFilteredPokemon}
          onSetPokemon={onSetPokemon}
        />
      </Sort>
      {allFavouritePokemon.length > 0 && (
        <FavouritesCard
          //Ever only set State of selected Pokemon in this component!
          onAddToFavourites={onAddToFavourites}
          allFavouritePokemon={allFavouritePokemon}
          onAddToFavourites={onAddToFavourites}
          allFavouritePokemon={allFavouritePokemon}
          onChangeView={onChangeView}
          showBackPokemon={showBackPokemon}
        />
      )}
    </FavouritesSection>
  );
}

export default Favourites;

const FavouritesSection = styled.section`
  height: 100%;
`;

const Sort = styled.div`
  display: flex;
  background-color: #cc0000;
  padding: 0.3rem;
`;
