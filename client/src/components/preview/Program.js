import axios from "axios";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BackgroundContainer,
  BlogAd,
  CtaBlog,
  CtaButton,
  Caldiv,
  D,
  H1,
  M,
  Y,
  CalBtn,
  Calendar,
  Horario,
  Banner,
  R,
  N,
  LenWrapp,
  Img,
  AgT,
  H1Pr1, H1Pr2, H1Pr3, H1Pr4, H1Pr5, H1Pr6, H1Pr7
} from "./Preview.Elements";

function Program() {
  const { email } = useParams()
  const [date, setDate] = useState()
  const [semanaDia, setSemanaDia] = useState()
  const [ICAL, setICAL] = useState('')
  const ics = `/LenovoTechOne${ICAL}.ics`


  useEffect(() => {
    const reqDate = async () => {
      try {
        const res = await axios.post('https://beemexico.com/lenovo-event/getDate',
          {
            values: { email }
          })
        setDate(res.data.dia)
        setSemanaDia(res.data.diaSemana)
        if (res.data.dia == 24) { setICAL('2') }
      } catch (error) {
        console.log(error);
      }
    };

    if (!date) reqDate()
  }, [date]);
  return (
    <BackgroundContainer>
      <BackgroundWrapper>
        <AgT>AGENDA LENOVO TECH ONE</AgT>
        <Wrapper>

          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <div style={{ width: "45%", textAlign: "end" }}>
              <Horario style={{ marginTop: "1.6em", marginRight: "1em" }}>16:00-16:35</Horario>
              <Horario style={{ marginTop: "3.5em", marginRight: "1em" }}>16:35-16:40</Horario>
              <Horario style={{ marginTop: "3.3em", marginRight: "1em" }}>16:40-17:00</Horario>
              <Horario style={{ marginTop: "7.3em", marginRight: "1em" }}>17:00-17:30</Horario>
              <Horario style={{ marginTop: "4.7em", marginRight: "1em" }}>17:30-18:10</Horario>
              <Horario style={{ marginTop: "4.7em", marginRight: "1em" }}>18:10-18:30</Horario>
              <Horario style={{ marginTop: "3.4em", marginRight: "1em" }}>18:30-20:00</Horario>
            </div>
            <div>
              <Banner src="/Banner.png"></Banner>
            </div>
            <div>
              <H1Pr1>Registro y Pruebas Covid</H1Pr1>
              <H1Pr2>Host Bienvenida</H1Pr2>
              <H1Pr3 >Lenovo Tech One Visión 2022</H1Pr3>
              <div style={{ marginLeft: "0.8em" }}>
                <R><N>Marco Jiménez.</N>Executive Director & General Manager Lenovo Mexico</R>
                <R><N>Ricardo Galicia.</N> Country Manager Infrastructure Solutions Group</R>
                <R><N>Rodrigo Díaz.</N> Director de Marketing Motorola</R>
              </div>
              <H1Pr4>Smarter Technology for the next reality</H1Pr4>
              <div style={{ marginLeft: "0.8em" }}>
                <R><N>Carlos San Román.</N> Brand Manager Lenovo México</R>
              </div>
              <H1Pr5>Keynote speaker</H1Pr5>
              <div style={{ marginLeft: "0.8em" }}>
                <R><N>Marcus Dantus</N></R>
              </div>
              <H1Pr6>Q&A Tech One</H1Pr6>
              <H1Pr7>Networking</H1Pr7>
            </div>
          </div>
          
        </Wrapper>
        <Caldiv style={{ width: "auto", marginBottom: ".09em" }}>
          <Calendar>
            <D>{semanaDia}</D>
            <H1>{date}</H1>
            <M>MARZO</M>
            <Y>2022</Y>
            <CalBtn href={ics} download>Añadir a mi Calendario</CalBtn>
          </Calendar>
        </Caldiv>

      </BackgroundWrapper>
      <BlogAd>
          <CtaBlog style={{ marginBottom: "1.2em", fontFamily: "Montserrat" }}> Conoce más de Lenovo Tech One </CtaBlog>
          <CtaButton href="/blog" style={{ fontFamily: "Montserrat", flexBasis: "200" }}>Visita nuestro Blog</CtaButton>
        </BlogAd>
      <LenWrapp>
        <Img src={'/logos.png'}></Img>
      </LenWrapp>
    </BackgroundContainer>
  )
}

export default Program

const Wrapper = styled.div`
  width: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  flex-direction: row;
  margin-top: 2em;
  margin-bottom: 5em;
  @media screen and (min-width:280px) and (max-width:320px) {
    margin-bottom: 0em;
  }
  @media screen and (max-width: 1000px){
    flex-direction: column;
  }`

export const BackgroundWrapper = styled.div`
  background-position: top right -89px;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  background-size: 240px;
  flex: 1;
  display: flex;
  flex-direction: column;

`