import React from 'react'
import styled from 'styled-components'
import FooterWebsite from '../components/footer/footer website/index';
import HeaderBlog from '../components/header/header2/HeaderBlog';

function Articulo11() {
  return (
    <>
        <HeaderBlog></HeaderBlog>
        <Wrapper>
            <ArtBody>

            <Balazo>Las soluciones para educación de Lenovo ofrecen herramientas de aprendizaje ágiles</Balazo>
            <Arte src='/SOLUCIONES_ART_11_AGILES.png'></Arte>

            <Palabras>Lenovo anunció hoy nuevas incorporaciones a su amplia cartera educativa, diseñada para mejorar la eficiencia del aprendizaje en una nueva era de educación. Los nuevos dispositivos se han diseñado específicamente para satisfacer las necesidades de la formación moderna en persona y a distancia.</Palabras>
            <h1 style={{fontSize:"0.9em", fontFamily:"Gotham-Bold, sans-serif"}}> La cartera integral mejora la experiencia educativa</h1>
            <Palabras>La nueva Lenovo 10w Tablet con Windows 11 está equipada con la plataforma informática Snapdragon 7c para ofrecer una experiencia informática siempre activa y siempre conectada, equilibrando la potencia y el rendimiento que esperan los estudiantes y las experiencias informáticas móviles que necesitan para ayudarlos a alcanzar el éxito en el aprendizaje modernizado.</Palabras>
            <Palabras>La nueva Lenovo 13w Yoga ofrece la flexibilidad de un dispositivo convertible con los procesadores AMD Ryzen™ 5000 U-Series para portátiles hasta un procesador AMD Ryzen 7, y puede incluir opciones para impulsar la participación de profesores y estudiantes, la protección de dispositivos y la conectividad mejorada. </Palabras>
            <h1 style={{fontSize:"0.9em", fontFamily:"Gotham-Bold, sans-serif"}}>Seguridad digital más inteligente para todos</h1>
            <Palabras>Para ayudar a las escuelas a proteger mejor a sus estudiantes, Lenovo también anuncia su nueva solución de filtrado de contenido y seguridad en línea, <a href='http://techtoday.lenovo.com/ww/en/netfilter'>Lenovo NetFilter.</a> Un programa de seguridad digital 2 en 1, proporciona soluciones de filtrado web y protección contra amenazas basadas en la nube y controladas por IA a un precio asequible para las escuelas. Con Lenovo NetFilter instalado, las redes escolares están mejor protegidas contra virus, ciberataques, spyware, phishing y otros peligros digitales.</Palabras>
            <h1 style={{fontSize:"0.9em", fontFamily:"Gotham-Bold, sans-serif"}}>Soluciones integrales orientadas a la educación</h1>
            <Palabras>Lenovo cuenta con las herramientas y la experiencia necesarias para ayudar a las instituciones educativas y a los estudiantes de todo el mundo a adoptar el futuro del aprendizaje transformado digitalmente. Lenovo y VictoryXR se han asociado para lanzar una iniciativa global que ofrezca experiencias de aprendizaje en el aula alineadas con el currículo en realidad virtual. Utilizando VR Classroom de Lenovo y el galardonado contenido de VictoryXR, los estudiantes tendrán acceso a más de 60 títulos VR centrados en la ciencia, la historia y la carrera y la educación técnica (CTE). </Palabras>
            
            <LinkMas>Link - Más información</LinkMas>
            <a style={{fontSize:"0.8em"}} href='https://news.lenovo.com/pressroom/press-releases/lenovo-education-solutions-deliver-agile-learning-tools/?lg=es
'>https://news.lenovo.com/pressroom/press-releases/lenovo-education-solutions-deliver-agile-learning-tools/?lg=es
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

export default Articulo11

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