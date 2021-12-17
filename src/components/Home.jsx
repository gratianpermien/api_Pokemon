import styled from "styled-components";


export default function Home({pokemonArray}) {


let oneRandomPicPokemonTypeGrass = getRandomPicPokemonOfType("grass");
let oneRandomPicPokemonTypeFire = {};
let oneRandomPicPokemonTypeWater = {};
let oneRandomPicPokemonTypeNormal = {};
let oneRandomPicPokemonTypeBug = {};



function getRandomPicPokemonOfType(type){
  const pokemonTypeArray = pokemonArray.filter(pokemon => pokemon.type === type)
    const randomNumber = Math.floor(Math.random() * pokemonTypeArray.length-1); 
  console.log(randomNumber)
 }

console.log(oneRandomPicPokemonTypeGrass)

  return (
    <section>
      <Article>
        Pokémon(an abbreviation for Pocket Monsters in Japan) is a Japanese
        media franchise managed by The Pokémon Company, a company founded by
        Nintendo, Game Freak, and Creatures. The franchise was created by
        Satoshi Tajiri in 1996 and is centered on fictional creatures called
        "Pokémon". In Pokémon, humans, known as Pokémon Trainers, catch and
        train Pokémon to battle other Pokémon for sport. All media works within
        the franchise are set in the Pokémon universe. The English slogan for
        the franchise is "Gotta Catch ‘Em All!". There are currently 901 Pokémon
        species. <br />
        <a href="https://en.wikipedia.org/wiki/Pok%C3%A9mon" target="_blank"> Learn more...</a>
      </Article>
    </section>
  );
}

const Article = styled.article`
line-height: 1.5rem;
 margin-top: 7rem;
`