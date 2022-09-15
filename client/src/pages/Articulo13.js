import React from 'react'
import styled from 'styled-components'
import FooterWebsite from '../components/footer/footer website/index';
import HeaderBlog from '../components/header/header2/HeaderBlog';

function Articulo13() {
  return (
    <>
        <HeaderBlog></HeaderBlog>
        <Wrapper>
            <ArtBody>

            <Balazo>
            Lenovo Legion galardonada como la Mejor Comunidad Nueva en los Community Industry Awards 2022
            </Balazo>
            <Arte src='/CATALOGO_ART_13_COMMUNITYAWRDS.png'></Arte>

            <Palabras>En menos de un año desde su creación, la comunidad Legion de Lenovo ha crecido a más de 63.000 miembros, quienes han dedicado un total combinado de 78 millones de minutos en línea </Palabras>
            <Palabras>La Comunidad Lenovo Legion en la región EMEA ha ganado el premio a la Mejor Comunidad Nueva en los Community Industry Awards 2022 de CMX, entre más de 182 comunidades que estaban nominadas a nivel mundial. Estos premios destacan a las personas y comunidades que están teniendo impacto en la industria, marcando la diferencia y construyendo espacios increíbles para sus miembros.</Palabras>
            <Palabras>La Comunidad Legion EMEA ha crecido significativamente desde su lanzamiento en marzo de 2021, y ahora sirve a las comunidades de Oriente Medio, los países nórdicos, Italia, España, Francia, Polonia y Rusia.  Asimismo, la Comunidad Legion es la primera comunidad de marcas de gaming en el mundo que opera en idioma árabe.</Palabras>
            <Palabras>Alberto Spinelli, director de marketing para EMEA de Lenovo, comenta: “Este premio es un logro fantástico para la Comunidad Legion de EMEA, un pilar clave de nuestro apoyo a la marca Legion y sus fieles seguidores.  Nos ha permitido establecer una conexión real con nuestros clientes y mejorar la experiencia Legion, ofreciendo contenidos atractivos y un espacio común para disfrutar de los juegos.  Trascendiendo las fronteras, esperamos un futuro brillante para esta vibrante comunidad”.</Palabras>
            <Palabras>Para más información sobre la Comunidad Legion de EMEA, visita <a href='https://gaming.lenovo.com/emea/'>https://gaming.lenovo.com/emea/</a></Palabras>
            
            <LinkMas>Link - Más información</LinkMas>
            <a style={{fontSize:"0.8em"}} href='https://gaming.lenovo.com/emea/
'>https://gaming.lenovo.com/emea/
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

export default Articulo13

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