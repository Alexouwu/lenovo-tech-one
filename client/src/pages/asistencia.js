import React, { useState } from 'react';

import { Asistencia } from '../components';
import { FooterWebsite } from '../components';
import { Header2 } from '../components';


const AsistenciaPage = ( ) => {
    return (
    <div className="App" style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
        <Header2/>
        <Asistencia />
        <FooterWebsite/>
    </div>
    
    );
  };
  
  export default AsistenciaPage;