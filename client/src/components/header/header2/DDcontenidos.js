
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';


function DDcontenidos() {
    const [dropdown, setDropdown] =useState(false);

    const openClose=()=>{
        setDropdown(!dropdown);
    }
  return (
    <div>
        <Dropdown isOpen={dropdown} toggle={openClose}>
            <DropdownToggle style={{backgroundColor: "#6ABB46",width: "10em",textAlign: "center",padding: "0.6em", color: "white", borderRadius:"0px", border:"none"}}>
                Contenidos
            </DropdownToggle>
            <DropdownMenu className='dropdown-menu-dark' style={{backgroundColor:"#333f48", padding:"0.5em 0.5em"}}>
                <DropdownItem style={{color:"white", padding:"0.5em 0em", textAlign:"center", borderBottom:"1px solid white"}}href='/contenidos/catalogo'>Catálogo</DropdownItem>
                <DropdownItem style={{color:"white", padding:"0.5em 0em", textAlign:"center", borderBottom:"1px solid white"}}href='/contenidos/evento'>Evento</DropdownItem>
                <DropdownItem style={{color:"white", padding:"0.5em 0em", textAlign:"center", borderBottom:"1px solid white"}}href='/contenidos/innovacion'>Innovación</DropdownItem>
                <DropdownItem style={{color:"white", padding:"0.5em 0em", textAlign:"center"}}href='/contenidos/soluciones'>Soluciones</DropdownItem>
            </DropdownMenu>        
        </Dropdown>

    </div>
  )
}

export default DDcontenidos