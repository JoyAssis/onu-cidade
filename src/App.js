import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home"
import Objetivos from "./pages/Objetivos"
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  background-color: #faedcd;
}
`
const Secao = styled.div`
width:98vw;
height: 100vh;
 ul{
  display:flex;
  width: 80vw;
  list-style: none;
  justify-content: space-evenly;
  margin: 1%;
 }
`

export default function App(){
  return(
    <Secao>
     <Router>
       <GlobalStyle/>
       <ul>
         <Link to='*'><li>Home</li></Link>
         <Link to='Objetivos'><li>Objetivos de Desenvolvimento</li></Link>              
       </ul>

        <Routes> 
          <Route path='*' element={<Home/>}/>
          <Route path='Objetivos' element={<Objetivos/>}/>
        </Routes>
   
      </Router>
    </Secao>
  )
}