import React from "react";
import Nav from "./Nav.js";

const Cover = () => {
  return (
    <>
      <section id="header" className="header">
        <div className="cover">
          <Nav></Nav>
        </div>
        <div className="coverText">
          <h1 className="cover_mainTitle">Lucía Rodríguez</h1>
          <h2 className="cover_title"></h2>
          <p className="cover_text"></p>
        </div>
      </section>
    </>
  );
};

export default Cover;
