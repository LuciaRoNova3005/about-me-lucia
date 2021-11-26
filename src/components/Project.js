import React from "react";

function Project(props) {
  return (
    <article className="projects__item" id={props.id} key={props.id}>
      <h4 className="title4">{props.name}</h4>

      <img className="projects__item__img" src={props.img} alt={props.name} />
      <div className="projects__item__items">
        <p className="text">{props.description}</p>
        <div className="projects__item__items__link">
          <a href={props.git} target="_blank" rel="noreferrer">
            <i class="iconlink fab fa-github"></i>
          </a>
          <a href={props.web} target="_blank" rel="noreferrer">
            <i class="iconlink fas fa-laptop"></i>
          </a>
        </div>
      </div>

      <p className="text">{props.tools}</p>
    </article>
  );
}

export default Project;
