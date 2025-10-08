import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-medal about__icon"></i>
        <h3 className="about__title">Experiencia</h3>
        <span className="about__subtitle">1 Año freelancer </span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completado</h3>
        <span className="about__subtitle">5+ Proyectos</span>
      </div>

      <div className="about__box">
        <i class="bx bx-headphone about__icon"></i>
        <h3 className="about__title">Soporte</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
