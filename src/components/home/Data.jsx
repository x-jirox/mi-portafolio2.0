import React from "react";
import { ReactComponent as Hand } from "../../assets/media/hand.svg";
import { ReactComponent as Send } from "../../assets//media/send.svg";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        {" "}
        Lenin Correa
        <Hand />
      </h1>
      <h3 className="home__subtitle">Desarrollador de Software</h3>
      <p className="home__description">
        Enfocado en el desarrollo de aplicaciones web interactivas, siempre
        aprendiendo y enfrentando nuevos retos.
      </p>
      <a href="#contact" className="button button--flex">
        Contactame
        <Send />
      </a>
    </div>
  );
};

export default Data;
