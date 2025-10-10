import React, { useState } from "react";
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
          <div>
            <i className="uil uil-web-grid projects__icon"></i>
            <h3 className="projects__title">
              Desarrollo <br /> de Productos
            </h3>
          </div>
          <span className="projects__button" onClick={() => toggleTab(1)}>
            Ver más
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>
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
              <h3 className="projects__modal-title">Desarrollo de Productos</h3>
              <p className="projects__modal-description">
                Desarrollo de interfaces web simples con Angular y React.
              </p>
              <ul className="projects__modal-projects grid">
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Interfaces responsivas</p>
                </li>
              </ul>
                        <span className="projects__button">
            git hub
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>
                                  <span className="projects__button">
            live demo
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>
            </div>
          </div>
        </div>

                <div className="projects__content">
          <div>
            <i className="uil uil-web-grid projects__icon"></i>
            <h3 className="projects__title">
              Desarrollo <br /> de Productos
            </h3>
          </div>
          <span className="projects__button" onClick={() => toggleTab(1)}>
            Ver más
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>
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
              <h3 className="projects__modal-title">Desarrollo de Productos</h3>
              <p className="projects__modal-description">
                Desarrollo de interfaces web simples con Angular y React.
              </p>
              <ul className="projects__modal-projects grid">
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Interfaces responsivas</p>
                </li>
              </ul>
                        <span className="projects__button">
            git hub
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>
                                  <span className="projects__button">
            live demo
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>
            </div>
          </div>
        </div>

                <div className="projects__content">
          <div>
            <i className="uil uil-web-grid projects__icon"></i>
            <h3 className="projects__title">
              Desarrollo <br /> de Productos
            </h3>
          </div>
          <span className="projects__button" onClick={() => toggleTab(1)}>
            Ver más
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>
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
              <h3 className="projects__modal-title">Desarrollo de Productos</h3>
              <p className="projects__modal-description">
                Desarrollo de interfaces web simples con Angular y React.
              </p>
              <ul className="projects__modal-projects grid">
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Interfaces responsivas</p>
                </li>
              </ul>
                        <span className="projects__button">
            git hub
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>
                                  <span className="projects__button">
            live demo
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>
            </div>
          </div>
        </div>

                <div className="projects__content">
          <div>
            <i className="uil uil-web-grid projects__icon"></i>
            <h3 className="projects__title">
              Desarrollo <br /> de Productos
            </h3>
          </div>
          <span className="projects__button" onClick={() => toggleTab(1)}>
            Ver más
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>
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
              <h3 className="projects__modal-title">Desarrollo de Productos</h3>
              <p className="projects__modal-description">
                Desarrollo de interfaces web simples con Angular y React.
              </p>
              <ul className="projects__modal-projects grid">
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Interfaces responsivas</p>
                </li>
              </ul>
                        <span className="projects__button">
            git hub
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>
                                  <span className="projects__button">
            live demo
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Portfolio;
