import React from "react";
import img from "./../img/projects/02-big.jpg";
import BtnGitHub from "../Components/BtnGitHub/BtnGitHub";
import { useParams } from "react-router-dom";
import { projectsList } from "../Components/Helpers/projectsList";

const Project = () => {
  const { id } = useParams();
  const project = projectsList[id];
  console.log(project);
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>
          <p>{id}</p>
          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>
        </div>

        {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
      </div>
    </main>
  );
};

export default Project;
