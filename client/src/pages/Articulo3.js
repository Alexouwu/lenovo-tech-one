import React from 'react'
import styled from 'styled-components'
import FooterWebsite from '../components/footer/footer website/index';
import HeaderBlog from '../components/header/header2/HeaderBlog';

function Articulo3() {
  return (
    <>
        <HeaderBlog></HeaderBlog>
        <Wrapper>
            <ArtBody>

            <Balazo>Lenovo consigue por 5º año consecutivo la máxima puntuación en el Índice de Igualdad Corporativa de 2022</Balazo>
            <Arte src='/INNOVACION_ART_3_IGUALDAD@2x.png'></Arte>

            <Palabras>Lenovo anunció el 27 de enero de 2022 que por quinto año consecutivo, la Fundación de la Campaña de Derechos Humanos (HRC) otorgó a la empresa una calificación perfecta de 100 en el Índice de Igualdad Corporativa (CEI) de 2022).  Para la igualdad LGBTQ en el lugar de trabajo en los Estados Unidos, el Índice es una encuesta de referencia e informe sobre políticas y prácticas corporativas. </Palabras>
            <Palabras>Lenovo es una de las 842 empresas que han logrado un récord en obtener una puntuación máxima de 100 en la CEI, y la distinción como “Mejor sitio para trabajar por la igualdad LGBTQ”. </Palabras>
            <Palabras>La calificación para el índice se basa en la adopción por parte de una compañía de políticas y prácticas relacionadas con LGBTQ, incluyendo la no discriminación, protecciones en el lugar de trabajo, beneficios de pareja doméstica, beneficios de atención médica transgénero, programas de competencia y compromiso público con la comunidad LGBTQ.</Palabras>
            <Palabras>Lenovo se centra en el crecimiento de diversas perspectivas en sus puestos ejecutivos, como demuestra su objetivo de aumentar la cantidad de ejecutivos de ambientes subrepresentados – incluyendo LGBTQ – a 35% para FY2025/26 (del 29% en 2020). </Palabras>
            <Palabras>Obtén más información sobre los esfuerzos de diversidad e inclusión de la empresa en el<a href='https://investor.lenovo.com/en/sustainability/sustainability_reports.php'>Informe sobre Medio Ambiente, Social y Gobierno corporativo más reciente.</a> </Palabras>
            <LinkMas>Link - Más información</LinkMas>
            <a style={{fontSize:"0.8em"}} href='https://news.lenovo.com/pressroom/press-releases/lenovo-earns-perfect-score-for-fifth-consecutive-year-in-2022-corporate-equality-index/?lg=es'>https://news.lenovo.com/pressroom/press-releases/lenovo-earns-perfect-score-for-fifth-consecutive-year-in-2022-corporate-equality-index/?lg=es</a>
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

export default Articulo3

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