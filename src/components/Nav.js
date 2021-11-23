import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="navList">
        <li>
          <div>
            <button className="button button_es">ES</button>
            <button className="button">EN</button>
          </div>
        </li>
        <li className="navItem">
          <a classname="nav_link" href="#aboutMe">
            About me
          </a>
        </li>
        <li className="navItem">
          <a classname="nav_link" href="#projects">
            Projetcs
          </a>
        </li>
        <li className="navItem">
          <a classname="nav_link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
