import React from "react";
import './Project.css';


const Project = ({ project }) => {

    const style = {
        backgroundImage: `url(/${project.image})`,
    }

    return (
        <div className="project-card">
            <div className="project-image" style={style}></div>
            <div className="project-title">{project.title}</div>
            <div className="project-description">{project.description}</div>
            <div className="project-tecnologies"><span>Tecnologies Used</span><div>{project.tecnologies}</div></div>
        </div>
    )
}

export default Project;