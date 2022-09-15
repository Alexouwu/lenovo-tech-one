import React, { useEffect, useState } from "react";
import {
  Container,
  Confirmacion,
  TextoConfirmacion,
  Mensaje,
  TextoMensaje,
} from "./AsistenciaElements";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import styled from "styled-components";



const Asistencia = () => {
  let {email}= useParams();
  const [horario, setHorario]=useState('8 de febrero')
  
  const fetchData=async()=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({values:{email:`${email}`}})
    };
    fetch("https://beemexico.com/lenovo-event/getDate", requestOptions)
      .then(async (response)=>{
        try {
          const data = await response.json();
            setHorario(data.fecha)
          return data;
        } catch (error) {
          console.log(error.message);
        }
      })
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
      <Container className="asistencia" style={{flex: 1}}>
        <Confirmacion>
          <ConfirmationText>
            ¡Gracias por confirmar tu asistencia!
            {/* ¡Gracias por registrarte a Lenovo Tech ONE MX! */}
          </ConfirmationText>
          <TextoConfirmacion></TextoConfirmacion>
        </Confirmacion>
        <Mensaje style={{maxWidth: 1200}}>
          <MessageText>
            Te esperamos el día <span style={{fontWeight:"bold"}}>{horario} de 2022</span> para vivir la experiencia Tech One.
            {/* Quédate pendiente de tu correo porque en las próximas horas recibirás un mail de confirmación con el código QR que deberás presentar al ingreso del evento. */}
          </MessageText>
          <MessageText>
            No olvides <span style={{fontWeight:"bold"}}>traer tu código QR</span> ya que será tu pase de acceso
          </MessageText>
        </Mensaje>
      </Container>
    </>
  );
};

export default Asistencia;

const ConfirmationText = styled.div`
  color: white;
  font-weight: bold;
  font-size: 14px;
  font-size: 3.7vw;
  margin: 0px 12px;
  @media (min-width: 1200px) {
    font-size: 40px;
  }
`

const MessageText = styled.p`
  font-size: 16px;

  padding: 6px 12px;
  @media (min-width: 700px){
    font-size: 24px;
  }

  @media (min-width: 1200px) {
    font-size: 28px;
  }
`