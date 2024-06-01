import React from "react";
import './Project.css';

const Project = ({ project }) => {

    return (
        <div className="project-card">
            <div className="project-image">{project.image}</div>
            <div className="project-title">{project.title}</div>
            <div className="project-description">{project.description}</div>
            <div className="project-tecnologies">{project.tecnologies}</div>
        </div>
    )
}

export default Project;