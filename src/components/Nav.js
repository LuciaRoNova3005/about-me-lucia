import React from "react";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const [t, i18n] = useTranslation("nav");
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list__item">
          <a className="nav__list__item__link" href="#projects">
            {t("nav.nav1")}
          </a>
        </li>
        <li className="nav__list__item">
          <a className="nav__list__item__link" href="#aboutme">
            {t("nav.nav2")}
          </a>
        </li>
        <li className="nav__list__item">
          <a className="nav__list__item__link" href="#contact">
            {t("nav.nav3")}
          </a>
        </li>
        <li>
          <button className="btn es" onClick={() => i18n.changeLanguage("es")}>
            ES
          </button>

          <button className="btn en" onClick={() => i18n.changeLanguage("en")}>
            EN
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
