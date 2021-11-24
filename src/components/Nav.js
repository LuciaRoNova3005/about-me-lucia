import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list__item">
          <a className="nav__list__item__link" href="#aboutMe">
            About me
          </a>
        </li>
        <li className="nav__list__item">
          <a className="nav__list__item__link" href="#projects">
            Projetcs
          </a>
        </li>
        <li className="nav__list__item">
          <a className="nav__list__item__link" href="#contact">
            Contact
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
