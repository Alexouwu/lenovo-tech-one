import styled from "styled-components";

export const Cont = styled.div`
  background-color: red;
  margin: 40px 5%;
  display: grid;
  height: 375px;
  background: rgb(156, 61, 172);
  background: linear-gradient(
    90deg,
    rgba(156, 61, 172, 1) 8%,
    rgba(253, 118, 45, 1) 92%
  );
  @media screen and (max-width: 1500px) {
    height: auto;
  }
`;

export const FrameRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  /*Pa mover*/
  //margin-right: 380px;
  //margin-top: 80px;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  height: 100%;

  @media screen and (max-width: 1500px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    margin-right: 0;
    margin-top: 0; /*SOLUCIONES HECHIZAS*/
  }
`;

export const FrameRow2 = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  /*Pa mover*/
  //margin-right: 380px;
  //margin-top: 80px;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  height: 50%;

  @media screen and (max-width: 1500px) {
    height: 100px;
  }
`;

export const Column1 = styled.div`
  height: 100%;
  margin-bottom: 0px;
  padding: 0 0px;
  grid-area: col1;
  //margin-top: -200px; /*SOLUCION IWAL MEDIO HECHIZA*/
  @media screen and (max-width: 1500px) {
    margin-top: 0; /*SOLUCION IWAL MEDIO HECHIZA*/
  }
`;

export const Column2 = styled.div`
  height: 100%;
  margin-bottom: 0px;
  padding: 0 0px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 0px;
  margin-top: 7%;
  margin-left: 3%;

  /*margin-top: -50px; SOLUCION HECHIZA*/
`;

export const TextWrapperSub = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 0px;
  margin-left: 3%;

  /*margin-top: -50px; SOLUCION HECHIZA*/
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 60px;
  line-height: 1.1;
  font-weight: 500;
  color: #f7f8fa;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  /*max_width: 440px;*/
  //width: 130%;
  //margin-bottom: 35px;
  font-size: 22px;
  line-height: 24px;
  color: #ffff;
  @media screen and (max-width: 1500px) {
    width: auto;
  } /*era 480px*/
`;

export const TextWrapperCenter = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 0px;
  margin-top: 20%;
  //margin-left:40%;
  font-size: 40px;
  text-align: center;
  color: #ffff;
  /*margin-top: -50px; SOLUCION HECHIZA*/
  @media screen and (max-width: 1500px) {
    margin-top: auto;
    padding: 25px 0;
  } /*era 480px*/
`;

export const DestacadoContainer = styled.div`
  //background-color: red;
  margin: 90px 5%;
  display: grid;
  height: 700px;

  @media screen and (max-width: 1500px) {
    //height: auto;
  }
`;

export const DestacadoGray = styled.div`
  background-color: #cccc;
  height: 100%;
  display: grid;
`;

export const DestacadoWhite = styled.div`
  background-color: #fffc;
  height: 100%;
  display: grid;
`;

export const DestacadoContenido = styled.div`
  display: grid;
`;

export const TextWrapperDestacado = styled.div`
  max-width: 540px;
  width: 50%;
  padding-top: 0;
  padding-bottom: 0px;
  margin-top: 7%;
  margin-left: 4%;

  /*margin-top: -50px; SOLUCION HECHIZA*/
`;

export const TextoDestacado = styled.p`
margin-rigth: 80px;
font-size: 28px;
line-height: 1.1;
font-weight: 500;
color: #06060;

@media screen and (max-width: 480px) {
  font-size: 32px;
`;

export const TextWrapperDescripcion = styled.div`
  //max-width: 540px;
  width: 150%;
  height: 100%;
  padding-top: 0;
  padding-bottom: 0px;
  margin-top: 0%;
  margin-left: 4%;

  /*margin-top: -50px; SOLUCION HECHIZA*/
`;

export const ImgWrap = styled.div`
  //max-width: 200px;
  height: 100%;
  width: 100%;
  margin-right: 0px;
  text-align: right;
`;

export const Img = styled.img`
  height: 150px;
  width: 250px;
  margin-top: 7%;
  margin-right: 7%;
  ṕadding-right: 0;
  align: right;
`;

