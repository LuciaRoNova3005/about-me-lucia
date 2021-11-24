import React from "react";
import Nav from "./Nav.js";
import imagen from "../img/lucia-cv.jpg";

const Cover = () => {
  return (
    <>
      <section id="header" className="header">
        <Nav></Nav>

        <div className="cover">
          <div className="cover__text">
            <h1 className="cover__text__title1">Lucía Rodríguez</h1>
            <h2 className="cover__text__title">Junior Frontend Developer</h2>
          </div>
          <img className="cover__img" src={imagen} alt=""></img>
        </div>
      </section>
    </>
  );
};

export default Cover;
