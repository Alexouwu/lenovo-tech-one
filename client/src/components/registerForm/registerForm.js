import React from "react";
import useForm from "../../Hooks/useForm";
import validate from "./validateInfo";

import {
  BackgroundContainer,
  Form,
  InputWrapper,
  Label,
  Input,
  Button,
  H1,
  P,
  A,
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
} from "./registerForm.Elements";
import styled from "styled-components";

const RegisterForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, handleClick,values, errors } = useForm(
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
        <P> ¡Regístrate para reservar tu lugar!</P>
        <P>
          ¿Ya estás registrado? Accede a tu cuenta <a href="/login" className="register-a">aquí</a>
        </P>
      </TextWrapper>

      <Form className="form" onSubmit={handleSubmit}>
        <MegaDiv>
          <MegaDiv2>
            <InputWrapper className="form-inputs">
              <Label htmlFor="name" className="form-label">
                Nombre*
              </Label>
              <Input
                id="name"
                type="text"
                name="name"
                className="form-input"
                placeholder="Ej. Carlos"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && <p style={{color:'#ffff'}}> {errors.name}</p>}
            </InputWrapper>

            <InputWrapper className="form-inputs">
              <Label htmlFor="middlename" className="form-label">
                Apellido*
              </Label>
              <Input
                id="middlename"
                type="text"
                name="middlename"
                className="form-input"
                placeholder="Ej. López"
                value={values.middlename}
                onChange={handleChange}
              />
              {errors.middlename && <p style={{color:'#ffff'}}> {errors.middlename}</p>}
            </InputWrapper>

            <InputWrapper className="form-inputs">
              <Label htmlFor="name" className="form-label">
                Empresa*
              </Label>
              <Input
                id="business"
                type="text"
                name="business"
                className="form-input"
                placeholder="Ej. Lenovo"
                value={values.business}
                onChange={handleChange}
              />
              {errors.business && <p> {errors.business}</p>}
            </InputWrapper>

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

            <InputWrapper className="form-inputs">
              <Label htmlFor="password2" className="form-label">
                Contraseña*
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

            <InputWrapper>
              <FormWrapper>
                <label>
                  <SP>Utilizo dispositivos Lenovo/Motorola </SP>
                  <input type="checkbox" />
                </label>

                <ButtonDiv>
                  <Button className="form-input-btn" type="submit" onClick={handleClick}>
                    REGISTRARSE
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

export default RegisterForm;

export const BackgroundWrapper = styled.div`
  /* background: url('/ot-bg-pattern.svg'); */
  background-position: top right -89px;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  background-size: 240px;
  @media (min-width: 648px){
    background-size: 375px;
    background-position: top right -125px;
  }
`