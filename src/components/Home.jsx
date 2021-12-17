import styled from "styled-components";

export default function Home({ pokemonArray }) {
  let oneRandomPicPokemonTypeGrass =
    pokemonArray.length ? getRandomPicPokemonOfType("grass") : "";
  let oneRandomPicPokemonTypeFire =
    pokemonArray.length ? getRandomPicPokemonOfType("fire") : "";
  let oneRandomPicPokemonTypeWater =
    pokemonArray.length ? getRandomPicPokemonOfType("water") : "";
  let oneRandomPicPokemonTypeNormal =
    pokemonArray.length ? getRandomPicPokemonOfType("normal") : "";
  let oneRandomPicPokemonTypeBug =
    pokemonArray.length ? getRandomPicPokemonOfType("bug") : "";

console.log(pokemonArray)

  function getRandomPicPokemonOfType(type) {
    const pokemonTypeArray = pokemonArray.filter(
      (pokemon) => pokemon.type === type
    );
    const randomNumber = Math.floor(Math.random() * pokemonTypeArray.length);

    return pokemonTypeArray[randomNumber].imgFront;
  }

  return (
    <section>
      <Article>
        <div>
          Pokémon(an abbreviation for Pocket Monsters in Japan) is a Japanese
          media franchise managed by The Pokémon Company, a company founded by
          Nintendo, Game Freak, and Creatures.
          <span>
            <img src={oneRandomPicPokemonTypeGrass} alt="Pokemon Type Grass" />
            <br /> <small>Class: Grass</small>
          </span>
        </div>
        <div>
          <span>
            <img src={oneRandomPicPokemonTypeFire} alt="Pokemon Type Fire" />
            <br /> <small>Class: Fire</small>
          </span>
          The franchise was created by Satoshi Tajiri in 1996 and is centered on
          fictional creatures called "Pokémon".
        </div>
        <div>
          In Pokémon, humans, known as Pokémon Trainers, catch and train Pokémon
          to battle other Pokémon for sport.
          <span>
            <img src={oneRandomPicPokemonTypeWater} alt="Pokemon Type Water" />
            <br /> <small>Class: Water</small>
          </span>
        </div>
        <div>
          <span>
            <img
              src={oneRandomPicPokemonTypeNormal}
              alt="Pokemon Type Normal"
            />
            <br /> <small>Class: Normal</small>
          </span>
          All media works within the franchise are set in the Pokémon universe.
        </div>
        <div>
          The English slogan for the franchise is "Gotta Catch ‘Em All!". There
          are currently 901 Pokémon species.
          <span>
            <img src={oneRandomPicPokemonTypeBug} alt="Pokemon Type Bug" />
            <br /> <small>Class: Bug</small>
          </span>
        </div>
        <br />
        <a href="https://en.wikipedia.org/wiki/Pok%C3%A9mon" target="_blank">
          Learn more...
        </a>
      </Article>
      <Source>
        <small>source: https://en.wikipedia.org/wiki/Pokemon</small> <br />
        <small>https://pokeapi.co/</small>
      </Source>
    </section>
  );
}

const Article = styled.article`
  line-height: 1.5rem;
  margin-top: 7rem;
  margin-bottom: 7rem;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const Source = styled.div`
  text-align: right;
  margin-bottom: 7rem;
`;
