import React from "react";
import { useTranslation } from "react-i18next";

function AboutMe() {
  const [t] = useTranslation("aboutme");
  return (
    <>
      <section className="aboutme">
        <article className="aboutme__skills">
          <h3 className="title3">{t("aboutme.title")}</h3>
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
        <article id="aboutme" className="aboutme__article">
          <h3 className="title3">{t("aboutme.title2")}</h3>
          <p className="text">{t("aboutme.text")}</p>
          <p className="text">{t("aboutme.text2")}</p>
        </article>
      </section>
    </>
  );
}
export default AboutMe;
