import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
//ABOUT
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Home() {
      const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "home"] {
        
      ctitle,  mainImage{
        asset->{
            _id,
            url
        },
    }} `
      )
      .then((data) => setHomeData(data[0]))
      .catch(console.error);
  }, []);

  
  

  if (!homeData) return <div> Loading...</div>;

  return (

<main className="fondo">
    <img src={urlFor(homeData.mainImage).url()} alt="background" className="absolute object-cover w-full h-full animate__animated animate__fadeIn"/>
    <section className="relative flex justify-center min-h-screen  lg:pt-40 px-8">
        <h1 className=" animate__animated animate__fadeIn  md:text-6xl lg:text-10xl text-white align-middle text-center	 font-bold cursive leading-none lg:leading-snug home-name">{homeData.ctitle}</h1>
    </section>
</main>)
};