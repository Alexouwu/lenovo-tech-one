import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SignIn } from '../components';
import { Footer } from '../components';
import { Header } from '../components';
import { WelcomeMessage }  from '../components';

import "../App.css";
import HeaderTwo from '../components/header/header2/index';

const WelcomePage = ( ) => {
 
    return (
    <div className="App">
        <HeaderTwo/>
        <WelcomeMessage/>
    </div>
    
    );
  };
  
  export default WelcomePage;