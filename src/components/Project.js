import React from "react";

function Project(props) {
  return (
    <article className="" id={props.id} key={props.id}>
      <h2 className="">{props.name}</h2>
      <img className="" src={props.img} alt={props.name} />
      <p>{props.description}</p>
      <div className="">
        <a href={props.git} target="_blank" rel="noreferrer">
          <i class="fab fa-github"></i>
        </a>
        <a href={props.web} target="_blank" rel="noreferrer">
          <i class="fas fa-laptop"></i>
        </a>
      </div>
      <h3 className="">{props.tools}</h3>
    </article>
  );
}

export default Project;
