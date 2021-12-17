import styled from "styled-components"


export default function Navbar() {

    return (
        <Nav>
            <ul>
            <li>Home</li>
            <li>All Characters</li>
            <li>Favourites</li>
             </ul>
       </Nav>
    )
}

const Nav = styled.nav`
background-color: var(--bg-main);
   position: fixed;
   bottom: 0;
   left: 0;
   right: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   align-content: center;
   height: 5rem; 

   ul{
      list-style: none; 
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
   align-items: center;
   align-content: center;
      gap: 2rem;
      padding: 0;
   }

   li {
       border-radius: .3rem;
       color: var(--color-second);
       background-color: var(--color-main);
       display: inline-block;
       padding: .3rem;
   }

   li:hover {
      color: var(--color-main);
       background-color: var(--color-second);
   }   
   
   li:active {
      color: var(--color-main);
       background-color: var(--color-second);
   }   

`