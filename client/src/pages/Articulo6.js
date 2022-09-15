import React from 'react'
import styled from 'styled-components'
import FooterWebsite from '../components/footer/footer website/index';
import HeaderBlog from '../components/header/header2/HeaderBlog';

function Articulo6() {
  return (
    <>
        <HeaderBlog></HeaderBlog>
        <Wrapper>
            <ArtBody>

            <Balazo>Lenovo impulsa el acceso de los niños a la educación en Europa, Oriente Medio y África durante el Mes Global de Servicio</Balazo>
            <Arte src='/INNOVACION_ART_6_EDUCACION@2x.png'></Arte>

            <Palabras>En Lenovo, nos sentimos orgullosos de tener muchos empleados en nuestro negocio apasionados por empoderar a las comunidades subrepresentadas y fomentar un cambio positivo.</Palabras>
            <Palabras>Uno de esos individuos es Santiago Mendez Galvis, jefe de Filantropía de EMEA, quien dirigió el Mes Global de Servicio de este año, un esfuerzo anual de base que aboga por el voluntariado para alinearse con la misión de la Fundación Lenovo. </Palabras>
            <Palabras>“Central para nuestro propósito es proveer tecnología más inteligente para todos y la clave para esto es asegurar que los niños cuenten con la tecnología y las herramientas que necesitan para acceder a los servicios educativos”, comentó Santiago. “Así, el Mes Global de Servicio de este año fue una gran oportunidad para que nuestros equipos trabajaran estrechamente con las escuelas y centros educativos locales para proporcionarles una combinación de equipos, conocimiento y mano de obra para marcar la diferencia”. </Palabras>
            <Palabras>Hubo diversos proyectos inspiradores que tuvieron lugar en países como Uzbekistán, España, Eslovaquia, Arabia Saudita, Emiratos Árabes Unidos, Francia, Turquía, Kazajstán, Polonia y Hungría.</Palabras>
            <Palabras>“Iniciativas como nuestro Mes Global de Servicio son tan importantes para nuestro negocio, permitiéndonos interactuar con nuestras comunidades locales y tener un impacto positivo”, añadió Santiago.</Palabras>
            <LinkMas>Link - Más información</LinkMas>
            <a style={{fontSize:"0.8em"}} href='https://news.lenovo.com/boosts-childrens-access-to-education-across-europe-global-month-of-service/?lg=es
'>https://news.lenovo.com/boosts-childrens-access-to-education-across-europe-global-month-of-service/?lg=es
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

export default Articulo6

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