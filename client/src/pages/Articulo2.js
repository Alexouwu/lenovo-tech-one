import React from 'react'
import styled from 'styled-components'
import FooterWebsite from '../components/footer/footer website/index';
import HeaderBlog from '../components/header/header2/HeaderBlog';

function Articulo2() {
  return (
    <>
        <HeaderBlog></HeaderBlog>
        <Wrapper>
            <ArtBody>

            <Balazo>Lenovo es reconocida como una de las empresas más sostenibles del mundo</Balazo>
            <Arte src='/INNOVACION_ART_2_SOSTENIBLE@2x.png'></Arte>

            <Palabras>Lenovo ha sido reconocida como una de las 100 empresas más sostenibles del mundo 2022 por Corporate Knights, por tercer año consecutivo,</Palabras>
            <Palabras>El reconocimiento de Corporate Knights destaca los esfuerzos de Lenovo por construir un futuro más inteligente y prometedor. Lenovo cuenta con varios programas en marcha, como establecer objetivos agresivos de reducción de emisiones de gases de efecto invernadero para 2030, en consonancia con la última ciencia climática y aprobados por la iniciativa Science Based Targets.</Palabras>
            <Palabras>Más allá de los objetivos corporativos de limitar sus propias emisiones, Lenovo se centra en aumentar la sostenibilidad de su packaging y productos. Desde 2008, Lenovo ha eliminado 3.240 toneladas métricas de consumo de packaging en peso. Los anuncios de CES 2022 de este mes incluyeron el lanzamiento de la <a href="https://news.lenovo.com/pressroom/press-releases/thinkpad-z-series-new-look-recycled-materials/">nueva laptop ThinkPad Z-Series</a> que incluye materiales sostenibles como aluminio reciclado o cuero negro vegano reciclado, y packaging fabricado con bambú y caña de azúcar 100% reciclables y compostables, y un adaptador de alimentación de CA que utiliza un 90% de contenido postconsumo (PCC). Este producto demuestra los continuos esfuerzos de la empresa por incorporar características y materiales sostenibles en sus productos.</Palabras>
            <Palabras>“Una vez más, formar parte del ranking Global 100 significa mucho para Lenovo”, comentó Mary Jacques, directora de Asuntos Ambientales Globales y Sostenibilidad de Lenovo. “Entendemos que, como líder mundial en tecnología, tenemos un papel importante que desempeñar en la creación de tecnologías innovadoras que beneficien la salud de nuestras comunidades y el medio ambiente”. </Palabras>
            <Palabras>Lenovo ha publicado recientemente <a href='https://news.lenovo.com/pressroom/press-releases/new-climate-change-mitigation-goals-2020-21-esg-report/'>su Informe ESG de 2020/21</a> que describe todos los programas de sostenibilidad de Lenovo a nivel mundial. </Palabras>
            
            <LinkMas>Link - Más información</LinkMas>
            <a style={{fontSize:"0.8em"}} href='https://news.lenovo.com/pressroom/press-releases/lenovo-recognized-as-one-of-the-worlds-most-sustainable-companies/?lg=es'>https://news.lenovo.com/pressroom/press-releases/lenovo-recognized-as-one-of-the-worlds-most-sustainable-companies/?lg=es</a>
            </ArtBody>
            <RecentArt>
                <h2 style={{fontFamily:"Montserrat",fontSize:"1em"}}>Entradas recientes</h2>
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

export default Articulo2

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