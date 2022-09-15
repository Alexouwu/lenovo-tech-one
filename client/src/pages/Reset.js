import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Reset } from '../components';
import { Footer } from '../components';
import { Header } from '../components';
import Footerr from '../components/footer/footer';


const ResetPage = ( ) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {


        setIsSubmitted(true);
      }
 
    return (
    <div className="App" style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
        <Header/>
        <Reset submitForm={submitForm}/>
        <Footerr/>
    </div>
    
    );
  };
  
  export default ResetPage;