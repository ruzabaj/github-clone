import React from "react";
import './App.css';
// import './style.scss'
import Profile from "./components/profile-info";
import Functionalities from "./components/functionalities";

function App() {
  return (
    <div className="app">
    <div className="parent-class container-md">
      <div className="profile-id">
        <Profile/>
      </div>
      <div className="functionalities">
        <Functionalities/>
      </div>
    </div>
      
    </div>
    
  );
}

export default App;
