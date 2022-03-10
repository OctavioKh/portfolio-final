import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {

    let activeStyle = {
       textDecoration: 'underline',
      };
    
  return (
    <header className="header">
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
          <NavLink  style={({ isActive }) =>
            isActive ? activeStyle : undefined
          } className="  animate__animated animate__fadeIn inflex-flex items-center py-6 px-3 my-6 rounded text-white hover:text-gray-100"
 
 to="/post" >Proyectos</NavLink>
          <NavLink  style={({ isActive }) =>
            isActive ? activeStyle : undefined
          } className="  animate__animated animate__fadeIn inflex-flex items-center py-6 px-3 my-6 rounded text-white hover:text-gray-100" to="/project">Noticias</NavLink>
          <NavLink   style={({ isActive }) =>
            isActive ? activeStyle : undefined
          } className=" animate__animated animate__fadeIn inflex-flex items-center py-6 px-3 my-6 rounded text-white hover:text-gray-100" to="/about">About</NavLink>
        </nav>
        <div></div>
      </div>
    </header>
  );
}
