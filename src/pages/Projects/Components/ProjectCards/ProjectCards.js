import React, { useState, useEffect } from "react";

import "./ProjectCards.css";

const ProjectCards = () => {
  const [projects, setProjects] = useState([]);

  const callProjectsAPI = () => {
    const projectsAPIURL = `http://localhost:4000/api/project`;
    fetch(projectsAPIURL)
      .then((res) => res.json())
      .then((projects) => {
        setProjects(projects);
      });
  };

  // every time the component is mounted/unmounted, call the arrow fn
  useEffect(() => {
    callProjectsAPI();
  }, []);

  return (
    <>
      <div className="pics">
        <div className="pictures">
          {projects.map((project, index) => {
            return (
              <div>
                <img className="pic" src={project.imageURL} alt="Project01" />
                <h4 className="h4"> {project.Title} </h4>{" "}
                <p className="p3">
                  {project.Course} | {project.ActivityType}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
