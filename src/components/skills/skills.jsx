import React from "react";
import Frontend from "./frontend";
import Backend from "./backend";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Habilidades</h2>
      <span className="section__subtitle">Mi nivel tecnico</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
