import React from "react";
import { ReactComponent as Scroll } from "../../assets/scroll.svg";

const Scrolldown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__croll-button button--flex">
        <Scroll />
        <span className="home__scroll-name">Scroll Down</span>
        <i class="uil uil-arrow-down home__scroll-arrow"></i>
      </a>
    </div>
  );
};

export default Scrolldown;
