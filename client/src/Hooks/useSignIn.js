import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const useSignIn = (callback, validate) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      axios
        .post("https://beemexico.com/lenovo-event/signIn", {
          values,
        })

        .then((response) => {
          if (response.data.message) {
            console.log(response.data.message);
          } else {
            sessionStorage.setItem('email', values.email);
            navigate(`/preview/${values.email}`);
          }
        })

        .catch((error) => {
          console.log(error);
        });
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useSignIn;
