import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
// import getYouTubeId from 'get-youtube-id'
// import YouTube from 'react-youtube'
import PortableText from '@sanity/block-content-to-react'
import { TIME_DURATION } from "./constants";
import {CSSTransition} from "react-transition-group";


// SINGLE PROYECTOS 

// const serializers = {
//     types: {
//       youtube: ({node}) => {
//         const { url } = node
//         const id = getYouTubeId(url)
//         return (<YouTube videoId={id} />)
//       }
//     }
// }

//  function Body (blocks) {
//   return (
//     <PortableText blocks={blocks} serializers={serializers} />
//   )
// }

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState({title:"",_id:"",slug:"",mainImage:"",});
  const { fotix } = useState(null);
  const { slug } = useParams();
 


  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);


  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
        _id,
        slug,
        mainImage{
            asset->{
                _id,
                url
            }
        }, galeria{images[]{asset->{
          _id,
          "src":url
      }}},
        body,
        "name": author->name,
        "authorImage": author->image

    }`
      )
      .then((data) => setSinglePost(data[0]))
      .then(console.log("yes"))
      
      .then( console.log("primer break"))
      .catch(console.error);
      return singlePost;
  }, [slug]);

  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `*[slug.current == "${slug}"] {
  //       galeria{images[]{asset->{
  //         _id,
  //         "link":url
  //     }}},
  //       "fotos": galeria{
  //         images[]{ asset->{
  //               "src":url
  //           }}
  //       }
  //   }`
  //     )
  //     .then((data) => setGalePost(data[0]))
  //     .then( fotix = galePost.fotos.images )
  //     .catch(console.error);
  // }, [0]);



 const IMAGE = 
  [
    
        "https://cdn.sanity.io/images/8p2h4cq6/production/dd115c2478ec1186336197e6e440b1c24790c9c9-1000x1000.jpg",
        "https://cdn.sanity.io/images/8p2h4cq6/production/fcd3ea8f59b11c583222a23d9e7ec3bc9ebf69f6-3544x3544.jpg",
        "https://cdn.sanity.io/images/8p2h4cq6/production/356fc47ce770476a0607705b09fda084d3ea23d3-1216x1549.jpg"
      
  ];

// const fotix = singlePost.galeria.images;

  const src = IMAGE[currentIndex];
  const len = IMAGE.length;

  

useEffect(() => {
  // console.log(singlePost);
  console.log("segundo break");
  console.log(singlePost);
//  console.log(singlePost.title);
//     console.log(singlePost.slug)
  // console.log("fotix :", fotix );
  
},[0])


// const fotix = [
//   {
//       "asset": {
//           "src": "https://cdn.sanity.io/images/8p2h4cq6/production/2986bca76fb51a0d2f7db4b7f5bc1d98a6697f17-828x211.png"
//       }
//   },
//   {
//       "asset": {
//           "src": "https://cdn.sanity.io/images/8p2h4cq6/production/13bca3fad8aeb52571214aefdd4cdf687fa8f7b3-2145x368.png"
//       }
//   },
//   {
//       "asset": {
//           "src": "https://cdn.sanity.io/images/8p2h4cq6/production/1fe6a66c5140370f544fab0139e89d46c34fdf5b-1563x368.png"
//       }
//   }
// ]

  useEffect(
    () => {
      const timer = setTimeout(
        () => setCurrentIndex(prevIndex => (prevIndex + 1 + len) % len),
        TIME_DURATION
      );
      return () => clearTimeout(timer);
    },
    [currentIndex, len]
  );

  function handlerPrev(e) {
    e.preventDefault();
    setIsNext(false);
    setCurrentIndex(prevIndex => (prevIndex - 1 + len) % len);
  }

  function handlerNext(e) {
    e.preventDefault();
    setIsNext(true);
    setCurrentIndex(prevIndex => (prevIndex + 1) % len);
  }

  function changeSlide(id) {
    return function(e) {
      e.preventDefault();
      setCurrentIndex(id);
    };
  }

 
    // const lasty = singlePost[singlePost.length-1];
    // console.log(lasty);


  if (!singlePost) return <div> Loading...</div>;

  return (
    <main className="fondo  min-h-screen p-12  animate__animated animate__fadeIn">
      <article className="container mx-auto rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className=" bg-opacity-0 p-12">
              <h1 className="cursive text-white  text-3xl lg:text-6xl mb-4">
                <b> {singlePost.title}</b>
          <b></b>
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
        <div className="px-16 lg:px-48 py-12 text-white lg:py-20 prose lg:prose=xl max-w-full">
          <BlockContent 
            blocks={singlePost.body}
            projectId="8p2h4cq6"
            dataset="production"
          />

          {/* {fotix.map(dataIn => {
      return (
        <img  src={dataIn.asset.src} />
      );
    })} */}
         
        </div>


{/* 

        {singlePost.map(({_id, mainImage, title}) => (
    <div key={_id}>
    <img src={mainImage.url} alt={title}/>
    </div>
    ))}

 */}
        {/* <div style={{padding:"1rem"}}>
        <img
            src={galePost.fotos.images[2].asst.lik}
            className="w-full object-cover rounded"
            alt=""
            stlye={{ height: "400px"}}
          />
        </div>
        <div style={{padding:"1rem"}}>
        <img
            src={galePost.fotos.images[0].asst.lik}
            className="w-full object-cover rounded"
            alt=""
            stlye={{ height: "400px"}}
          />
        </div>
        <div style={{padding:"1rem"}}>
        <img
            src={galePost.fotos.images[2].asst.lik}
            className="w-full object-cover rounded"
            alt=""
            stlye={{ height: "400px"}}
          />
        </div>
        <div style={{padding:"1rem"}}>
        <img
            src={galePost.fotos.images[0].asst.lik}
            className="w-full object-cover rounded"
            alt=""
            stlye={{ height: "400px"}}
          />
        </div>





        <div style={{padding:"1rem"}}>
        <img
            src={galePost.galeria.images[0].asset.link}
            className="w-full object-cover rounded"
            stlye={{ height: "400px"}}
            alt=""
          />
        </div>
        <div style={{padding:"1rem"}}>
        <img
            src={galePost.galeria.images[1].asset.link}
            className="w-full object-cover rounded"
            stlye={{ height: "400px"}}
          />
        </div><div style={{padding:"1rem"}}>
        <img
            src={galePost.galeria.images[2].asset.link}
            className="w-full object-cover rounded"
            stlye={{ height: "400px"}}
          />
        </div> */}



      </article>
{/* <Galeria/> */}
      <div className="app">
      <div className="carousel">
      <div style={{color:"white"}} className="carousel_control carousel_control__prev">
          <span onClick={handlerPrev} >next</span>
        </div>
        <CSSTransition  timeout={3000}>
          <div className="carousel_slide" key={currentIndex}>
            <img src={src} alt="carousel slide" />
          </div>
        </CSSTransition>
      
        <div style={{color:"white"}} className="carousel_control carousel_control__next">
          <span onClick={handlerNext} >past</span>
        </div>
        <div className="carousel_history">
          <ul>
            {IMAGE.map((item, id) => {
              const name = (currentIndex === id && "active") || "";
              return (
                <li key={id} onClick={changeSlide(id)}>
                  <button className={name} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>






      {/* <div align="youtube-centrado">
      <iframe className="youtube-vid mx-auto justify-center text-center"   src={singlePost.body[1].url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" alt="video" allowFullScreen></iframe>
</div> */}
    </main>
  );
}

// class Galeria extends React.Component {
//   state = {
//     fotix: []
//   };
//   componentDidMount() {
//     console.log(fotix);
//     this.setState({ fotix });
//   }
//   render() {
//     const { fotix } = this.state;
//     const resume = fotix.map(dataIn => {
//       return (
//         <img  src={dataIn.asset.src} alt={dataIn.asset.src} />
//       );
//     });

//     return <div>{<React.Fragment>{resume}</React.Fragment>}</div>;
//   }
// }