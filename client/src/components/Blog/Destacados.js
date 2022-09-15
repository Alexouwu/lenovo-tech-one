import React from 'react'
import styled from "styled-components";

function Destacados() {
  return (
    <div>
        <Wrapper>
            <div style={{display:'flex', maxwidth:"60em", marginBottom:'1em'}}>
            <h1 style={{alignSelf:'flex-start', fontFamily: 'Montserrat', fontSize:"1.5em"}}>Destacados</h1>
            </div>
            <ArtCont>
                <div style={{flexDirection:"column"}}>
                    <Art style={{backgroundColor: "#E5E5E5"}}>
                    <ArtH1Img>
                        <H2T>Alianza para el medio ambiente:</H2T>
                        <img style={{maxwidth: '19em',height: '6em', margin:'1em 2em 1em'}} src='/INNOVACION_ART_1_LUFTHANSA.png'></img>
                    </ArtH1Img>
                    <p>El proveedor mundial de tecnología Lenovo se une a DB Schenker y Lufthansa Cargo en su camino hacia una cadena de suministro más ecológico<a href='/contenidos/innovacion/articulo1'>[...]</a></p>
                    </Art>
                    <Art>
                    <ArtH1Img>
                        <H2T>Lenovo es reconocida como una de las...</H2T>
                        <img style={{maxwidth: '19em',height: '6em', margin:'1em 2em 1em'}} src='/INNOVACION_ART_2_SOSTENIBLE.png'></img>
                    </ArtH1Img>
                    <p>Lenovo ha sido reconocida como una de las 100 empresas más sostenibles del mundo 2022 por Corporate Knights, por tercer año consecutivo<a href='/contenidos/innovacion/articulo2'>[...]</a></p>
                    </Art>
                </div>
                    <div style={{flexDirection:"column"}}>
                    <Art>
                    <ArtH1Img>
                        <H2T>Lenovo consigue por 5º año consecutivo...</H2T>
                        <img style={{maxwidth: '19em',height: '6em', margin:'1em 2em 1em'}} src='/INNOVACION_ART_3_IGUALDAD.png'></img>
                    </ArtH1Img>
                    <p>Lenovo anunció el 27 de enero de 2022 que por quinto año consecutivo, la Fundación de la Campaña de Derechos Humanos (HRC) otorgó a la empresa una calificación perfecta de 100<a href='/contenidos/innovacion/articulo3'>[...]</a></p>
                    </Art>
                    <Art  style={{backgroundColor: "#E5E5E5"}}>
                    <ArtH1Img>
                        <H2T>El Dr. Yong Rui, director de tecnología...</H2T>
                        <img style={{height: '6em', margin:'1em 2em 1em'}}src='/INNOVACION_ART_4_DR_YONG.png'></img>
                    </ArtH1Img>
                    <p>El Dr. Yong Rui, director general de tecnología de Lenovo, ha sido electo becario de la Asociación Estadounidense para el Avance de la Ciencia (AAAS), la mayor sociedad científica general del mundo, y<a href='/contenidos/innovacion/articulo4'>[...]</a></p>
                    </Art>
                </div>
            </ArtCont>
        </Wrapper>
    </div>
  )
}

export default Destacados


const Art = styled.div`
    display: flex;
    flex-direction: column;
    height: 18em;
    padding: 18px 30px;
    justify-content:space-around;
    @media screen  and (min-width: 400px){
        flex-direction: column;
        width: 28em;
        padding: 10px 0px;
    } 

    @media screen  and  (min-width: 900px) {
        flex-direction: column;
        width: 30em;
        padding:    10px 20px;
    }    
`

const ArtH1Img = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    @media screen and (max-width: 1000px){
    }    
`


const ArtCont = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1000px){
        flex-direction: column;
    }    
`


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  flex-direction: column;
  margin-bottom: 5em;
  @media screen and (max-width: 1000px){
  }`

  const H2T = styled.h2`
    font-family: "Montserrat";
    font-size: 1.3em;
  `