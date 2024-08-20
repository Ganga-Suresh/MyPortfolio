
import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = ({ category }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => {
        // Filter projects based on the category prop
        const filteredProjects = data.filter(project => project.category === category);
        setProjects(filteredProjects);
      })
      .catch((error) => console.error('Error fetching projects:', error));
  }, [category]);

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.project_thumbnail} alt={project.project_name} className="project-thumbnail" />
          <h3 className="project-title">{project.project_name}</h3>
          <p className="project-description">{project.project_description}</p>
          {project.project_url && (
            <a href={project.project_url} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          )}
          <p className="project-languages">{project.project_languages}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
