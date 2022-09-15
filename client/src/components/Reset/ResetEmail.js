import React from "react";
import useForm from "../../Hooks/useResetSignIn";
import validate from "./validateInfoResetEmail";

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
    <BackgroundContainer className="form-content-right">
      <BackgroundWrapper>
      <LenWrapp>
        <Img src={require("../../utils/images/m_merged.png")}></Img>
      </LenWrapp>

      <TextWrapper>
        <H1> Bienvenido</H1>
        <P>Ingresa tu correo para cambiar tu contraseña</P>
      </TextWrapper>

      <Form className="form" onSubmit={handleSubmit}>
        <MegaDiv>
          <MegaDiv2>
            <InputWrapper className="form-inputs">
              <Label htmlFor="email" className="form-label">
                Correo*
              </Label>
              <Input
                id="email"
                type="text"
                name="email"
                className="form-input"
                placeholder="Ej. carlos.lopez@gmail.com"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p style={{ color: "#ffff" }}> {errors.email}</p>
              )}
            </InputWrapper>

            <InputWrapper>
              <FormWrapper>
                <ButtonDiv>
                  <Button className="form-input-btn" type="submit">
                    Enviar código
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
