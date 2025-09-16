import React from "react";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container geid">
        <div className="services__content">
          <div>
            <i class="uil uil services__icon"></i>
            <h3 className="services__title"></h3>
          </div>
          <span className="services__button">
            View Mpre
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-tittle"></h3>
              <p className="services__modal-sescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
