import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SignIn } from '../components';
import { Footer } from '../components';
import { Header } from '../components';
import Footerr from '../components/footer/footer';


const LogIn = ( ) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {


        setIsSubmitted(true);
      }
 
    return (
    <div className="App" style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
        <Header/>
        <SignIn submitForm={submitForm}/>
        <Footerr/>
    </div>
    
    );
  };
  
  export default LogIn;