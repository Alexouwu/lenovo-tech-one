import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Head = styled.div`
  background: url(/header.svg);
  background-repeat: repeat;
  height: 225px;
  width: 100%;
  background-size: cover;
  background-color:#222E33;
`;

export const ImgWrap = styled.div`
  max-width: 200px;
  height: 100%;
  margin-right: 0px;
  position: absolute;
  left: 100px;
  @media screen and (max-widht: 500px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 0px 0 10px 0;
  ṕadding-right: 0;
  @media screen and (max-width: 560px) {
    display: none;
  }
`;

export const Img2 = styled.img`
  width: 92%;
  margin: 5px 0px 0px 10px;
  ṕadding-right: 0;
  @media screen and (max-width: 560px) {
    display: none;
  }
`;
//SE SACA DEL WRAPP
export const Img3 = styled.img`
  //margin: 0 0px 0px 550px;
  ṕadding-right: 0;
  //height: 90%;
  max-width: 210px;
  @media screen and (max-width: 900px) {
    position: absolute;
    left: 50%;
  }

  @media screen and (max-width: 860px) {
    display: none;
  }
  position: absolute;
  left: 35%;
`;

export const FaWrap = styled.div`
  max-width: 200px;
  padding: 10px 50px;
  margin-right: 0px;
  position: absolute;
  top: 45px;
  right: 50px;
  font-size: 40px;
  background-color: grey;
  @media screen and (max-width: 560px) {
    position: static;
    margin-right: auto;
    margin-left: auto;
  }
`;