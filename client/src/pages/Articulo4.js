import React from 'react'
import styled from 'styled-components'
import FooterWebsite from '../components/footer/footer website/index';
import HeaderBlog from '../components/header/header2/HeaderBlog';

function Articulo4() {
  return (
    <>
        <HeaderBlog></HeaderBlog>
        <Wrapper>
            <ArtBody>

            <Balazo>El Dr. Yong Rui, director de tecnología de Lenovo, es nominado becario de la AAAS</Balazo>
            <Arte src='/INNOVACION_ART_4_DR_YONG@2x.png'></Arte>

            <Palabras>El Dr. Yong Rui, director general de tecnología de Lenovo, ha sido electo becario de la Asociación Estadounidense para el Avance de la Ciencia (AAAS), la mayor sociedad científica general del mundo, y editora de la prestigiosa revista científica Science.</Palabras>
            <Palabras>El Dr. Rui, experto líder en inteligencia artificial, fue elegido por “distinguidas contribuciones al campo de la informática multimedia y las aplicaciones de IA, particularmente en análisis, recuperación y comprensión multimedia”, según la AAAS.</Palabras>
            <Palabras>Durante los últimos 30 años, el Dr. Rui ha realizado muchos logros en múltiples áreas de investigación de IA, al tiempo que también se ha dedicado a poner en práctica las tecnologías. En Lenovo, que supervisa I+D y Lenovo Research, el Dr. Rui ha liderado el desarrollo de muchas tecnologías líderes en el sector que están impulsando la transformación inteligente de Lenovo y sus industrias.</Palabras>
            <Palabras>Bajo el liderazgo del Dr. Rui, se desarrolló la tecnología de pantalla plegable en forma de campana, que desempeñó un papel fundamental en el despliegue del motorola razr plegable. Con la ayuda de nuestra tecnología de visión artificial, el usuario del motorola edge S puede medir su frecuencia cardiaca mirando la cámara del teléfono. Las tecnologías de cámara con tecnología IA, como la tecnología de poca luz, mejoraron la experiencia de la cámara del motorola Edge S Pro y el moto g200 5G. </Palabras>
            <Palabras>Lenovo Research también desarrolló tecnologías de AR de vanguardia que potenciaron Lenovo Think Reality A3 Smart Glasses, que fue incluida entre las mejores invenciones de 2021 por la revista Time. Y también ha creado la Lenovo Edge Computing Platform (LECP) líder del sector y la ha implementado en varios sectores, incluidos campus corporativos, atención sanitaria y fabricación. Con todas sus tecnologías avanzadas, Lenovo Research ha desarrollado o habilitado muchas soluciones verticales inteligentes, especialmente en educación y fabricación.</Palabras>
            <LinkMas>Link - Más información</LinkMas>
            <a style={{fontSize:"0.8em"}} href='https://news.lenovo.com/pressroom/press-releases/lenovo-cto-elected-as-fellow-of-the-aaas/?lg=e
'>https://news.lenovo.com/pressroom/press-releases/lenovo-cto-elected-as-fellow-of-the-aaas/?lg=e
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

export default Articulo4

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