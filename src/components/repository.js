import { useState } from "react";
import "../sass/repo.scss";
// import Select from 'react-select';

export default function Repository() {
  const data = [
    {
      id: "1",
      name: "project-name1",
      status: "public",
      description: "description_1",
      language: "language_1",
      time: "two",
    },
    {
      name: "project-name1",
      status: "private",
      description: "description_1",
      language: "language_2",
      time: " one ",
    },
    {
      name: "project-name1",
      status: "private",
      description: "description_1",
      language: "language_2",
      time: " one ",
    },
    {
      name: "project-name1",
      status: "private",
      description: "description_1",
      language: "language_2",
      time: " one ",
    },
  ];
  const [dropDown, setdropDown] = useState("");

  return (
    <div className="container-md" id="repository">
      <div className="repository-title">
        <input type="text" placeholder="FInd a repository" />
        <select
          id="select-box"
          value={dropDown}
          onChange={(e) => e.target.value}
        >
          <option>Type</option>
          {data.map((index) => (
            <option value={index.id}> {index.status}</option>
          ))}
        </select>
        <select
          id="select-box"
          value={dropDown}
          onChange={(event) => setdropDown(event.target.value)}
        >
          <option>Language</option>
          {data.map((items) => (
            <option value={items.id}> {items.language}</option>
          ))}
        </select>
        <select
          id="select-box"
          value={dropDown}
          onChange={(event) => event.target.value}
        >
          <option>Sort</option>
          {data.map((i) => (
            <option value={i.id}>{i.time}</option>
          ))}
        </select>
        <button type="submit" id="new-repository">
          New
        </button>
      </div>

      <div className="row">
        {data.map((item) => (
          <div className="col-lg-" id="repository-box">
            <div id="respository-heading">
              <div id="repository-project">
                <a href="project-name">{item.name}</a>
                <span> {item.status}</span>
              </div>
              <div className="star">
                Star
                <select>
                  <option></option>
                </select>
              </div>
            </div>
            <div>
              <p className="description">{item.description}</p>
              <p>{item.status}</p>
              <p>updated {item.time} hours ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
