import React from 'react'
import styled from 'styled-components'
import FooterWebsite from '../components/footer/footer website/index';
import HeaderBlog from '../components/header/header2/HeaderBlog';

function Articulo12() {
  return (
    <>
        <HeaderBlog></HeaderBlog>
        <Wrapper>
            <ArtBody>

            <Balazo>Lenovo presenta TruScale HPC as a Service</Balazo>
            <Arte src='/SOLUCIONES_ART_12_TRUSCALE.png'></Arte>

            <Palabras>El 26 de enero de 2022 en <a href='https://www.lenovo.com/winterstock'>Winterstock</a> su evento, Lenovo (HKSE: 992) (ADR: LNVGY) presentó Lenovo TruScale™ High Performance Computing as a Service (HPCaaS), ofreciendo la potencia de la supercomputación a organizaciones de todos los tamaños a través de una experiencia similar a la nube. La nueva oferta de informática de alto rendimiento (HPC) as-a-service (aaS) amplía la cartera de productos TruScale de Lenovo <a href='https://news.lenovo.com/pressroom/press-releases/global-everything-as-a-service-strategy/'>everything as–a–service</a> y permite a los clientes de HPC acceder a mayores recursos de supercomputación.</Palabras>
            <Palabras><a href='https://techtoday.lenovo.com/us/en/truscale'>Lenovo TruScale</a> ofrece a las organizaciones de todos los tamaños la flexibilidad que necesitan para mantenerse competitivas con soluciones escalables de extremo a extremo  y opciones de pago predecibles para hardware y servicio. La plataforma sencilla e integral permite a las organizaciones maximizar el retorno de la inversión y acelerar el tiempo de creación de valor. TruScale for HPC ofrece a los clientes la flexibilidad necesaria para añadir recursos aprovisionados rápidamente, sin verse obstaculizados por retrasos en la adquisición o interrupciones en la cadena de suministro. </Palabras>
            <Palabras>Con Lenovo TruScale HPCaaS, los clientes disponen de vastas capacidades para ampliar sus requisitos de supercomputación según sea necesario. Los clientes pueden: </Palabras>
            <Palabras>
              <ul>
                <li>Pagar por lo que consumen sin costos ocultos </li>
                <li>Escalar fácilmente los clústeres HPC eliminando las limitaciones de recursos </li>
                <li>Ejecutar aplicaciones a escala sin cuellos de botella en la arquitectura </li>
                <li>Traducir las inversiones de capital en gastos operacionales, evitando ciclos presupuestarios largos e intensivos y retrasos en las adquisiciones </li>
                <li>Gestionar presupuestos y visualizar el consumo y la facturación a través del portal TruScale de Lenovo </li>
                <li>Acceder a hardware especializado </li>
              </ul>
            </Palabras>
            <h1 style={{fontSize:"0.9em", fontFamily:"Gotham-Bold, sans-serif"}}>Mayor protección y seguridad</h1>
            <Palabras>Lenovo TruScale HPCaaS ofrece altos niveles de control y seguridad. La capacidad HPC en las instalaciones proporciona un acceso sin problemas y protegido a los datos sin ningún cambio en los scripts de trabajo ni riesgos potenciales asociados con la exposición a la nube pública. Los profesionales dedicados de Lenovo garantizan la seguridad de los datos desde la instalación hasta su utilización y mediante el desmantelamiento. Estas funciones se incluyen en una oferta muy rentable, sin gastos de salida de datos ni de entrada asociados al uso. En combinación con la flexibilidad y agilidad que TruScale ofrece, los clientes pueden aprovechar todo el potencial de sus datos. 
            </Palabras>
            <Palabras>Como líder mundial en informática de alto rendimiento, Lenovo está trabajando estrechamente con socios clave del sector para desarrollar, integrar e implementar las tecnologías que ofrecen informática a nivel de exaescala a organizaciones de todos los tamaños, o lo que Lenovo denomina Exascale to Everyscale™. Con el nuevo Lenovo TruScale™ HPCaaS, cualquier organización puede tener acceso inmediato a informática, almacenamiento y aceleración adicionales con más recursos de HPC disponibles bajo demanda. </Palabras>
            <Palabras>Obtén más información sobre la oferta de HPCaaS en <a href='https://pages.lenovo.com/Winterstock2022-Register.html'>Lenovo Winterstock 22.</a></Palabras>
            <LinkMas>Link - Más información</LinkMas>
            <a style={{fontSize:"0.8em"}} href='https://news.lenovo.com/pressroom/press-releases/lenovo-unveils-truscale-hpc-as-a-service/?lg=es
'>https://news.lenovo.com/pressroom/press-releases/lenovo-unveils-truscale-hpc-as-a-service/?lg=es
</a>
            </ArtBody>
            <RecentArt>
                <h2 style={{fontFamily:"Gotham",fontSize:"1em"}}>Entradas recientes</h2>
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

export default Articulo12

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