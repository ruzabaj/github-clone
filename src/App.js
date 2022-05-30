import React from "react";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="left-content">
          <img className="github" src="github.png" alt="github-logo"/>
            <input type="text"  placeholder="Search or jump to..."/>
              <div className="link-pages">
                  <ul>
                    <li>Pull Request</li>
                    <li>Issues</li>
                    <li>Marketplace</li>
                    <li>Explore</li>
                  </ul>
              </div>   
        </div>
        <div className="right-content">
          <ul>
            <li><FontAwesomeIcon icon={faCoffee} /></li>
            <li><FontAwesomeIcon icon={faCoffee} /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
