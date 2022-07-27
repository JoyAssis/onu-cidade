import React from 'react'
import Grid from "./Grid"
import styled from 'styled-components'

const Container = styled.div`
width:90vw;
height: 90vh;
display:flex;
justify-content: space-evenly;
`
const Frase =styled.div`
width:30vw;
display:flex;
justify-content: center;
align-items: center;
`


export default function Home() {
  return (
    <Container>
        <Frase>
          <h1>COMO VOCÊ PODE FAZER A DIFERENÇA ONDE MORA!</h1>
        </Frase>
        <div>
          <Grid/>
        </div>
    </Container>
  );
}