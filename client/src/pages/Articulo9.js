import React from 'react'
import styled from 'styled-components'
import FooterWebsite from '../components/footer/footer website/index';
import HeaderBlog from '../components/header/header2/HeaderBlog';

function Articulo9() {
  return (
    <>
        <HeaderBlog></HeaderBlog>
        <Wrapper>
            <ArtBody>

            <Balazo>Ducati Lenovo Team: cuando la tecnología significa velocidad</Balazo>
            <Arte src='/INNOVACION_ART_9_DUCATI_TEAM@2x.png'></Arte>
            <Palabras>En el cambiante mundo del automovilismo, Ducati está siempre a la vanguardia y aprovecha las tecnologías avanzadas de Lenovo para tener éxito y liderar la innovación en MotoGP</Palabras>
            <Palabras>“La tecnología es cada vez más un factor diferenciador en el mundo de las carreras, y gracias a nuestra asociación con Lenovo, hemos podido cambiar la forma en que se diseñan las propias motocicletas.  Lenovo representa a nuestro compañero de viaje ideal, compartiendo nuestro compromiso con el rendimiento, logrando resultados e innovación, centrándose en la increíble combinación de ingenio humano y tecnologías avanzadas”. – Luigi Dall’Igna, director general de Ducati Corse </Palabras>
            <Palabras>A partir de la temporada 2018, Ducati decidió confiar en Lenovo como su principal socio tecnológico, aprovechando las soluciones de PC, tablets y servidores de la empresa tanto en la pista como en sus oficinas centrales.  También colaboraron con los expertos de Lenovo en el campo de la I+D, con el objetivo de acelerar el progreso del equipo y lograr un mejor rendimiento. </Palabras>
            <Palabras>Confirmando el compromiso conjunto con la innovación en la industria del automovilismo, a principios de la temporada de carreras de 2021, Ducati y Lenovo anunciaron una nueva asociación, que estableció el nuevo “Ducati Lenovo Team”, haciendo de Lenovo el Socio Oficial del Equipo Ducati MotoGP.  Las dos marcas también fortalecieron su asociación tecnológica, centrándose en el análisis de datos, la inteligencia artificial (IA) y las soluciones de software inteligente. </Palabras>
            <Palabras>“Las tecnologías que ofrece Lenovo son fáciles y fiables y han cambiado significativamente nuestros procesos de trabajo. El nuevo apoyo tecnológico ha abierto nuevos horizontes y formas de trabajar. Un ejemplo es el Remote Garage, que permite al equipo trabajar juntos en cualquier momento y en tiempo real, incluso a kilómetros de distancia. Además, el aumento de la potencia informática nos ha permitido obtener información valiosa más rápidamente, lo que nos permite tomar decisiones estratégicas en menos tiempo En el mundo de los deportes de motor, nunca hay suficiente potencia y, hoy en día, lo mismo también se aplica cada vez más a la potencia informática”, añadió Dall’Igna.</Palabras>
            
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

export default Articulo9

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