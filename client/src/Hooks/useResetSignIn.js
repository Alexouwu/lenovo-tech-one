import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const useResetSignIn = (callback, validate) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    password2: '',
    code:'',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();

        axios.post('https://beemexico.com/lenovo-event/resetToken', { 
          values 
        })

        .then ((response) => {
          
          window.location.href= `https://techonemx.com/reset/${values.email}`;
          console.log(response.data);
        })
    
        .catch((error) => {
          console.log(error);
        });
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useResetSignIn;
