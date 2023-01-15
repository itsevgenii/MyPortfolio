import React from "react";
import Project from "../Components/Project/Project";
import "./Projects.css";
import { projectsList } from "../Components/Helpers/projectsList";
import shortid from "shortid";

function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projectsList.map((project, index) => (
            <Project
              key={shortid.generate()}
              title={project.title}
              img={project.img}
              index={index}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Projects;
