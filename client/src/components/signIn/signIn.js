import React from "react";
import useForm from "../../Hooks/useSignIn";
import validate from "./validateInfoSignIn";

import {
  BackgroundContainer,
  Form,
  InputWrapper,
  Label,
  Input,
  Button,
  H1,
  P,
  P1,
  A,
  A1,
  TextWrapper,
  SP,
  CheckboxDiv,
  MegaDiv,
  FormWrapper,
  ButtonDiv,
  LenWrapp,
  Img,
  error,
  MegaDiv2,
} from "./signIn.Elements";
import styled from "styled-components";

const SignIn = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <BackgroundContainer className="form-content-right">
      <BackgroundWrapper>
      <LenWrapp>
        <Img src={'/logos.png'}></Img>
      </LenWrapp>

      <TextWrapper>
        <H1> Bienvenido</H1>
        <P>¡Disfruta lo que tenemos para ti! Inicie sesión.</P>
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
              {errors.email && <p> {errors.email}</p>}
            </InputWrapper>

            <InputWrapper className="form-inputs">
              <Label htmlFor="password" className="form-label">
                Contraseña*
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

            <InputWrapper>
              <FormWrapper>
                <label>
                  <SP>Recordar mis datos </SP>
                  <input type="checkbox" />
                </label>

                <ButtonDiv>
                  <Button className="form-input-btn" type="submit">
                    Acceder
                  </Button>
                </ButtonDiv>

                <P1>
                  ¿Olvidaste tu contraseña? Recupérala{" "}
                  <A1 href="/resetEmail">aquí</A1>
                </P1>
              </FormWrapper>
            </InputWrapper>
          </MegaDiv2>
        </MegaDiv>
      </Form>
      </BackgroundWrapper>
    </BackgroundContainer>
  );
};

export default SignIn;

export const BackgroundWrapper = styled.div`
  background-position: top right -89px;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  background-size: 240px;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (min-width: 648px){
    background-size: 375px;
    background-position: top right -125px;
  }
`
