import Button from "./Button"
import styled from "styled-components"
import {getColor} from './Cardscolor'

export default function Card ({pokemonArray}) {
    
    return  (
        <CardContainer>
            {pokemonArray.map((pokemon, _index) => (
            <article key={_index }>
                <PokeContainer >
                <h2>{pokemon.name}</h2>
                {/* <p>Type of Pokemon: {pokemon.type}</p> */}
                <img src={pokemon.img} width="70" height="70"></img>
                <p>Experience: {pokemon.experience}</p>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                <Button/>
                </PokeContainer>
               
                
            </article>
            ))}
        </CardContainer>
    )
}

const CardContainer = styled.section`
    display:flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content:center;
    gap: 6vw;
    margin: 5px;
    position: center;
    top: 30%;
    `

const PokeContainer = styled.div`
    border: 1px solid black;
    border-radius: 15px;
    place-self: center;
    background-color: getColor(type)
    `





 

