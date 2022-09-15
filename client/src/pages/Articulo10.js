import React from 'react'
import styled from 'styled-components'
import FooterWebsite from '../components/footer/footer website/index';
import HeaderBlog from '../components/header/header2/HeaderBlog';

function Articulo10() {
  return (
    <>
        <HeaderBlog></HeaderBlog>
        <Wrapper>
            <ArtBody>

            <Balazo>Inter Lenovo – la sinergia entre tecnología y deportes</Balazo>
            <Arte src='/INNOVACION_ART_10_INTER_LENOVO@2x.png'></Arte>

            <Palabras>Cuando tecnología y deporte se unen para impulsarse mutuamente hacia adelante, es cuando ocurre la verdadera “magia”. </Palabras>
            <Palabras>“Habiendo crecido en una familia hincha del Inter, trabajar con un club tan único es realmente emocionante”, dice Davide Bacchiorini, gerente de cuentas de ventas de Lenovo.  “No sólo tenemos vínculos profesionales, sino también personales con el Inter.  Esta pasión, que une a Inter y Lenovo, nos impulsa a mí y a mi equipo a superar y sobresalir en nuestro trabajo con Inter”. </Palabras>
            <Palabras>Esta reunión de mentes es profunda.  A medida que la tecnología se ha desarrollado y se ha vuelto más sofisticada, la combinación del rendimiento deportivo y el análisis de datos se ha convertido en la receta de la excelencia. Lo que plantea la pregunta:  Si todos los equipos de mejor rendimiento utilizan datos para sobresalir, ¿cómo te destacas de tus competidores? </Palabras>
            <Palabras>Las dos partes se conectaron por primera vez cuando Inter buscaba un socio tecnológico, con una visión específica de mejorar la participación de los aficionados, especialmente aquellos que se encuentran más lejos.  Plenamente consciente de su papel como una marca de fútbol reconocida y apreciada internacionalmente, Inter reconoció la necesidad de actualizar su base tecnológica para conectarse con los principales aficionados de todo el mundo, independientemente de la zona horaria o la ubicación. </Palabras>
            <Palabras>Lenovo no sólo proporcionó la tecnología y la experiencia necesarias para hacer frente al reto, sino que también reconoció que este deseo de conectarse con las personas reflejaba su propio impulso para ser un conducto de conectividad humana. Por eso, los técnicos especializados de Lenovo trabajaron aprovechando la tecnología más inteligente por la que es reconocida la empresa.  Desde servidores y almacenamiento hasta laptops y tablets, Inter utiliza actualmente casi 600 productos Lenovo en cada aspecto de sus operaciones.</Palabras>
            <LinkMas>Link - Más información</LinkMas>
            <a style={{fontSize:"0.8em"}} href='https://news.lenovo.com/inter-lenovo-how-technology-and-sports-harmonize/?lg=es
'>https://news.lenovo.com/inter-lenovo-how-technology-and-sports-harmonize/?lg=es
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

export default Articulo10

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