import FavouritesCard from "../components/FavouritesCard";
import SelectSort from "../components/SelectMenu";
import Searchbar from "../components/Searchbar";
import styled from "styled-components";
import Filter from "../components/Filter";

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
        <Filter />
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
  margin-bottom: 7rem;
`;

const Sort = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #cc0000;
  padding: 0.3rem;
`;
