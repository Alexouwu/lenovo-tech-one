import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";

const useForm = (callback, validate) => {

  const handleClick = (e) => {    
  }

  const [values, setValues] = useState({
    name: "",
    middlename: "",
    business: "",
    email: "",
    password: "",
    password2: "",
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

    localStorage.setItem("email", values.email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  function redirect_blank(url) {
    var a = document.createElement('a');
    a.target="_blank";
    a.href=url;
    a.click();
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      axios
        .post("https://beemexico.com/lenovo-event/register", {
          values,
        })

        .then((response) => {       
          sessionStorage.setItem('email', values.email);   
          navigate(`/preview/${values.email}`)
        })

        .catch((error) => {
          console.log(error);
        });
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
