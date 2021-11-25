import React from "react";
import projects from "../data/es/projects";
import Project from "../components/Project";

function ProjectList() {
  const projectsElements = projects.map((project) => {
    return (
      <li className="" key={project.id}>
        <Project
          id={project.id}
          name={project.title}
          img={project.img}
          description={project.description}
          web={project.website}
          git={project.githubUrl}
          tools={project.tools}
        />
      </li>
    );
  });

  return (
    <section className="projects" id="projects">
      <ul className="">{projectsElements}</ul>
    </section>
  );
}
export default ProjectList;
