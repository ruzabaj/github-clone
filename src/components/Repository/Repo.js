import React from 'react'

const Repo = ({item , key}) => {
  return (
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
  )
}

export default Repo