import React from "react";
import projects from "../data/es/projects";
import Project from "../components/Project";

function ProjectList() {
  const projectsElements = projects.map((project) => {
    return (
      <li className="card" key={project.id}>
        <Project
          id={projects.id}
          title={projects.title}
          img={projects.img}
          description={projects.description}
          web={projects.website}
          git={projects.githubUrl}
          tools={projects.tools}
        />
      </li>
    );
  });

  return (
    <section>
      <ul className="">{projectsElements}</ul>
    </section>
  );
}
export default ProjectList;
