import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list__item">
          <a className="nav__list__item__link" href="#projects">
            Proyectos
          </a>
        </li>
        <li className="nav__list__item">
          <a className="nav__list__item__link" href="#aboutme">
            Sobre mi
          </a>
        </li>
        <li className="nav__list__item">
          <a className="nav__list__item__link" href="#contact">
            Contacto
          </a>
        </li>
        <li>
          <button className="btn es">ES</button>
          <button className="btn en">EN</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
