import React from 'react'
import styled from 'styled-components'
import FooterWebsite from '../components/footer/footer website/index';
import HeaderBlog from '../components/header/header2/HeaderBlog';

function Articulo5() {
  return (
    <>
        <HeaderBlog></HeaderBlog>
        <Wrapper>
            <ArtBody>

            <Balazo>Lenovo es seleccionada para integrar el Índice de Igualdad de Género de Bloomberg de 2022</Balazo>
            <Arte src='/INNOVACION_ART_5_IGUALDAD_GENERO@2x.png'></Arte>

            <Palabras>Lenovo ha sido reconocida una vez más al integrar el Índice de Igualdad de Género (GEI) de Bloomberg de 2022. El marco proporciona un enfoque estandarizado internacionalmente para medir el desempeño en el liderazgo femenino, la paridad de remuneración entre los géneros y la cultura inclusiva, y distingue a las empresas que apoyan la igualdad entre los géneros mediante el desarrollo de políticas, la representación y la transparencia. El índice incluye 418 empresas con sede en 45 países y regiones. </Palabras>
            <Palabras>“El Índice de Igualdad de Género de Bloomberg es un reconocimiento internacional del trabajo que estamos realizando en materia de igualdad de género,”, expresó Calvin Crosslin, director de Diversidad de Lenovo. “Como líder tecnológico global, la igualdad de género constituye una prioridad en nuestros esfuerzos de impacto social. Hemos establecido varias metas ambiciosas para aumentar la representación de las mujeres ejecutivas. Para el año fiscal 2025/26, aspiramos a que las mujeres representen el 27% de la población ejecutiva de Lenovo”. </Palabras>
            <Palabras>Lenovo cuenta con una base global de empleados de más de 71.500 empleados, que opera en más de 180 mercados en todo el mundo, con mujeres que representan el 36% de la plantilla. </Palabras>
            
            <LinkMas>Link - Más información</LinkMas>
            <a style={{fontSize:"0.8em"}} href='https://news.lenovo.com/pressroom/press-releases/selected-in-the-2022-bloomberg-gender-equality-index/?lg=es
'>https://news.lenovo.com/pressroom/press-releases/selected-in-the-2022-bloomberg-gender-equality-index/?lg=es
</a>
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

export default Articulo5

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