import React, {useEffect, useState} from "react";
import sanityClient from '../client.js';
import image01 from '../bg01.png';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}


export default function About() {
const [author, setAuthor] = useState(null);

useEffect(() => {
    sanityClient.fetch(`*[_type == "author"]{
        name,
        bio,
        "authorImage": image.asset->url
    }`)
    .then((data) => setAuthor(data[0]))
    .catch(console.error);
}, []);

if (!author) return <div>Loading ...</div>

return (
    <main className="fondo relative  animate__animated animate__fadeIn">
        <img src={image01} alt="About" class/>
        <section className="relative container  justify-center min-h-screen  lg:pt-8 px-8">
        <h1 className=" animate__animated animate__fadeIn lg:text-6xl md:text-3xl text-white align-middle text-center	pt-16 mt-16 font-bold cursive leading-none lg:leading-snug home-name">COLLECT EXPERIENCES</h1>
      <br/>
        <span className="text-white text-lg  text-center introduccion"><b></b>SOMOS UNA AGENCIA DE EXPERENTIAL MARKETING ESPECIALIZADA EN LA CREACIÓN, DESARROLLO Y OPERACIÓN DE PLATAFORMAS DE EVENTOS Y EXPERIENCIAS DE MARCA. </span>

    </section>
    <hr className="text-center"/>

    

    <div id="servicios_div">
        
        <h1 className="text-5xl text-white flex justify-center cursive">SERVICIOS</h1>
        
<div className="tabs">
  <input type="radio" name="tabs" id="tabone"/>
  <label for="tabone">ESTRATEGIAS</label>
  <div className="tab">
    <p>Concentraremos todos los recursos disponibles y los utilizaremos de la mejor manera posible para incrementar métricas, ventas y exposición.</p>
  </div>
  <input type="radio" name="tabs" id="tabtwo"/>
  <label for="tabtwo">IDENTIDAD GRÁFICA</label>
  <div className="tab">
    <p>Definimos elementos gráficos que aseguran consistencia y profesionalismo para alcanzar los objetivos clave de la comunicación de nuestros clientes.</p>
  </div>
  <input type="radio" name="tabs" id="tabthree"/>
  <label for="tabthree">DISEÑO 3D / ESPACIOS</label>
  <div className="tab">
    <p>Creamos entornos virtuales de alta calidad que realmente ponen el mundo  3D al alcance de todos.</p>
  </div>
	<input type="radio" name="tabs" id="tabtfour"/>
  <label for="tabtfour">BOOKING / TALENTO</label>
  <div className="tab">
   
    <p>Conectamos a las compañias con los talentos top.</p>
  </div>
	<input type="radio" name="tabs" id="tabfive"/>
  <label for="tabfive">EXPERIENCIAS AD-HOC</label>
  <div className="tab">
    <p>Creamos experiencias de acuerdo a las situaciones, sólo imaginalo y lo hacemos posible.</p>
  </div>
</div></div>

<hr/>

<div id="logo_div">
    <h1 className="espacio">&nbsp;</h1>
    <h1 className="espacio">&nbsp;</h1>
        <h1 className="text-5xl text-white flex justify-center cursive" >FIRST CONCEPT, THEN DESIGN  </h1>
        <h2>&#8212;</h2>
        <br/>
        <img src="https://cartel.eco/img/LOGO-03.png" alt="CARTEL" className="centered logox"/>
        <h1 className="espacio">&nbsp;</h1>
        <h1 className="espacio">&nbsp;</h1>
      </div>


    
        {/* <div className=" mx-auto relative">

        <div className="px-16  prose lg:prose=xl max-w-full">
          {/* <BlockContent
            blocks={singlePost.body}
            projectId="8p2h4cq6"
            dataset="production"
          /> 
        </div>

             <section className=" rounded-lg shadow-2xl lg:flex p-20">
                <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-64 mr-8" alt={author.name}/>
                <div className="text-lg flex flex-col justify-center">
                    <h1 className="cursive text-6xl text-black mb-4">
                        hey there im {" "}  </h1>
                        <span className="text-green-100">{author.name}</span>
                    <div className="prose lg:prose-xl text-white"><BlockContent block={author.bio} projectId="8p2h4cq6" dataset="production" /> </div>
                </div>
            </section> 
        </div> */}
    </main>
)
};