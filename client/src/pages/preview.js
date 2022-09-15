import React, { useState } from 'react';

import { Preview, RegisterForm } from '../components';
import { Footer } from '../components';
import { Header } from '../components';
import Header3Lines from '../components/header/Header3Lines'
import Footerr from '../components/footer/footer';


const PreviewPage = ( ) => {

 
    return (
    <div className="App" style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
        <Header/>
        {/* <Header3Lines /> */}
        <Preview/>
        <Footerr/>
    </div>
    
    );
  };

  export default PreviewPage;