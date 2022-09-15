import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Head = styled.div`
  background: url(/ot-bg-pattern.svg);
  background-repeat: repeat;
  width: 100%;
  background-size: 320px;
  background-color:#222E33;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0px;
  @media (min-width: 648px ){
    background-size: 450px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 200px;
  height: auto;
  max-height: 250px;
  margin-right: 0px;
  display: flex;
  flex-direction: column;
  left: 100px;
  @media screen and (max-width: 500px) {
    display: none;
    order: 2
  }
`;

export const Img = styled.img`
  margin: 0px 0 0 0;
  padding-right: 0;
  max-width: 150px;
  @media screen and (max-width: 560px) {
    display: none;
  }
  width: 100%;
`;

export const Img2 = styled.img`
  /* width: auto; */
  /* height: 100px; */
  max-width: 150px;
  margin-top: 12px;
  padding-right: 0;
  width: 100%;
  @media screen and (max-width: 560px) {
    display: none;
  }
`;
//SE SACA DEL WRAPP
export const Img3 = styled.img`
  height: 60px;
  order: 1;
  @media screen and (min-width: 648px) {
    height: 100px;
  }
`;


export const FaWrap = styled.div`
  padding: 6px 22px;
  background-color: #222E33;
`;