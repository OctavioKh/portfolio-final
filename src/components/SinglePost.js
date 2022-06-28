import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import PortableText from "@sanity/block-content-to-react";
import { Modal, ModalBody } from "reactstrap";

// import galeria from "../../studio/schemas/galeria.js";
// import { Carousel } from "bootstrap";

// SINGLE PROYECTOS

const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return (
        <>
          <br /> <br />
          <YouTube
            videoId={id}
            className="youtube-vid mx-auto justify-center text-center"
          />
          <br /> <br />
        </>
      );
    },
  },
};

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost({ blocks }) {
  const [singlePost, setSinglePost] = useState(null);
  const [modal, setModal] = useState(null);
  const [selected, setSelected] = useState(null);

  const { slug } = useParams();

  // let links = galeria.images.map((images) => images.url)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]  {
        title,
        _id,
        slug,
        galeria {
          images[]{
           "link": asset->url
          }
        },
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
      .then(console.log("fetch request working"))
      .catch(console.error);
  }, [slug]);

  useEffect(() => {
    console.log(singlePost);
    //  let fotos = singlePost.galeria;
    // console.log(fotos);
  });

  const toggle = (fotos) => {
    setSelected(fotos);
    setModal(true);
  };

  const closeModal = () => {
    setSelected(null);
    setModal(false);
  };

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
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="w-full object-cover rounded"
            stlye={{ height: "400px" }}
          />
        </header>
        <div
          className=" sm:px-1 md:px-8 lg:px-48 py-12 text-white lg:py-20 prose lg:prose=xl max-w-full"
          style={{ textAlign: "justify" }}
        >
          <BlockContent
            blocks={singlePost.body}
            projectId="8p2h4cq6"
            dataset="production"
            serializers={serializers}
          />

          <br />
          <br />
          <br />

          {singlePost.galeria.images.map((fotos, id) => (
            <div key={id}>
              <img
                key={id}
                alt={id}
                className="fotos-proyectos d-block"
                src={fotos.link}
                onClick={() => toggle(fotos)}
              />
              <br />
            </div>
          ))}

          <Modal
            className="modalx"
            isOpen={modal}
            fullscreen
            size="xl"
            // modalTransition={{ timeout: 100 }}
            data-keyboard="false"
          >
            <ModalBody>
              <button
                onClick={closeModal}
                style={{
                  float: "right",
                  position: "fixed",
                  top: "1%",
                  right: "2%",
                  fontSize: "50px",
                  border: "rgba(0,0,0,0)",
                }}
              >
                X
              </button>

              <div className="align-middle inline-block flex justify-center items-center h-screen">
                <img className="align-middle inline-block"
                  style={{
                    objectFit: "cover",
                    height: "auto",
                    margin: "0 auto",
                    padding: " 20px",
                  }}
                  src={selected && selected.link}
                  alt=""
                />
              </div>
            </ModalBody>
          </Modal>
        </div>
      </article>

      <br />

      <br />
      {/* <div align="youtube-centrado">
        <iframe
          className="youtube-vid mx-auto justify-center text-center"
          src={singlePost.body[1].url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> */}
    </main>
  );
}

// import React from "react";

// export default function SinglePost() {
// return <h1>SinglePost Page!</h1>
// }
