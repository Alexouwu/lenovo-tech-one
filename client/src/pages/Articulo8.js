import React from 'react'
import styled from 'styled-components'
import FooterWebsite from '../components/footer/footer website/index';
import HeaderBlog from '../components/header/header2/HeaderBlog';

function Articulo8() {
  return (
    <>
        <HeaderBlog></HeaderBlog>
        <Wrapper>
            <ArtBody>

            <Balazo>Ducati y Lenovo continúan su colaboración para liderar la innovación en MotoGP</Balazo>
            <Arte src='/INNOVACION_ART_8_MOTOGP@2x.png'></Arte>

            <Palabras>Después de terminar 2021 con la victoria del Título Mundial de Constructores de MotoGP por segundo año consecutivo, Ducati Lenovo Team está listo para una nueva temporada, en la que la tecnología jugará un papel cada vez más crucial. Desde 2018, la asociación tecnológica de Lenovo con Ducati ha ayudado al equipo a innovar y mejorar el rendimiento en pista. La innovación, la velocidad y la seguridad están en el centro de esta evolución. </Palabras>
            <Palabras>Gracias a una amplia gama de soluciones más inteligentes, la analítica, la inteligencia artificial (IA) y la colaboración inteligente de Lenovo continúan impulsando mejoras y ayudando al equipo a acelerar las simulaciones y el análisis de datos en tiempo real, transfiriendo tecnología constantemente entre el mundo de las carreras y las motos de calle de Ducati. 
</Palabras>
            <Palabras>El primer objetivo de la temporada 2022 es completar el proyecto de Remote Garage, que permite a los ingenieros recibir datos en tiempo real e interactuar con el taller y las motocicletas mientras trabajan de forma remota. Además, Ducati y Lenovo se han comprometido a mejorar la videoconferencia tanto en la sede central como en el taller. El objetivo es conectar mejor los equipos virtuales para lograr una colaboración satisfactoria, incluso a kilómetros de distancia. </Palabras>
            <Palabras>Lenovo ha apoyado a los ingenieros y diseñadores de Ducati en la innovación de carreras y motos de calle desde 2018, ayudando a la empresa a alcanzar el máximo rendimiento y niveles mejorados de seguridad. </Palabras>
            <Palabras>Juntos, Ducati y Lenovo tienen grandes planes para el futuro. Las dos empresas ya están estudiando cómo pueden aprovechar la IA, el aprendizaje automático y la realidad aumentada para impulsar niveles aún mayores de innovación en MotoGP. Reproducir la motocicleta y sus componentes de forma virtual, a tamaño completo y en un contexto real, representará un factor diferenciador que acelerará la I+D, las pruebas y el mantenimiento futuros, así como la asistencia postventa para las motos de calle.</Palabras>

            
            <LinkMas>Link - Más información</LinkMas>
            <a style={{fontSize:"0.8em"}} href='https://news.lenovo.com/pressroom/press-releases/ducati-continue-partnership-to-lead-innovation-in-motogp/?lg=es
'>https://news.lenovo.com/pressroom/press-releases/ducati-continue-partnership-to-lead-innovation-in-motogp/?lg=es
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

export default Articulo8

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