import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';

const useReset = (callback, validate) => {
  let {email}= useParams();
  const [values, setValues] = useState({
    email,
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

        axios.post('https://beemexico.com/lenovo-event/resetPassword', { 
          values 
        })

        .then ((response) => {
          
          window.location.href= 'https://techonemx.com/login';
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

export default useReset;
