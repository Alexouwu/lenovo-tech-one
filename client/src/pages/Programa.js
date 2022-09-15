import React from 'react'
import styled from "styled-components";
import Footerr from '../components/footer/footer';
import { Header } from '../components';
import Program from '../components/preview/Program';

function Programa() {
 
    return (
        <div className="App" style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <Header/>
                <Program></Program>
            <Footerr/>
        </div>
    )    
}

export default Programa

const Wrapper = styled.div`
width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  flex-direction: row;
  margin-top: 2em;
  margin-bottom: 5em;
  @media screen and (max-width: 1000px){
    flex-direction: column;
  }`
