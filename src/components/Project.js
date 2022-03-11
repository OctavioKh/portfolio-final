import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
// import project from "../studio/schemas/project.js";
// import Modal from "./Modal.js";

//NOTICIAS


class Modal extends React.Component {
  render() {
    return (
      <>
        <div
          id="defaultModal"
          aria-hidden="true"
          className=" animate__animated animate__fadeIn hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
        >
          <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
            <div className="relative  rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                  Terms of Service
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="defaultModal"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </p>
              </div>
              <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  I accept
                </button>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"] {
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags, mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <main className="fondo min-h-screen p-12  ">
        <section className=" animate__animated animate__fadeIn container mx-auto">
          <h1 className="text-5xl text-white flex justify-center cursive">
            Noticias
          </h1>
          {/* <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to page
        </h2> */}
          <h1 className="espacio">&nbsp;</h1>
          <section className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
            {projectData &&
              projectData.map((project, index) => (
                <article
                  key={index}
                  className="relative rounded-lg  p-16"
                >
                  <h3 className="text-white text-3xl font-bold mb-2 hover:text-grey">
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_blank"
                      rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h3>

                  <div className="text-gray-500 text-xs space-x-4">
                    <span>
                      <strong className="font-bold">Fecha</strong>:{" "}
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                    <span>
                      <strong className="font-bold">Locación</strong>:{" "}
                      {project.place}
                    </span>
                    {/* <span>
                      <strong className="font-bold"> Tipo</strong>:{" "}
                      {project.projectType}
                    </span> */}
                    <p className=" my-6 text-lg text-white ">
                      {project.description}
                    </p>
<div className="caja-z">  <img 
                      src={project.mainImage.asset.url}
                      alt={project.mainImage.alt}
                      className="img-responsive imagen-z items-center rounded-r object-contain   "
                    /></div>
                  

                  <a
                      href={project.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-white font-bold hover:underline hover:text-grey"
                    >
                      {/* View the project{" "}
                      <span role="img" aria-label="right pointer">
                        here
                      </span> */}
                    </a>
                  </div>
                </article>
              ))}
          </section>
        </section>
      </main>
    </>
  );
}
