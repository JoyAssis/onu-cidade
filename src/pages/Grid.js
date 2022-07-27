import React from 'react'
import styled from 'styled-components';

import img2 from '../imagens/candelaria.jpg'
import img3 from '../imagens/vila-medeiros.jpg'
import img4 from '../imagens/vmedeiros-casas.jpg'

const Container = styled.div`
width:20.5vw;
height: 92vh;
border:solid;
display:collumn;
justify-content:flex-end;
margin-left:60%;
 img{
  width:20vw;
  height: 30vh;
 }
`

export default function Grid() {
  return (
    <Container>
     <img src={img2} alt="rua"/>
     <img src={img3} alt="rua"/>
     <img src={img4} alt="rua"/>   
    </Container>
  );
}