import React from 'react'
import styled from 'styled-components'
import FooterWebsite from '../components/footer/footer website/index';
import HeaderBlog from '../components/header/header2/HeaderBlog';

function Articulo7() {
  return (
    <>
        <HeaderBlog></HeaderBlog>
        <Wrapper>
            <ArtBody>

            <Balazo>Lenovo asciende en la lista de las empresas más admiradas del mundo de Fortune en 2022</Balazo>
            <Arte src='/INNOVACION_ART_7_FORTUNE@2x.png'></Arte>

           <Palabras>La revista Fortune publicó su lista anual de las empresas más admiradas del mundo, con Lenovo clasificada en quinto lugar, subiendo desde la décima posición, para empresas en la amplia categoría de la industria informática. La clasificación anual, que evalúa la reputación corporativa de las organizaciones globales, analiza las 1000 empresas más grandes de EE. UU. junto con las empresas Global 500 de Fortune que reportan ingresos anuales de US$10 mil millones o más. Lenovo ocupa actualmente el puesto 159 en la lista Fortune Global 500.</Palabras>
           <Palabras>La lista clasifica empresas globales de 52 industrias diferentes. Dentro de las empresas en la subcategoría de la “industria informática”, Lenovo fue particularmente reconocida como “La más admirada” con una buena puntuación por la innovación, la calidad de la gestión y la competitividad global de la empresa.</Palabras>
           <Palabras>Lenovo también fue reconocida recientemente como una de las empresas más sostenibles del mundo por Corporate Knights; obtuvo una puntuación perfecta por quinto año consecutivo en el Índice de Igualdad Corporativa y fue reconocida en el Índice de Igualdad de Género 2022 de Bloomberg. </Palabras>
            
            <LinkMas>Link - Más información</LinkMas>
            <a style={{fontSize:"0.8em"}} href='https://news.lenovo.com/pressroom/press-releases/lenovo-climbs-fortunes-most-admired-companies-list/?lg=es
'>https://news.lenovo.com/pressroom/press-releases/lenovo-climbs-fortunes-most-admired-companies-list/?lg=es
</a>
            </ArtBody>
            <RecentArt>
                <h2 style={{fontFamily:"Gotham",fontSize:"1em"}}>Entradas recientes</h2>
                <div style={{display:"flex",flexDirection:"row"}}>
                    <Imatum></Imatum>
                    <Balas><a style={{textDecoration:"none", color:"black"}} href='/contenidos/catalogo/articulo13'>Lenovo Legion galardonada como...</a></Balas>
                </div>
                <div style={{display:"flex",flexDirection:"row"}}>
                    <Imatum style={{backgroundImage:"url(/INNOVACION_ART_6_EDUCACION.png)"}}></Imatum>
                    <Balas><a style={{textDecoration:"none", color:"black"}} href='/contenidos/innovacion/articulo6'>Lenovo impulsa el acceso de los niños...</a></Balas>
                </div>
                <div style={{display:"flex",flexDirection:"row"}}>
                    <Imatum style={{backgroundImage:"url(/SOLUCIONES_ART_12_TRUSCALE.png)"}}></Imatum>
                    <Balas><a style={{textDecoration:"none", color:"black"}} href='/contenidos/soluciones/articulo12'>Lenovo presenta TruScale...</a></Balas>
                </div>
            </RecentArt>
        </Wrapper>
        <FooterWebsite></FooterWebsite>
    </>
  )
}

export default Articulo7

const Wrapper = styled.div`
 
  display: flex;
  justify-content: center;
  padding: 12px 24px;
  flex-direction: row;
  margin-bottom: 5em;

  @media screen and (min-width: 500px)  {
    margin-left:20%;
    max-width: 70%;
  }
 `;
const ArtBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  maxwidth: 40em;
 
  @media screen and (min-width: 390px){
    maxwidth: 10em;
     margin: 2em 0em 5em 0em;
  }
`;
const RecentArt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family:"Montserrat",
  margin-top: 30em;
  @media screen and (max-width: 390px){
    display: none;
  }
`;
const Balazo = styled.h1`
  font-family: "Montserrat";
  font-size: 2em;
  color: black;
`;
const Arte = styled.img`
  max-width: 100%;
  margin: 2em 2em;
`;
const Palabras = styled.p`
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    color: black;
    margin: 0.5em 0em;
`
;
const LinkMas = styled.h2`
  font-family: "Montserrat";
  font-weight: bold;
  font-size: 1.2em;
  color: #D88022;
  padding-top: 1em;`
  ;
  const Imatum = styled.div`
  width: 5em;
  height: 5em;
  background-image: url(/CATALOGO_ART_13_COMMUNITYAWRDS.png);
background-repeat: no-repeat;
background-size: cover;
background-position: center;
  margin: 0.5em;
`
;
const Balas = styled.p`
font-family: "Montserrat";
font-weight: bold;
width: 10em;
font-size:12px;
margin-left: 1em;
margin-top: 0.5em;
color: black;`