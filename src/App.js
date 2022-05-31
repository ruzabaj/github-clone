import React from "react";
import './App.css';
// import './style.scss'
import Profile from "./components/profile-info";
import Links from "./components/link";

function App() {
  return (
    <div className="app">
    <div className="parent-class container-md">
      <div className="profile-id">
        <Profile/>
      </div>
      <div className="functionalities">
        <Links/>
      </div>
    </div>
      
    </div>
    
  );
}

export default App;
