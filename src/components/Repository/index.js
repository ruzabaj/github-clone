import axios from "axios";
import { useState,  useEffect } from "react";
import "../../sass/repo.scss";
import Select from "./Select";

export default function Repository() {
  const [repo, setUserRepo] = useState([]);
  const [dropDown, setdropDown] = useState("");
  
  useEffect(() => {
    axios.get(`https://api.github.com/users/ruzabaj/repos`)
    .then((res) => {
      setUserRepo(res.data);
      console.log(res.data);
    })
  }, []);
  
  const getLanguage= [...new Set (repo.map((element)=>{
    return (element.language)
  }))]

 const filterItem=()=>{
   alert("hi")
 }
    
    return (
    <div className="container-md" id="repository">
      <Select filterItem={filterItem} language={getLanguage}  dropdown={dropDown} repo={repo}/>  

      <div className="row">
        {repo.map((item, key) => (
          <div className="col-lg-" id="repository-box" key={key}>
            <div id="respository-heading">
              <div id="repository-project">
                <a href="project-name">{item.name}</a>
                <span> {item.private}</span>
              </div>
              <div className="star">
                <select>
                  <option>Star</option>
                </select>
                  <input type="checkbox" className="star"/>
              </div>
            </div>
            <div>
              <p className="description">{item.description}</p>
              <p>{item.status}</p>
              <div className="descriptionn-time-language">
                <div>
                  <p>{item.language}</p>
                  <span class="dot"/>
                  </div>
                <div><p>updated {item.updated_at} hours ago</p></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
