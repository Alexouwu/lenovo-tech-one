import React from "react";
import useForm from "../../Hooks/useReset";
import validate from "./validateInfoReset";

import {
  BackgroundContainer,
  Form,
  InputWrapper,
  Label,
  Input,
  Button,
  H1,
  P,
  TextWrapper,
  MegaDiv,
  FormWrapper,
  ButtonDiv,
  LenWrapp,
  Img,
  MegaDiv2,
} from "./Reset.Elements";
import styled from "styled-components";

const Reset = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <BackgroundContainer className="form-content-right" style={{flex: 1}}>
      <BackgroundWrapper>
      <LenWrapp>
        <Img src={require("../../utils/images/m_merged.png")}></Img>
      </LenWrapp>

      <TextWrapper>
        <H1> Bienvenido</H1>
        <P>¿Olvidaste tu contraseña?</P>
      </TextWrapper>

      <Form className="form" onSubmit={handleSubmit}>
        <MegaDiv>
          <MegaDiv2>
            <InputWrapper className="form-inputs">
              <Label htmlFor="password" className="form-label">
                Nueva contraseña*
              </Label>
              <Input
                id="password"
                type="password"
                name="password"
                className="form-input"
                placeholder="Contraseña con más de 6 caracteres"
                value={values.password}
                onChange={handleChange}
                />
              {errors.password && <p> {errors.password}</p>}
            </InputWrapper>

            <InputWrapper className="form-inputs">
              <Label htmlFor="password2" className="form-label">
                Confirmar contraseña*
              </Label>
              <Input
                id="password2"
                type="password"
                name="password2"
                className="form-input"
                placeholder="Contraseña con más de 6 caracteres"
                value={values.password2}
                onChange={handleChange}
                />
              {errors.password2 && <p> {errors.password2}</p>}
            </InputWrapper>

            <InputWrapper className="form-inputs">
              <Label htmlFor="code" className="form-label">
                Código*
              </Label>
              <Input
                id="code"
                type="text"
                name="code"
                className="form-input"
                placeholder="Enviamos un mail con código a tu correo"
                value={values.code}
                onChange={handleChange}
                />
              {errors.code && <p> {errors.code}</p>}
            </InputWrapper>

            <InputWrapper>
              <FormWrapper>
                <ButtonDiv>
                  <Button className="form-input-btn" type="submit">
                    Acceder
                  </Button>
                </ButtonDiv>
              </FormWrapper>
            </InputWrapper>
          </MegaDiv2>
        </MegaDiv>
      </Form>
      </BackgroundWrapper>
    </BackgroundContainer>
  );
};

export default Reset;

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