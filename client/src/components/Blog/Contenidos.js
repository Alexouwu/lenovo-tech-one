import React from 'react'
import styled from "styled-components";

function Contenidos() {
  return (
    <Wrapper>

        <div style={{minWidth: "25em", height: "22em",backgroundImage:"url(/HOME_CONTENIDOS.png)", backgroundSize:"cover",
                        color: "white", padding: "3.5em 2em"}}>
                            <h1 style={{fontFamily:"Montserrat",fontSize:"1.7em"}}>Contenidos</h1>
                            <p style={{marginTop:"0.5em"}}>Descarga la variedad de archivos multimedia que tenemos para ti y conoce más de Lenovo Tech One.</p>
            </div>

            <div style={{minWidth: "25em", height: "22em", color:"white", display:'flex', flexDirection:"row"}}>
                
                <div style={{flexDirection:"column"}}>
                    <div style={{display:"flex", minWidth:"12.5em", height:"11em",backgroundImage:"url(/HOME_CATALOGO.png)",backgroundSize:"cover", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
                    <a href="contenidos/catalogo" style={{textDecoration:"none", color:"white"}}><h2 style={{display:"flex",fontFamily:"Montserrat",fontSize:"1.7em"}}>Catálogo</h2></a>
                    </div>
                    <div style={{display:"flex", minWidth:"12.5em", height:"11em", backgroundImage:"url(/HOME_INOVACION.png)",backgroundSize:"cover", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
                        <a href="contenidos/innovacion" style={{textDecoration:"none", color:"white"}}><h2 style={{display:"flex",fontFamily:"Montserrat",fontSize:"1.7em"}}>Innovación</h2></a>
                    </div>
            </div>

                <div style={{flexDirection:"column"}} >

                    <div style={{display:"flex", minWidth:"12.5em", height:"11em", backgroundImage:"url(/HOME_EVENTO.png)",backgroundSize:"cover", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
                        <a href="contenidos/evento" style={{textDecoration:"none", color:"white"}}><h2 style={{display:"flex",fontFamily:"Montserrat",fontSize:"1.7em"}}>Evento</h2></a>
                    </div>

                    <div style={{display:"flex", minWidth:"12.5em", height:"11em", backgroundImage:"url(/HOME_SOLUCIONES.png)",backgroundSize:"cover", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
                        <a href="contenidos/soluciones" style={{textDecoration:"none", color:"white"}}><h2 style={{display:"flex",fontFamily:"Montserrat",fontSize:"1.7em"}}>Soluciones</h2></a>
                    </div>

                </div>
            </div>
        
    </Wrapper>
  )
}

export default Contenidos

const Wrapper = styled.div`
  width: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  flex-direction: row;
  margin-top: 2em;
  margin-bottom: 5em;
  @media screen and (max-width: 1000px){
    flex-direction: column;
  }`