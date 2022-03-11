import React from "react";
import image from '../bg01.png'


export default function Contacto() {
    return (
    <contacto>
<main className="fondo">
    <img src={image} alt="background" className="absolute object-cover w-full h-full animate__animated animate__fadeIn"/>
    <section className="relative flex justify-center min-h-screen  lg:pt-64 px-8">
        <h1 className=" animate__animated animate__fadeIn text-6xl text-white align-middle text-center	 font-bold cursive leading-none lg:leading-snug home-name">COLLECT EXPERIENCES</h1>
    </section>
</main>

  


    </contacto>)
}