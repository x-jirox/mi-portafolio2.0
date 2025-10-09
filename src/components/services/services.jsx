import React, { useState } from "react";
import "./services.css";

const Servicios = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Servicios</h2>
      <span className="section__subtitle">Lo que puedo ofrecer</span>

      <div className="services__container container grid">
        {/* Servicio 1 */}
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Desarrollo <br /> de Productos
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            Ver más
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Desarrollo de Productos</h3>
              <p className="services__modal-description">
                Desarrollo de interfaces web simples con Angular y React.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Interfaces responsivas</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Componentes reutilizables</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Integración con bases de datos</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Servicio 2 */}
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Diseño <br />
              UI/UX
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            Ver más
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Diseño UI/UX</h3>
              <p className="services__modal-description">
                Interfaces intuitivas y fáciles de usar.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Flujo de usuario optimizado</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Prototipos interactivos</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Servicio 3 */}
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Diseño <br />
              Visual
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            Ver más
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Diseño Visual</h3>
              <p className="services__modal-description">
                Materiales gráficos coherentes y claros.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Banners y elementos gráficos</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Paletas y tipografía consistentes</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
