import React from "react";
import "./BtnGitHub.css";
import gitHubIcon from "../../img/icons/gitHub-black.svg";
const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" className="btn-outline">
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
