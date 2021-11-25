import React from "react";

function AboutMe() {
  return (
    <>
      <section id="aboutme" className="aboutme">
        <article className="aboutme__article">
          <h3 className="title3">Sobre mí</h3>
          <p className="text">
            Con formación en publicidad y realización de audiovisuales tras
            trabajar en proyectos de IT se despertó mi interés por la
            programación.
          </p>
          <p className="text">
            Me considero una persona trabajadora creativa, con buen humor y
            habituda trabajar en equipo
          </p>
        </article>
        <article className="aboutme__skills">
          <h3 className="title3">Skills</h3>
          <ul className="aboutme__skills__list">
            <li className="aboutme__skills__list__item">
              <i class="icon fab fa-html5"></i>
            </li>
            <li className="aboutme__skills__list__item">
              <i class="icon fab fa-css3-alt"></i>
            </li>
            <li className="aboutme__skills__list__item">
              <i class="icon fab fa-node-js"></i>
            </li>
            <li className="aboutme__skills__list__item">
              <i class="icon fab fa-sass"></i>
            </li>
            <li className="aboutme__skills__list__item">
              <i class="icon fab fa-bootstrap"></i>
            </li>
            <li className="aboutme__skills__list__item">
              <i class="icon fab fa-js"></i>
            </li>
            <li className="aboutme__skills__list__item">
              <i class="icon fab fa-react"></i>
            </li>
            <li className="aboutme__skills__list__item">
              <i class="icon fab fa-gulp"></i>
            </li>
            <li className="aboutme__skills__list__item">
              <i class="icon fas fa-database"></i>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
export default AboutMe;
