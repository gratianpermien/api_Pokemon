export default function CardExtra({ pokemon }) {
  return (
    <article>
      <div>
        Picture from behind:
        <img src={pokemon.imgBack} alt="Picture of Pokemon from back" />
      </div>
      <p>Base Experience: {pokemon.baseExperience}</p>
      <p>Pokemon height: {pokemon.height}</p>
      <p>Pokemon weight: {pokemon.weight}</p>
    </article>
  );
}
