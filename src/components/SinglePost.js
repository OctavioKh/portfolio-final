import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import PortableText from '@sanity/block-content-to-react';
// import { Carousel } from "bootstrap";
// import { NavItem } from "react-bootstrap";


import { useSelector, useDispatch } from "react-redux";
import { setIncrease, setDecrease } from "./redux/carouselActions";

const Carousel = () => {
  const position = useSelector((state) => state);
  const dispatch = useDispatch();

  const next = () => dispatch(setIncrease(position + 1));
  const prev = () => dispatch(setDecrease(position - 1));



  return (
    <div className="container">
      <div className="arrow" onClick={prev}>
        &#60;
      </div>
      <img className="photo" src={urlslider[position]} alt="" />
      <div className="arrow" onClick={next}>
        &#62;
      </div>
    </div>
  );
};






// SINGLE PROYECTOS 

const serializers = {
    types: {
      youtube: ({node}) => {
        const { url } = node
        const id = getYouTubeId(url)
        return (<YouTube videoId={id} />)
      }
    }
}

 function Body (blocks) {
  return (
    <PortableText value={blocks} serializers={serializers} />
  )
}




const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
        _id,
        slug,
        "urlslider": galeria.images[].asset->url,
        mainImage{
            asset->{
                _id,
                url
            }
        },
        body,
        "name": author->name,
        "authorImage": author->image
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .then(console.log("working"))
      .then(console.log(singlePost.urlslider))
      .then((console.log("si")))
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
        
        {/* <div className="carousel_slide" key={index}>
               <img src={src}/>
             </div> */}

<></>
      </article>
<br/>

<Carousel />
{/* <Carousel>
        {singlePost.map(galeria => (
          <Carousel.Item key={galeria.key}>
            <img
              className="testimonialImages d-block w-50"
              src={galeria.asset.url}
              alt={galeria.asset.key}
            />
          </Carousel.Item>
        ))}
      </Carousel> */}

      <br />
      <div align="youtube-centrado">
{/* <img src={singlePost.galeria.images.asset._ref}/>         */}
      <iframe className="youtube-vid mx-auto justify-center text-center"  src={singlePost.body[1].url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>
    </main>
  );
}

// import React from "react";

// export default function SinglePost() {
// return <h1>SinglePost Page!</h1>
// }
