import React from "react";

function Project(props) {
  return (
    <article className="projects__card" id={props.id} key={props.id}>
      <div className="projects__card__infor">
        <a href={props.web} target="_blank" rel="noreferrer">
          <img
            className="projects__card__infor__img"
            src={props.img}
            alt={props.name}
          />
        </a>
        <div className="projects__card__infor__text">
          <h4 className="title4">{props.name}</h4>
          <p className="text">{props.description}</p>
          <div className="projects__card__infor__text__link">
            <a href={props.git} target="_blank" rel="noreferrer">
              <i class="iconlink fab fa-github"></i>
            </a>
            <a href={props.web} target="_blank" rel="noreferrer">
              <i class="iconlink fas fa-laptop"></i>
            </a>
          </div>

          <p className="tools">{props.tools}</p>
        </div>
      </div>
    </article>
  );
}

export default Project;
