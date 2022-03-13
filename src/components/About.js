import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import image01 from "../bg01.png";
//ABOUT
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "about"] {
        bio,
      atitle, btitle, ctitle,  mainImage{
        asset->{
            _id,
            url
        },
    },logoImage2{
      asset->{
          _id,
          url
      },
  }} `
      )
      .then((data) => setAboutData(data[0]))
      .catch(console.error);
  }, []);
  

  if (!aboutData) return <div> Loading...</div>;

  return (
    <main className="fondo  min-h-screen p-12  animate__animated animate__fadeIn">
      <h1 className="text-5xl text-white flex justify-center cursive">ABOUT</h1>
      <h1 className="espacio">&nbsp;</h1>
      <div className="flex justify-center text-gray-800">
        <img src={urlFor(aboutData.mainImage).url()} alt="foto-about" />
      </div>

      <section className="relative container  justify-center min-h-screen  lg:pt-8 px-8">
        <h1 className=" animate__animated animate__fadeIn lg:text-6xl md:text-3xl text-white align-middle text-center	pt-16 mt-16 font-bold cursive leading-none lg:leading-snug home-name">
          {aboutData.ctitle}
        </h1>
        <br />
        <span className="text-white text-lg  text-center introduccion">
          {aboutData.btitle}{" "}
        </span>
        <h1 className="espacio2">&nbsp;</h1>
      </section>
      <hr />
      <div className="px-16 lg:px-48 py-12 text-white lg:py-20 prose lg:prose=xl max-w-full">
        <BlockContent
          blocks={aboutData.bio}
          projectId="8p2h4cq6"
          dataset="production"
        />
      </div>
      <hr />

      <div id="logo_div">
        <h1 className="espacio2">&nbsp;</h1>
        <h1 className="text-5xl text-white flex justify-center cursive">
          {aboutData.atitle}
        </h1>
        <h2>&#8212;</h2>
        <br />
        <img
          src={urlFor(aboutData.logoImage2).url()}
          alt="CARTEL"
          className="centered logox"
        />
        <h1 className="espacio2">&nbsp;</h1>
      </div>
    </main>
  );
}
