import React from "react";
import './Projects.css';

import Project from "./Project/Project";

const Projects = () => {
     
    let projectId = 1;

    const projects = [
        {
            title: '123',
            description: 'adfasdflkjasdlfjk',
            tecnologies: 'aslçdfsaldkjflskdfj',
            image: 'asdflasdçlfj'
        },
        {
            title: '123',
            description: 'adfasdflkjasdlfjk',
            tecnologies: 'aslçdfsaldkjflskdfj',
            image: 'asdflasdçlfj'
        },
        {
            title: '123',
            description: 'adfasdflkjasdlfjk',
            tecnologies: 'aslçdfsaldkjflskdfj',
            image: 'asdflasdçlfj'
        }
    ]

    return (
        <div className="projects" id="projects">
            <h1>My <span>Projects</span></h1>
            <div className="projects-showcase">
                {
                    projects.map( project => (
                        <a className="project-card-link" href="#projects" key={++projectId}><Project project={project} /></a>
                    ))
                }
            </div>
        </div>
     )
}

export default Projects;