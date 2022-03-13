import React from "react";
import { NavLink } from "react-router-dom";
import Navbar, {NavbarBrand, NavbarToggle} from 'react-bootstrap/Navbar';
import Container from "react-bootstrap";


export default function NavBar() {

    let activeStyle = {
       textDecoration: 'underline',
      };
    
  return (
    <>
{/* <Navbar bg="light" >
  <Container>
    <NavbarBrand href="#home">React-Bootstrap</NavbarBrand>
    <NavbarToggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#link">Link</NavLink>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavLink href="#action/3.1">Action</NavLink>
          <NavLink href="#action/3.2">Another action</NavLink>
          <NavLink href="#action/3.3">Something</NavLink>
          <NavDropdown.Divider />
          <NavLink href="#action/3.4">Separated link</NavLink>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}

    
    <header className="header posicion ">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact="true"
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
            className="inflex-flex items-center py-6 px-3 mr-4 text-white text-4xl font-bold cursive tracking-widest hover:text-gray-100"
          >
           <img className="logo animate__animated animate__fadeIn" alt="Logo Cartel" src="https://cartel.eco/img/LOGO.png"/>
          </NavLink>
          <NavLink   style={({ isActive }) =>
            isActive ? activeStyle : undefined
          } className=" animate__animated animate__fadeIn inflex-flex items-center py-6 px-3 my-6 rounded text-white hover:text-gray-100" to="/about">About</NavLink>
          <NavLink  style={({ isActive }) =>
            isActive ? activeStyle : undefined
          } className="  animate__animated animate__fadeIn inflex-flex items-center py-6 px-3 my-6 rounded text-white hover:text-gray-100"
 
 to="/post" >Proyectos</NavLink>
          <NavLink  style={({ isActive }) =>
            isActive ? activeStyle : undefined
          } className="  animate__animated animate__fadeIn inflex-flex items-center py-6 px-3 my-6 rounded text-white hover:text-gray-100" to="/project">Noticias</NavLink>
          
          <NavLink  style={({ isActive }) =>
            isActive ? activeStyle : undefined
          } className="  animate__animated animate__fadeIn inflex-flex items-center py-6 px-3 my-6 rounded text-white hover:text-gray-100"
 
 to="/contacto" >Contacto</NavLink>
        </nav>
        <div></div>
      </div>
    </header>
    </>
  );
}
