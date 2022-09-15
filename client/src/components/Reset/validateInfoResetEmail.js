export default function validateInfo(values) {
  let errors = {};

  //Email
  if (!values.email) {
    errors.email = "Correo electrónico requerido";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Correo electrónico inválido";
  }

  return errors;
}
