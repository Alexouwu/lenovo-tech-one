import React from 'react'
import styled from "styled-components";
import FooterWebsite from '../components/footer/footer website/index';
import HeaderBlog from '../components/header/header2/HeaderBlog';

function Innovacion() {
  return (
    <div style={{backgroundColor: "#EEEEEE"}}>
      <HeaderBlog/>
      <Wrapper>
        <div>
        <h2 style={{display:"flex",marginLeft:"10px",alignSelf:"flex-start"}}>Contenidos/Innovacion</h2>
        <Gridcont>
          <Archive>
            <TUM style={{backgroundImage:"url(/INNOVACION_ART_1_LUFTHANSA.png)"}}></TUM>
            <a href='innovacion/articulo1' style={{fontFamily:"Montserrat", fontSize:"1em", lineHeight:"100%",textDecoration:'none', color:"black",display: 'flex',paddingTop:'1em'}}>Alianza medio...</a>
            </Archive>
            <Archive>
            <TUM style={{backgroundImage:"url(/INNOVACION_ART_2_SOSTENIBLE.png)"}}></TUM>
            <a href='innovacion/articulo2' style={{fontFamily:"Montserrat", fontSize:"1em", lineHeight:"100%",textDecoration:'none', color:"black",display: 'flex',paddingTop:'1em'}}>Lenovo es reconocida...</a>
            </Archive>
            <Archive>
            <TUM style={{backgroundImage:"url(/INNOVACION_ART_3_IGUALDAD.png)"}}></TUM>
            <a href='innovacion/articulo3' style={{fontFamily:"Montserrat", fontSize:"1em", lineHeight:"100%",textDecoration:'none', color:"black",display: 'flex',paddingTop:'1em'}}>Lenovo consigue..</a>
            </Archive>
            <Archive>
            <TUM style={{backgroundImage:"url(/INNOVACION_ART_4_DR_YONG.png)"}}></TUM>
            <a href='innovacion/articulo4' style={{fontFamily:"Montserrat", fontSize:"1em", lineHeight:"100%",textDecoration:'none', color:"black",display: 'flex',paddingTop:'1em'}}>El Dr. Yong Rui...</a>
            </Archive>
            <Archive>
            <TUM style={{backgroundImage:"url(/INNOVACION_ART_5_IGUALDAD_GENERO.png)"}}></TUM>
            <a href='innovacion/articulo5' style={{fontFamily:"Montserrat", fontSize:"1em", lineHeight:"100%",textDecoration:'none', color:"black",display: 'flex',paddingTop:'1em'}}>Lenovo es seleccionada...</a>
            </Archive>
            <Archive>
            <TUM style={{backgroundImage:"url(/INNOVACION_ART_6_EDUCACION.png)"}}></TUM>
            <a href='innovacion/articulo6' style={{fontFamily:"", fontSize:"1em", lineHeight:"100%",textDecoration:'none', color:"black",display: 'flex',paddingTop:'1em'}}>Lenovo impulsa el...</a>
            </Archive>
            <Archive>
            <TUM style={{backgroundImage:"url(/INNOVACION_ART_7_FORTUNE.png)"}}></TUM>
            <a href='innovacion/articulo7' style={{fontFamily:"Montserrat", fontSize:"1em", lineHeight:"100%",textDecoration:'none', color:"black",display: 'flex',paddingTop:'1em'}}>Lenovo asciende en...</a>
            </Archive>
            <Archive>
            <TUM style={{backgroundImage:"url(/INNOVACION_ART_8_MOTOGP.png)"}}></TUM>
            <a href='innovacion/articulo8' style={{fontFamily:"Montserrat", fontSize:"1em", lineHeight:"100%",textDecoration:'none', color:"black",display: 'flex',paddingTop:'1em'}}>Ducati y Lenovo...</a>
            </Archive>
            <Archive>
            <TUM style={{backgroundImage:"url(/INNOVACION_ART_9_DUCATI_TEAM.png)"}}></TUM>
            <a href='innovacion/articulo9' style={{fontFamily:"Montserrat", fontSize:"1em", lineHeight:"100%",textDecoration:'none', color:"black",display: 'flex',paddingTop:'1em'}}>Ducati Lenovo Team...</a>
            </Archive>
            <Archive>
            <TUM style={{backgroundImage:"url(/INNOVACION_ART_10_INTER_LENOVO.png)"}}></TUM>
            <a href='innovacion/articulo10' style={{fontFamily:"Montserrat", fontSize:"1em", lineHeight:"100%",textDecoration:'none', color:"black",display: 'flex',paddingTop:'1em'}}>Inter Lenovo...</a>
            </Archive>
        </Gridcont>
        </div>
        

      </Wrapper>
      <FooterWebsite/>
    </div>
  )
}

export default Innovacion

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  flex-direction: row;
  margin-top: 2em;
  margin-bottom: 5em;
  @media screen and (max-width: 1000px){
    flex-direction: column;
  }
  @media screen and (max-width: 390px){
     width:100%;
     margin-left:20px;
     
  }

  `

const Archive = styled.div`
  width: 15em;
  height: 15em;
  margin-bottom: 4vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px){
      margin-right: 4vh;
    }
  @media screen and (max-width: 390px){
    width:10.5em;
    height: 10.9em;
    padding:10px;
  }
  `

const Gridcont = styled.div`
  width: 1200px;
  height: auto;
  display: grid;
  padding: 3vh;
  justify-content: space-around;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 390px){
    width:100%;
    padding-left:10px;
    grid-template-columns: repeat(2, 1fr);
  }
  `
const TUM = styled.div`
width: 80%;
height: 60%;
background-image: url(/CATALOGO_ART_13_COMMUNITYAWRDS.png);
background-repeat: no-repeat;
background-size: cover;
background-position: center;
@media screen and (max-width: 390px){
    width: 90%;
    height: 80%;
    grid-template-columns: repeat(2, 1fr);
  }
`