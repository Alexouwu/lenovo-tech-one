import React from 'react'
import styled from "styled-components";
import FooterWebsite from '../components/footer/footer website/index';
import HeaderBlog from '../components/header/header2/HeaderBlog';

function Evento() {
  return (
    <div style={{backgroundColor: "#EEEEEE"}}>
      <HeaderBlog/>
      <Wrapper>
      <h2 style={{display:"flex",alignSelf:"flex-start",marginBottom:"1em",marginLeft:"2em"}}>Contenidos/Evento</h2>
          <EvDiv>
              <h1 style={{fontFamily:"Montserrat", color:"white",textAlign:"center", fontSize:"2em",lineHeight:"100%"}}>¡Quédate pendiente!</h1>
          </EvDiv>
          <h2 style={{marginTop:"3em",fontSize:"1.3em"}}>Estamos trabajando para mostrarte lo mejor de la Tech House.</h2>
          <h2 style={{fontFamily:"Montserrat",marginTop:"1em",fontSize:"1.7em"}}>¡Espéralo!</h2>
      </Wrapper>
      <FooterWebsite/>
    </div>
  )
}

export default Evento

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  flex-direction: column;
  margin-top: 2em;
  margin-bottom: 5em;
  @media screen and (max-width: 1000px){
    flex-direction: column;
  }`

const EvDiv = styled.div`
  width: 80%;
  height: 20em;
  padding: 0em 0em;
  align-contents: center;
  justify-contents: center;
  text-align: center;
  background-image: url(/EVENTO_PAG_SIN_CONTENIDO@2x.png);
background-repeat: no-repeat;
background-size: cover;
background-position: center;
padding-top:130px;
  `