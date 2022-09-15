import styled from "styled-components";

import "../../utils/fonts/fonts.css";

export const BackgroundContainer = styled.div`
  background: url('/ot-bg-pattern.svg');
  background-size: 240px;
  background-position: top right -88.5px;
  background-repeat: repeat;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  @media (max-width:648px){
    justify-content: flex-start;
  }
  @media (min-width: 648px){
    background-size: 375px;
    background-position: top right -125px;
  }
`;

export const Form = styled.form`
z-index: 0;
  margin-top: 15px;
  text-align: center;
  justify-content: center; // centers in the flex direction and the default flex-direction is row
  align-items: center;
`;

export const MegaDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MegaDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: right;
  align-items: flex-end;
  margin-top: 20px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 350px;
  align-items: flex-start;
`;

export const InputWrapper = styled.div`
  display: block;
  flex-direction: inline-block;
  text-align: center;
  padding-bottom: 12px;
  @media screen and (max-width: 630px){
    margin: auto;
    display: flex;
    flex-direction: column;
  }
`;

export const Label = styled.label`
  font-family: "Gotham Book", sans-serif;
  color: #ffff;
  width: 150px;
  display: inline-block;
  font-size: 16px;
  padding: 20px 20px 20px 20px;
  margin-right: 5px;
  text-align:right;
  @media screen and (max-width: 630px){
    text-align: left;
  }
`;

export const Input = styled.input`
  width: 350px;
  height: 50px;
  padding: 20px 20px 20px 20px;
  background: #bcb6ae;
  font-size: 16px;
`;

export const Button = styled.button`
  font-family: "Gotham Book", sans-serif;
  color: #ffff;
  font-size: 20px;
  width: 350px;
  height: 59px;
  padding: 20px 20px 20px 20px;
  background: #46c0d9;
  color: #ffff;
  border: none;
  margin-top: 15px;
`;

//Text
export const TextWrapper = styled.div``;

export const H1 = styled.h1`
  font-family: "Gotham Book", sans-serif;
  color: #6abb46;
  font-size: 36px;
  margin-bottom: 15px;
  text-align: center;
  padding-top: 40px;
`;

export const P = styled.p`
  font-family: "Gotham Book", sans-serif;
  color: #ffff;
  font-size: 18px;
  margin-bottom: 15px;
  text-align: center;
`;

export const P1 = styled.p`
  font-family: "Gotham Book", sans-serif;
  color: #ffff;
  font-size: 14px;
  margin-top:35px;
  text-align: center;
`;

export const A = styled.a`
  font-family: "Gotham Book", sans-serif;
  color: #46c0d9;
  font-size: 18px;
  margin-bottom: 5px;
  text-align: center;
`;

export const A1 = styled.a`
  font-family: "Gotham Book", sans-serif;
  color: #46c0d9;
  font-size: 14px;
  margin-bottom: 5px;
  text-align: center;
`;

export const SP = styled.span`
  font-family: "Gotham Book", sans-serif;
  color: #ffff;
  font-size: 16px;
  margin-bottom: 15px;
  text-align: center;
`;

export const CheckboxDiv = styled.div`
  text-align: left;
`;

export const ButtonDiv = styled.div`
  text-align: right;
`;

export const error = styled.p`
  font-family: "Gotham Book", sans-serif;
  color: #ffff;
`;

export const LenWrapp = styled.div`
  position: absolute;
  right: 0;
  top: 40%;
  @media screen and (max-width: 630px){
    display: none;
  }
`;

export const Img = styled.img`
left:11%
min-height:190px;
max-height:290px;
`;
