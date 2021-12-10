import { useState } from "react"
import styled from "styled-components"
import GlobalStyles from "../src/GlobalStyles"
import "./button.css"
import App from "../src/App"


function Button () {
  const [infoVisibily, setInfoVisibily] = useState(false)

  function toggleButton() {
    setInfoVisibily(!infoVisibily)
  }

  const onClick = () => setShowText(true)
  return (
    <div>
      <button onClick={toggleButton}>
      {infoVisibily ? "Hide infos" : "Show more infos"}
      </button>
      <InfoExtended infoVisibily={infoVisibily} />
    </div>

  )
  }
  
  function InfoExtended({infoVisibily}) {
    const hidden = styled.p`
    visibility: hidden;
    `
      const infos = infoVisibily ? '' : 'hidden'
      return <article className={infos}>
        HIER: Experience height weight
        </article>
  }
  export default Button


  