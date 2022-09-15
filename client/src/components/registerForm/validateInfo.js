export default function validateInfo(values) {
  let errors = {};

  //name
  if (!values.name) {
    errors.name = "Nombre requerido";
  }

  //Middlename
  if (!values.middlename) {
    errors.middlename = "Apellido requerido";
  }

  //Business
  if (!values.business) {
    errors.business = "Empresa requerida";
  }

  //Email
  if (!values.email) {
    errors.email = "Correo electrónico requerido";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Correo inválido";
  }

  //Password
  if (!values.password) {
    errors.password = "Contraseña requerida";
  } else if (values.password.length < 6) {
    errors.password = "La contraseña debe contener más de 6 caracteres";
  }

  //Chack Both passwords
  if (!values.password2) {
    errors.password2 = "Contraseña requerida";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Las contraseñas no coinciden";
  }

  return errors;
}
