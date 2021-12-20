import React from "react";
import Nav from "./Nav.js";
import imagen from "../img/lucia-cv.jpg";
import LinkContact from "./linkContact.js";

const Cover = () => {
  return (
    <>
      <section id="header" className="header">
        <Nav></Nav>

        <div className="cover" id="cover">
          <div className="cover__text">
            <h1 className="cover__text__title1">Lucía Rodríguez</h1>
            <h2 className="cover__text__title2">Front-end Developer</h2>
            <LinkContact></LinkContact>
          </div>

          <img
            className="cover__img"
            src={imagen}
            alt="Lucía Rodríguez Nova"
          ></img>
        </div>
      </section>
    </>
  );
};

export default Cover;
