import React from 'react'
import styled from 'styled-components'
import FooterWebsite from '../components/footer/footer website/index';
import HeaderBlog from '../components/header/header2/HeaderBlog';

function Articulo1() {
  return (
    <>
        <HeaderBlog></HeaderBlog>
        <Wrapper>
      
            <ArtBody>

            <Balazo>Alianza para el medio ambiente: DB Schenker y Lufthansa Cargo dan la bienvenida a Lenovo en sus vuelos neutros en CO2</Balazo>
            <Arte src='/INNOVACION_ART_1_LUFTHANSA@2x.png'></Arte>

            <Palabras>El proveedor mundial de tecnología Lenovo se une a DB Schenker y Lufthansa Cargo en su camino hacia una cadena de suministro más ecológica: enviando 20 toneladas de peso facturable por semana desde Shanghái (PVG) a Frankfurt (FRA). Los productos Lenovo transportados en estos vuelos semanales incluyen laptops y PC tanto para consumidores como para clientes empresariales.</Palabras>
            <Palabras>El vuelo de carga con emisiones de carbono neutro es la única conexión regular de vuelos chárter a nivel mundial que está cubierto en un 100% con combustible de aviación sostenible (SAF). El SAF se produce a partir de materias primas renovables de desechos y residuos, como aceites de cocina reutilizados. </Palabras>
            <Palabras>Gareth Davies, director de Logística Global de Lenovo: “La sostenibilidad es fundamental para nuestro negocio y nuestra misión de ofrecer tecnología más inteligente para todos. Estamos orgullosos de mejorar aún más nuestras soluciones a través de esta colaboración”. </Palabras>
            <Palabras>DB Schenker y Lufthansa Cargo establecieron en abril de 2021 la primera conexión regular de carga aérea con cobertura SAF entre Frankfurt y Shanghái. El CO2 liberado durante la combustión en el motor no es más que el CO2 eliminado de la atmósfera durante la fase de fotosíntesis de las plantas que se utilizaron para producir los aceites de los que se refina el SAF. </Palabras>
            <Palabras>Al optar por esta modalidad de transporte basado en SAF, Lenovo ahorra alrededor de 20 toneladas de queroseno convencional por vuelo y, por lo tanto, 62 toneladas de gases de efecto invernadero (CO2e Well-to-Wheel) semanalmente. Además, las cerca de 16 toneladas de CO2e resultantes de la producción y el transporte del SAF (emisiones previas) se contrarrestan con medidas de compensación. En conjunto, se logra la neutralidad total del carbono.</Palabras>
            
            <LinkMas>Link - Más información</LinkMas>
            <a style={{fontSize:"1em"}} href='https://news.lenovo.com/pressroom/press-releases/db-schenker-lufthansa-cargo-welcome-lenovo-co2-neutral-flights/?lg=es
'>https://news.lenovo.com/pressroom/press-releases/db-schenker-lufthansa-cargo-welcome-lenovo-co2-neutral-flights/?lg=es
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

export default Articulo1

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