import { useState, UseEffect } from "react";
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
  ];
  const [dropDown ,setdropDowm] =useState(data);


  return (
    <div className="container-md" id="repository">
      <div className="repository-title">
        <input type="text" placeholder="FInd a repository" />

        {data.map((items) => (
          <diV>
            <select id="select-box" >
              <option>Type</option>
              <option key={items.id} value={items.status}>
                {items.id}
              </option> 
              {console.log(data[0].status)}
            </select>
            <select id="select-box">
              <option>Language</option>
              <option  key={items.id}>{items.language}</option>
            </select>
            <select id="select-box">
              <option>Sort</option>
              <option>Last Updated</option>
              <option  key={items.id}>{items.name}</option>
              <option>Stars</option>
            </select>
          </diV>
        ))}
        <button type="submit" id="new-repository">
          New
        </button>
      </div>

      <div class="row">
        {data.map((item) => (
          <div class="col-lg-" id="repository-box">
            <div id="respository-heading">
              <div id="repository-project">
                <a href="project-name">{item.name}</a>
                <span> {item.status}</span>
              </div>
              <div class="star">
                Star
                <select>
                  <option></option>
                </select>
              </div>
            </div>
            <div>
              <p class="description">{item.description}</p>
              <p>{item.status}</p>
              <p>updated {item.time} hours ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
