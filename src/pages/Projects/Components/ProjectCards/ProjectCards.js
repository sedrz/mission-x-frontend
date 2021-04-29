import React from "react";

import "./ProjectCards.css";

import Project01 from "../../../../assets/projects/Project01.jpg";
import Project02 from "../../../../assets/projects/Project02.jpg";
import Project03 from "../../../../assets/projects/Project03.jpg";
import Project04 from "../../../../assets/projects/Project04.jpg";
import Project05 from "../../../../assets/projects/Project05.jpg";
import Project06 from "../../../../assets/projects/Project06.jpg";
import Project07 from "../../../../assets/projects/Project07.jpg";
import Project08 from "../../../../assets/projects/Project08.jpg";
import Project09 from "../../../../assets/projects/Project09.jpg";
import Project10 from "../../../../assets/projects/Project10.jpg";
import Project11 from "../../../../assets/projects/Project11.jpg";
import Project12 from "../../../../assets/projects/Project12.jpg";
import Project13 from "../../../../assets/projects/Project13.jpg";
import Project14 from "../../../../assets/projects/Project14.jpg";
import Project15 from "../../../../assets/projects/Project15.jpg";

const ProjectCards = () => {
  const projects = [
    {
      title: "Introduction",
      difficulty: "BEGINNER",
      imageURL: Project01,
      ActivityType: "Animation",
    },
    {
      title: "My Birthday",
      difficulty: "BEGINNER",
      imageURL: Project02,
      ActivityType: "Animation",
    },
    {
      title: "10 Block Challenge",
      difficulty: "BEGINNER",
      imageURL: Project03,
      ActivityType: "Animation",
    },
    {
      title: "Build a band",
      difficulty: "BEGINNER",
      imageURL: Project04,
      ActivityType: "Animation",
    },
    {
      title: "The bear and the monkey",
      difficulty: "BEGINNER",
      imageURL: Project05,
      ActivityType: "Animation",
    },
    {
      title: "Debugging",
      difficulty: "BEGINNER",
      imageURL: Project06,
      ActivityType: "Animation",
    },
    {
      title: "About me",
      difficulty: "BEGINNER",
      imageURL: Project07,
      ActivityType: "Animation",
    },
    {
      title: "I am here",
      difficulty: "BEGINNER",
      imageURL: Project08,
      ActivityType: "Animation",
    },
    {
      title: "Funny faces",
      difficulty: "BEGINNER",
      imageURL: Project09,
      ActivityType: "Animation",
    },
    {
      title: "It tickles",
      difficulty: "BEGINNER",
      imageURL: Project10,
      ActivityType: "Animation",
    },
    {
      title: "Penguin in a Desert",
      difficulty: "BEGINNER",
      imageURL: Project11,
      ActivityType: "Animation",
    },
    {
      title: "Time Travel",
      difficulty: "BEGINNER",
      imageURL: Project12,
      ActivityType: "Animation",
    },
    {
      title: "Birthday Card",
      difficulty: "BEGINNER",
      imageURL: Project13,
      ActivityType: "Animation",
    },
    {
      title: "The Lion and the Mouse Part 1",
      difficulty: "BEGINNER",
      imageURL: Project14,
      ActivityType: "Animation",
    },
    {
      title: "The Lion and the",
      difficulty: "BEGINNER",
      imageURL: Project15,
      ActivityType: "Animation",
    },
  ];
  return (
    <>
      <div className="pics">
        <div className="pictures">
          {projects.map((project, index) => {
            return (
              <div>
                <img className="pic" src={project.imageURL} alt="Project01" />
                <h4 className="h4"> {project.title} </h4>{" "}
                <p className="p3">
                  {project.difficulty} | {project.ActivityType}
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
