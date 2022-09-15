import React from 'react'
import styled from "styled-components";
import FooterWebsite from '../components/footer/footer website/index';
import HeaderBlog from '../components/header/header2/HeaderBlog';

function Soluciones() {
  return (
    <div style={{backgroundColor: "#EEEEEE"}}>
      <HeaderBlog/>
      <Wrapper>
        <div>
        <h2 style={{display:"flex", marginLeft:"10px", alignSelf:"flex-start"}}>Contenidos/Soluciones</h2>
        <Gridcont>
          <Archive>
            <TUM style={{backgroundImage:'url(/SOLUCIONES_ART_11_AGILES.png)'}}></TUM>
            <a href='soluciones/articulo11' style={{fontFamily:"Montserrat", fontSize:"1.2em", lineHeight:"100%",textDecoration:'none', color:"black",display: 'flex',paddingTop:'1em'}}>Las soluciones para..</a>
            
            </Archive>
            <Archive>
            <TUM style={{backgroundImage:'url(/SOLUCIONES_ART_12_TRUSCALE.png)'}}></TUM>
            <a href='soluciones/articulo12' style={{fontFamily:"Montserrat", fontSize:"1.2em", lineHeight:"100%",textDecoration:'none', color:"black",display: 'flex',paddingTop:'1em'}}>Lenovo presenta...</a>
            
            </Archive>
        </Gridcont>
        </div>
        

      </Wrapper>
      <FooterWebsite/>
    </div>
  )
}

export default Soluciones

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  
  flex-direction: row;
  margin-top: 2em;
  margin-bottom: 5em;
  @media screen and (max-width: 1000px){
    flex-direction: column;
  }
  @media screen and (max-width: 390px){
     width:99%;
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