import React from 'react'
import styled from 'styled-components';
import recicle from '../imagens/recicle.png'
import arte from '../imagens/arte.png'
import acess from '../imagens/acessi.png'
import lazer from '../imagens/lazer.png'

const Container = styled.div`
width:98vw;
height:100vh;
border:solid yellow;
padding: 2%;
 p{
  margin: 2%;
 }
`
const Cards = styled.section`
display:flex;
justify-content:space-evenly;
`

const Card = styled.img`
width:15vw;
height: 30vh;
boder:solid; 
`


export default function Objetivos() {
  return (
    <Container>
     <h1>Objetivos de Desenvolvimentos Sustentáveis da ZN</h1>
     <p>Os Objetios de Desenvolvimento Sustentável são um apelo à ação de melhoria do bairro</p>
     <Cards>
     <Card src={recicle} alt="rua"/>
     <Card src={arte} alt="rua"/>
     <Card src={acess} alt="rua"/>
     <Card src={lazer} alt="rua"/>
     <Card src={lazer} alt="rua"/>
     </Cards>
    </Container>
  );
}