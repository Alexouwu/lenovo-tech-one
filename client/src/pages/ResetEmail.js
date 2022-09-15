import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ResetEmail } from '../components';
import { Footer } from '../components';
import { Header } from '../components';
import Footerr from '../components/footer/footer';


const ResetEmailPage = ( ) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {


        setIsSubmitted(true);
      }
 
    return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <Header/>
        <ResetEmail submitForm={submitForm}/>
        <Footerr/>
    </div>
    
    );
  };
  
  export default ResetEmailPage;