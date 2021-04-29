import React from "react";

import "./Projects.css";

import Toptext from "./Components/Toptext/Toptext";
import Sidebarcheckbox from "./Components/Sidebarcheckbox/Sidebarcheckbox";
import ProjectCards from "./Components/ProjectCards/ProjectCards";
import Buttonend from "./Components/Buttonend/Buttonend";

function Projects() {
  return (
    <div>
      <Toptext />
      <div className="sameRow">
        <Sidebarcheckbox />
        <ProjectCards></ProjectCards>
      </div>
      <Buttonend></Buttonend>
    </div>
  );
}
export default Projects;
