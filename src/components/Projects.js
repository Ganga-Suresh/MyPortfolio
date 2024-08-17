import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects.json') 
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.project_name}</h3>
            <img src={project.project_thumbnail} alt={project.project_name} />
            <p>{project.project_description}</p>
            <p>Languages: {project.project_languages}</p>
            <a href={project.project_url}>View Project</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
