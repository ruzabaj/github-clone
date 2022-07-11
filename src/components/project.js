import React, {useState, useEffect} from "react";
import "../sass/project.scss";
import "../routes"
import axios from "axios";
import {projectDetail} from '../../src/services'

export default function Project () {

  const [project, setProject] = useState({})

  // useEffect(() => {
  //   axios.get(` https://api.github.com/users/ruzabaj/projects`).then(res=>{
  //     console.log(res.data)
  //     setProject(res.data)
  //   })
  // }, [])
useEffect(()=>{
  getProject();
})

  const getProject = async()=>{
    try{
      const response= await projectDetail()
      setProject(response.data)
    }
    catch{

    }
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
          <button type="submit" id="new-project" >  New Project</button>
          <a href="learn">Learn More</a>
        </div>
      </div>
    </div>
  );
};


