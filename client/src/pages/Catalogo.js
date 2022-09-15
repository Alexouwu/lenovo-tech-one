import React from 'react'
import styled from "styled-components";
import FooterWebsite from '../components/footer/footer website/index';
import HeaderBlog from '../components/header/header2/HeaderBlog';

function Catalogo() {
  return (
    <div style={{backgroundColor: "#EEEEEE"}}>
      <HeaderBlog/>
      <Wrapper>
        <div>
        <h2 style={{display:"flex",alignSelf:"flex-start"}}>Contenidos/Catálogo</h2>
        <Gridcont>
          <Archive>
            <TUM></TUM>
            <a href='catalogo/articulo13' style={{fontFamily:"Montserrat", fontSize:"1.3em", lineHeight:"100%",textDecoration:'none', color:"black",display: 'flex',paddingTop:'1em'}}>Lenovo Legion...</a>
            
            </Archive>
        </Gridcont>
        </div>
        

      </Wrapper>
      <FooterWebsite/>
    </div>
  )
}

export default Catalogo

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
  }`

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
  `

  const Gridcont = styled.div`
  width: 1200px;
  height: auto;
  display: grid;
  padding: 3vh;
  justify-content: space-around;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1000px){
    width: 100%;
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
`