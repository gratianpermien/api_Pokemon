
import Button from "./Button";


export default function CreateCard({ pokemonArray }) {


  return (
    <section>
      {pokemonArray.map((pokemon, _index) => (
        <article key={_index}>
          <h2>Name: {pokemon.name.toUpperCase()}</h2>
          <img src={pokemon.imgFront} alt="Picture of Pokemon" />
          <p>Type: {pokemon.type.toUpperCase()}</p>
          <Button />
          </article>
      ))}
      
    </section>
  );
}
