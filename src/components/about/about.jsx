import React from "react";
import "./about.css";
import AboutImg from "../../assets/media/about.jpg";
import CV from "../../assets/documents/Lenin_Correa_CV.pdf";
import Info from "./info";
import { ReactComponent as Files } from "../../assets/media/files.svg";
import Qualification from "./qualification";
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Acerca de mi</h2>
      <span className="section__subtitle">Mi perfil</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            Tecnólogo en Desarrollo de Software con experiencia en desarrollo
            web usando Angular, TypeScript, JavaScript, HTML y CSS.
            Familiarizado con metodologías ágiles y buenas prácticas de
            desarrollo.
          </p>
          <a download="" href={CV} className="button button-flex">
            Descargar CV
            <Files />
          </a>
        </div>
      </div>
      <Qualification />
    </section>
  );
};

export default About;
