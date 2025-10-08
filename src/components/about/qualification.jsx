import React, { useState } from "react";


const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Cualificacion</h2>
      <span className="section__subtitle">Mi viaje personal</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Educacion
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experiencia
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">CIencias Basicas</h3>
                <span className="qualification__subtitle">
                  Ecuador - Alicia Loza meneses
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2017 - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Desarrollador de Software</h3>
                <span className="qualification__subtitle">
                  Ecuador - Instituto Superior Tecnologico del Azuay
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Diseño Web</h3>
                <span className="qualification__subtitle">
                  Ecuador - FreeCodeCamp
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Fundamentos C# Microsoft</h3>
                <span className="qualification__subtitle">
                  Ecuador - FreecodeCamp
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2025
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Aplicaciones de Escritorio con Spring Boot</h3>
                <span className="qualification__subtitle">
                  Ecuador - Freelancer
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Desarrollo Web con Angular</h3>
                <span className="qualification__subtitle">
                  Ecuador - Freelancer
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Desarrollo Web con Astro</h3>
                <span className="qualification__subtitle">
                  Ecuador - Freelancer
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Desarrollo Web con React</h3>
                <span className="qualification__subtitle">
                  Ecuador - Freelancer
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
