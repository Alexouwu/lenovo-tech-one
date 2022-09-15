export default function validateInfo(values) {
  let errors = {};

  //Password
  if (!values.password) {
    errors.password = "Contraseña requerida";
  }

  if (!values.password2) {
    errors.password2 = "Contraseña requerida";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Las contraseñas no coinciden";
  }

  if (!values.code) {
    errors.code = "Ingrese un código";
  }

  return errors;
}
