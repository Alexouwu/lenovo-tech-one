import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css";

import  LogIn  from './pages/SignIn';
import RegisterFormPage from './pages/Register';
import WelcomePage from './pages/welcome';
import ResetPage from './pages/Reset';
import ResetEmailPage from './pages/ResetEmail.js';
import AsistenciaPage from './pages/asistencia';
import Invite from './components/invite/invite';
import PreviewPage from './pages/preview';
import Blog from './pages/blog'
import Entrada from './components/Blog/Entrada';
import Catalogo from './pages/Catalogo';
import Programa from './pages/Programa';
import Articulo1 from './pages/Articulo1';
import Articulo2 from './pages/Articulo2';
import Articulo3 from './pages/Articulo3';
import Articulo4 from './pages/Articulo4';
import Articulo5 from './pages/Articulo5';
import Articulo6 from './pages/Articulo6';
import Articulo7 from './pages/Articulo7';
import Articulo8 from './pages/Articulo8';
import Articulo9 from './pages/Articulo9';
import Articulo10 from './pages/Articulo10';
import Articulo11 from './pages/Articulo11';
import Articulo12 from './pages/Articulo12';
import Articulo13 from './pages/Articulo13';
import Innovacion from './pages/Innovacion';
import Soluciones from './pages/Soluciones';
import Evento from './pages/Evento';

function App() {
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element ={ <RegisterFormPage/>} />
          <Route path="/login" element ={ < LogIn/>} />
          <Route path="/welcome" element ={ < WelcomePage />} />
          <Route path="/reset/:email" element ={ < ResetPage />} />
          <Route path="/resetEmail" element ={ < ResetEmailPage />} />
          <Route path ='/asistencia/:email' element = { <AsistenciaPage/>} />
          <Route path="/qr/:email" element = { <Invite/>} />
          <Route path="/preview/:email" element = { <PreviewPage/>} />
          <Route path="/blog" element = { <Blog/>} />
          <Route path="/contenidos/catalogo" element ={ <Catalogo/>} />
          <Route path="/entry" element = {<Entrada/>} />
          <Route path="/programa/:email" element ={<Programa/>} />
          <Route path="contenidos/innovacion/articulo1" element ={<Articulo1/>} />
          <Route path="contenidos/innovacion/articulo2" element ={<Articulo2/>} />
          <Route path="contenidos/innovacion/articulo3" element ={<Articulo3/>} />
          <Route path="contenidos/innovacion/articulo4" element ={<Articulo4/>} />
          <Route path="contenidos/innovacion/articulo5" element ={<Articulo5/>} />
          <Route path="contenidos/innovacion/articulo6" element ={<Articulo6/>} />
          <Route path="contenidos/innovacion/articulo7" element ={<Articulo7/>} />
          <Route path="contenidos/innovacion/articulo8" element ={<Articulo8/>} />
          <Route path="contenidos/innovacion/articulo9" element ={<Articulo9/>} />
          <Route path="contenidos/innovacion/articulo10" element ={<Articulo10/>} />
          <Route path="contenidos/soluciones/articulo11" element ={<Articulo11/>} />
          <Route path="contenidos/soluciones/articulo12" element ={<Articulo12/>} />
          <Route path="contenidos/catalogo/articulo13" element ={<Articulo13/>} />
          <Route path="contenidos/innovacion" element={<Innovacion/>} />
          <Route path="contenidos/soluciones" element ={<Soluciones/>} />
          <Route path="contenidos/evento" element ={<Evento/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
