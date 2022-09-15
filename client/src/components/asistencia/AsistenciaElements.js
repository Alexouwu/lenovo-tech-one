import styled from "styled-components";
import fondoAsistencia from "../../utils/images/confirmacion-asistencia-bg.png";
import "../../utils/fonts/fonts.css";

export const Container = styled.div`
  width: 100%;
  height: autopx;
  text-align: center;
  @media screen and(max-width: 1000px) {
  }
`;

export const Confirmacion = styled.div`
  margin-right: auto;
  margin-left: auto;
  background-image: url(${fondoAsistencia});
  padding: 120px 0;
  max-width: 1200px;
  /* max-height: 370px; */
  /* height: auto; */
  margin: 120px auto 0 auto;
  @media screen and (max-width: 1090px) {
    /* padding-bottom: 0px; */
  }
  @media screen and (max-width: 648px){
    padding: 80px 0;
  }


`;

export const TextoConfirmacion = styled.h1`
  font-size: 69.2px;
  color: white;
  @media screen and (max-width: 1090px) {
    position: relative;
    top: -50px;
  }
  @media screen and (max-width: 683px) {
    position: relative;
    top: -80px;
  }

  @media screen and (max-width: 380px) {
    position: relative;
    top: -75px;
    font-size: 59.2px;
  }
`;

export const Mensaje = styled.div`
  padding: 60px 0;
  margin: 0 auto;
`;

export const TextoMensaje = styled.h2`
  font-size: 36px;
`;
