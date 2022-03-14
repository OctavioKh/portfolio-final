import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { NavLink } from "react-router-dom";
import Navbar, {NavbarBrand, NavbarToggle} from 'react-bootstrap/Navbar';
import Container from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';
import imageUrlBuilder from "@sanity/image-url";

  
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function NavBar2() {

  const [socialData, setSocialData] = useState(null);


  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "social"] {
          linkIg, logoImage1 {
              asset->{
                  _id,
                  url
              },
        }, logoImage2 {
          asset->{
              _id,
              url
          },
    }
     }`, 
      )
      .then((data) => setSocialData(data[0]))
      .catch(console.error);
  }, []);

  if (!socialData) return <div> Loading...</div>;


    let activeStyle = {
       textDecoration: 'underline',
      };
    
  return (
    <>


    
    <header className="header posicion ">
      <div className="container mx-auto flex justify-between">
        <nav className="flex ">
          <NavLink
            to="/"
            exact="true"
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
            className="inflex-flex items-center py-6 px-4 mr-4 text-white text-4xl font-bold cursive tracking-widest hover:text-gray-100"
          >
          <img className="navbar-logo1 logo animate__animated animate__fadeIn" alt="Logo Cartel" style={{width:150}} src={urlFor(socialData.logoImage1).url()}/>
          <img className="navbar-logo2 animate__animated animate__fadeIn" alt="Logo Cartel" style={{width:150}} src={urlFor(socialData.logoImage2).url()}/>
          </NavLink>

<NavLink   style={({ isActive }) =>
isActive ? activeStyle : undefined
} className="linku animate__animated animate__fadeIn inflex-flex items-center py-6 px-3 my-6 rounded text-white hover:text-gray-100" to="/about">About</NavLink>
<NavLink  style={({ isActive }) =>
isActive ? activeStyle : undefined
} className=" linku animate__animated animate__fadeIn inflex-flex items-center py-6 px-3 my-6 rounded text-white hover:text-gray-100"

to="/post" >Proyectos</NavLink>
<NavLink  style={({ isActive }) =>
isActive ? activeStyle : undefined
} className=" linku  animate__animated animate__fadeIn inflex-flex items-center py-6 px-3 my-6 rounded text-white hover:text-gray-100" to="/project">Noticias</NavLink>

<NavLink  style={({ isActive }) =>
isActive ? activeStyle : undefined
} className=" linku animate__animated animate__fadeIn inflex-flex items-center py-6 px-3 my-6 rounded text-white hover:text-gray-100"

to="/contacto" >Contacto</NavLink>
          
        </nav>

        {/* <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon className="mr-4" target="_blank" bgColor="#232323"  fgColor="#fff" style={{height:35, width: 35}} alt="instagram" url={socialData.linkIg}  />
        </div> */}
      </div>
    </header>
    </>
  );
}
