import React, { useState } from "react";
import summitticketsImg from "../../assets/projects/SummitTickets.png";
import tallertrackImg from "../../assets/projects/TallerTrack.png";
import confortartImg from "../../assets/projects/Confortart.png";
import tastyfoodImg from "../../assets/projects/TastyBurger.png";
import "./portfolio.css";

const Portfolio = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Mi Portafolio</h2>
      <span className="section__subtitle">Proyectos destacados</span>

      <div className="portfolio__container container grid">
        {/* Project 1 */}
        <div className="projects__content">
          <div className="projects__image-container">
            <img
              src={tallertrackImg}
              alt="TallerTrack"
              className="projects__image"
            />
          </div>

          <div className="projects__body">
            <h3 className="projects__title">TallerTrack</h3>
            <span className="projects__button" onClick={() => toggleTab(1)}>
              Ver más
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
          </div>

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
              <h3 className="projects__modal-title">TallerTrack</h3>
              <p className="projects__modal-description">
                App web para control de vehículos, desarrollada en Spring Boot.
              </p>
              <ul className="projects__modal-projects grid">
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Gestión eficiente de vehículos
                  </p>
                </li>
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Interfaz responsiva</p>
                </li>
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Monitoreo y control fácil
                  </p>
                </li>
              </ul>
              <div className="projects__modal-buttons">
                <a
                  href="https://github.com/x-jirox/TallerTrack"
                  className="details__project__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <i className="uil uil-github projects__button-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="projects__content">
          <div className="projects__image-container">
            <img
              src={summitticketsImg}
              alt="SummitTickets"
              className="projects__image"
            />
          </div>

          <div className="projects__body">
            <h3 className="projects__title">SummitTickets</h3>
            <span className="projects__button" onClick={() => toggleTab(2)}>
              Ver más
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
          </div>

          <div
            className={
              toggleState === 2
                ? "projects__modal active-modal"
                : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects__modal-close"
              ></i>
              <h3 className="projects__modal-title">SummitTickets</h3>
              <p className="projects__modal-description">
                Plataforma para compra de boletos creada en Angular 16,
                optimizada para una experiencia rápida y sencilla.
              </p>
              <ul className="projects__modal-projects grid">
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Interfaz responsiva y atractiva
                  </p>
                </li>
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Proceso de compra simple
                  </p>
                </li>
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Optimización de rendimiento
                  </p>
                </li>
              </ul>
              <div className="projects__modal-buttons">
                <a
                  href="https://github.com/x-jirox/SummitTickets"
                  className="details__project__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <i className="uil uil-github projects__button-icon"></i>
                </a>
                <a
                  href="https://summittickets.netlify.app/home"
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

        {/* Project 3 */}
        <div className="projects__content">
          <div className="projects__image-container">
            <img
              src={confortartImg}
              alt="ConfortArt"
              className="projects__image"
            />
          </div>

          <div className="projects__body">
            <h3 className="projects__title">ConfortArt</h3>
            <span className="projects__button" onClick={() => toggleTab(3)}>
              Ver más
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
          </div>

          <div
            className={
              toggleState === 3
                ? "projects__modal active-modal"
                : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects__modal-close"
              ></i>
              <h3 className="projects__modal-title">ConfortArt</h3>
              <p className="projects__modal-description">
                Tienda online de muebles creada en Astro, con diseño enfocado en
                experiencia de usuario.
              </p>
              <ul className="projects__modal-projects grid">
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Diseño moderno y adaptable
                  </p>
                </li>
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Compra fácil y rápida</p>
                </li>
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Optimización para dispositivos móviles
                  </p>
                </li>
              </ul>
              <div className="projects__modal-buttons">
                <a
                  href="https://github.com/x-jirox/Confort-art"
                  className="details__project__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <i className="uil uil-github projects__button-icon"></i>
                </a>
                <a
                  href="https://confort-art-swart.vercel.app/"
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

        {/* Project 4 */}
        <div className="projects__content">
          <div className="projects__image-container">
            <img
              src={tastyfoodImg}
              alt="TastyFood"
              className="projects__image"
            />
          </div>

          <div className="projects__body">
            <h3 className="projects__title">TastyFood</h3>
            <span className="projects__button" onClick={() => toggleTab(5)}>
              Ver más
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
          </div>

          <div
            className={
              toggleState === 5
                ? "projects__modal active-modal"
                : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects__modal-close"
              ></i>
              <h3 className="projects__modal-title">TastyFood</h3>
              <p className="projects__modal-description">
                Plataforma web de venta de comida rápida, desplegada en Vercel.
              </p>
              <ul className="projects__modal-projects grid">
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Diseño moderno y responsivo
                  </p>
                </li>
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Proceso de compra rápido
                  </p>
                </li>
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Optimizado para móviles
                  </p>
                </li>
              </ul>
              <div className="projects__modal-buttons">
                <a
                  href="https://github.com/x-jirox/food-app"
                  className="details__project__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <i className="uil uil-github projects__button-icon"></i>
                </a>
                <a
                  href="https://food-app-gules-one.vercel.app/"
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

      {/* Botón para más proyectos */}
      <div className="portfolio__more-projects">
        <a
          href="https://github.com/x-jirox?tab=repositories"
          className="details__project__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver más proyectos
          <i className="uil uil-arrow-right projects__button-icon"></i>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;