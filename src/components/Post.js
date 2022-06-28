import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";


// PAGINA PROYECTOS -- CHECAR 

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(_createdAt asc) {
        title,
        slug,
        mainImage{
            asset->{
                _id,
                url
            },
            alt
        }
    } `
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="fondo min-h-screen p-12 ">
      <section className=" animate__animated animate__fadeIn container mx-auto">
        <h1 className="text-5xl text-white flex justify-center cursive">
          PROYECTOS
        </h1>
        <h1 className="espacio">&nbsp;</h1>
        {/* <h2 className="text-lg text-gray-600 flex justify-center mb-12"></h2> */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article key={index} className="fondo">
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="fondo block h-64 relative rounded shadow leading-snug   borderg-green-400"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-white text-lg font-blog px-3 py-4  bg-opacity-0 rounder">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
