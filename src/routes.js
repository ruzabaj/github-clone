import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./components/overview";
import Repository from "./components/Repository";
import Project from "./components/project";
import Stars from "./components/Stars";
import NewProject from "./components/NewProject";
import "./sass/styles.scss";

export default function routes() {
  return (
    <div>
      <div id="profile-navbar">
          <Routes>
            <Route exact path="/" element={<Overview/>} />
            <Route path="/repository" element={<Repository/>} />
            <Route path="/project" element={<Project/>} />
            <Route path="/stars" element={<Stars/>} />
            <Route path="/new" element={<NewProject/>} />
          </Routes>
      </div>
      {/* <Overview /> */}
    </div>
  );
}
