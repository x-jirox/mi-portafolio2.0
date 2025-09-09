import React from "react";
import Social from "./social";
import Data from "./Data";
import Scrolldown from "./scrolldown";
import "./home.css";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <Scrolldown />
      </div>
    </section>
  );
};

export default Home;
