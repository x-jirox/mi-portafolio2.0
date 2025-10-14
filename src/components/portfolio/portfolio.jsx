import React, { useState } from "react";
import portafolioImg from "../../assets/projects/Portafolio.png";
import summitticketsImg from "../../assets/projects/SummitTickets.png";
import tallertrackImg from "../../assets/projects/TallerTrack.png";
import "./portfolio.css";

const Portfolio = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Mi Portafolio</h2>
      <span className="section__subtitle">Mis proyectos</span>

      <div className="portfolio__container container grid">
        {/* Project 1 */}
        <div className="projects__content">
          {/* Imagen superior */}
          <div className="projects__image-container">
            <img
              src={portafolioImg}
              alt="Proyecto 1"
              className="projects__image"
            />
          </div>

          <div className="projects__body">
            <h3 className="projects__title">Portafolio 1.0</h3>

            <span className="projects__button" onClick={() => toggleTab(1)}>
              Ver más
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
          </div>

          {/* Modal */}
          <div
            className={
              toggleState === 1
                ? "projects__modal active-modal"
                : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects__modal-close"
              ></i>
              <h3 className="projects__modal-title">Portafolio 1.0</h3>
              <p className="projects__modal-description">
                Portafolio creado en angular 16 y desplegado en netlify.
              </p>
              <ul className="projects__modal-projects grid">
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Interfaces responsivas</p>
                </li>
              </ul>

              <div className="projects__modal-buttons">
                <a
                  href="https://github.com/x-jirox/mi-portafolio"
                  className="details__project__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <i className="uil uil-github projects__button-icon"></i>
                </a>

                <a
                  href="https://portafolio-lenin-correa.netlify.app/about-me"
                  className="details__project__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo
                  <i className="uil uil-link-h projects__button-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
