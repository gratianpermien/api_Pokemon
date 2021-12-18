import FavouritesCard from "../components/FavouritesCard";
import SelectSort from "../components/SelectMenu";
import Searchbar from "../components/Searchbar";

function Favourites({
  allPokemon,
  allFilteredPokemon,
  onSetPokemon,
  allFavouritePokemon,
  onAddToFavourites,
}) {
  return (
    <section>
      <label htmlFor='sortPokemon'>Sort: </label>
      <SelectSort allPokemon={allPokemon} onSetPokemon={onSetPokemon} />
      <Searchbar
        allFilteredPokemon={allFilteredPokemon}
        onSetPokemon={onSetPokemon}
      />
      {allFavouritePokemon.length > 0 && (
        <FavouritesCard
          //Ever only set State of selected Pokemon in this component!
          onAddToFavourites={onAddToFavourites}
          allFavouritePokemon={allFavouritePokemon}
          onAddToFavourites={onAddToFavourites}
          allFavouritePokemon={allFavouritePokemon}
        />
      )}
    </section>
  );
}

export default Favourites;
