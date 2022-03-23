import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import PortableText from "@sanity/block-content-to-react";
import galeria from "../../studio/schemas/galeria.js";
// import { Carousel } from "bootstrap";

// SINGLE PROYECTOS

const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube videoId={id} />;
    },
  },
};

function Body(blocks) {
  return <PortableText blocks={blocks} serializers={serializers} />;
}

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  let links = galeria.images.map((images) => images.url)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
        _id,
        slug,
        galeria{images[]},
        mainImage{
            asset->{
                _id,
                url
            }
        },
        
        body 
        ,
        "name": author->name,
        "authorImage": author->image

    }`
      )
      .then((data) => setSinglePost(data[0]))
      .then(console.log("fetch request working"))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div> Loading...</div>;

  return (
    <main className="fondo  min-h-screen p-12  animate__animated animate__fadeIn">
      <article className="container mx-auto rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className=" bg-opacity-0 p-12">
              <h1 className="cursive text-white  text-3xl lg:text-6xl mb-4">
                <b> {singlePost.title}</b>
              </h1>
              <div>
                {/* <div className="flex justify-center text-gray-800">
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className="w-10 h-10 rounded-full"
                />
              </div> <p className="cursive flex items-center pl-2 text-2xl ">
                {" "}
                {singlePost.name}
              </p> */}
              </div>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="w-full object-cover rounded"
            stlye={{ height: "400px" }}
          />
        </header>
        <div className="px-16 lg:px-48 py-12 text-white lg:py-20 prose lg:prose=xl max-w-full">
          <BlockContent
            blocks={singlePost.body}
            projectId="8p2h4cq6"
            dataset="production"
          />
        </div>
      </article>

      <br />

<img className=""src={links}/>

        {/* {singlePost.galeria.images.url.map((fotos) => (
          <div key={fotos.key}>
            <img
              className="testimonialImages d-block w-50"
              src={fotos.url}
              // alt={galeria.asset.key}
            />
          </div>
        ))} */}

      <br />
      <div align="youtube-centrado">
        <iframe
          className="youtube-vid mx-auto justify-center text-center"
          src={singlePost.body[1].url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
}

// import React from "react";

// export default function SinglePost() {
// return <h1>SinglePost Page!</h1>
// }


