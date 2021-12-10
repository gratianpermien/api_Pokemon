import styled from "styled-components";
import GlobalStyles from "../src/GlobalStyles";

export default function Header(props) {

    const {headline,sort} = props

    return (
        <Head>
            <Title>Pokemons</Title>
        </Head>
    )
}
const Title = styled.h1`
    font-size= 50px;
    postion:center;
    `

const Head = styled.header`
    background-color:powderblue;
    width:100%;
    top: 1%;
    left: 0%;
`

