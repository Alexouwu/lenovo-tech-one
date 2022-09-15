import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { RegisterForm } from '../components';
import { Footer } from '../components';
import Header from '../components/header/index';
import Footerr from '../components/footer/footer';


const RegisterFormPage = ( ) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {

        setIsSubmitted(true);
      }
 
    return (
    <div className="App" style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
        <Header/>
        <RegisterForm submitForm={submitForm}/>
        <Footerr/>
    </div>
    
    );
  };
  
  export default RegisterFormPage;