import React from "react";
import { Link } from "react-router-dom";
import Routes  from "src/routes";

// css-styles,css
const tabs = () => {
  return (
  <div>
    <div id="second-navbar">
      <ul>
        <li>
          <Link to="/">Overview </Link>
        </li>
        <li>
          <Link to="/repository">Repositories </Link>
        </li>
        <li>
          <Link to="/project">Project </Link>
        </li>
        <li>
          <Link to="/packages">Packages </Link>
        </li>
        <li>
          <Link to="/stars">Stars </Link>
        </li>
      </ul>
      <hr/>
      <Routes/>
    </div>
   
  </div>
  );
};

export default tabs;
