import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import {
  BackgroundContainer,
  H1,
  P,
  A,
  TextWrapper,
  LenWrapp,
  Img,
  BlogAd,
  CtaBlog,
  CtaButton,
  ProgBut,
  SiqCTA,
  Caldiv,
  Calendar,
  M,
  Y,
  D,
  CalBtn,
  WrapperDapper
} from "./Preview.Elements";

const Preview = () => {
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
    <BackgroundContainer className="form-content-right">
      <BackgroundWrapper>
        <WrapperDapper>
          <TextWrapper>
            <P>Se acerca el día Tech One.</P>
            <A>¡Te esperamos!</A>
            <SiqCTA>Si quieres saber más del evento</SiqCTA>
            <ProgBut href={"/programa/" + sessionStorage.getItem('email')}>Consulta nuestro programa</ProgBut>
          </TextWrapper>
          <Caldiv>
            <Calendar>
              <D>{semanaDia}</D>
              <H1>{date}</H1>
              <M>MARZO</M>
              <Y>2022</Y>
              <CalBtn href={ics} download>Añadir a mi Calendario</CalBtn>
            </Calendar>
          </Caldiv>
        </WrapperDapper>
        <LenWrapp>
          <Img src={'/logos.png'}></Img>
        </LenWrapp>
      </BackgroundWrapper>

      <BlogAd>
        <CtaBlog style={{fontFamily:"Montserrat"}}> Conoce más de Lenovo Tech One </CtaBlog>
        <CtaButton href="/blog" style={{fontFamily:"Montserrat"}}>Visita nuestro Blog</CtaButton>
      </BlogAd>
    </BackgroundContainer>
  );
};

export default Preview;

export const BackgroundWrapper = styled.div`
  background-position: top right -89px;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  background-size: 240px;
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (min-width: 648px){
    justify-content: center;
    background-size: 375px;
    background-position: top right -125px;
  }
`
