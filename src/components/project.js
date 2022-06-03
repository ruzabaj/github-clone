import React from "react";
// import { useHistory } from "react-router-dom";
import "../sass/project.scss";
import "../routes"

const project = () => {
  // let history = useHistory();
  function newProject() {
    // history.push("/new");
    console.log("hi")
    // how to push routes to another page
  }
  return (
    <div>
      <div class="project-headbar">
        <input type="text" placeholder="is:open sort:created-desc" />
        <button type="submit" id="new-project">
          New Project
        </button>
      </div>
      <div class="project-box">
        <div class="open-close"> </div>
        <div class="project-log"> 
          <p>You don't have any projects yet</p>
          <button type="submit" id="new-project" onClick={newProject}>  New Project</button>
          <a href="learn">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default project;
