import React, {useState, useRef} from "react";

const Repo = ({ item, key, status, repo }) => {

  const reference = useRef();

  const languageColor=()=> {
      reference.current.style.backgroundColor = 'orange';
    }

  return (
    <div className="col-lg-" id="repository-box" key={key}>
      <div id="respository-heading">
        <div id="repository-project">
          <a href="project-name">{item.name}</a>
          <span> {status}</span>
        </div>
        <div className="star">
          <select>
            <option>Star</option>
          </select>
          <input type="checkbox" className="star" />
        </div>
      </div>
      <div>
        <p className="description">{item.description}</p>
        <p>{item.status}</p>
        <div className="descriptionn-time-language" onClick={languageColor}>
          <span class="dot" ref={reference} />
          <div>
            <p >{item.language}</p>
          </div>
          <div>
            <p>updated {item.updated_at} hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repo;
