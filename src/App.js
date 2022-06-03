import React from "react";
import Profile from "./components/Profile";
import Tabs from "./components/Tabs";
import './App.css';


function App() {
  return (
    <div className="app">
     <div className="parent-class container-md">
      <div className="profile-id">
        <Profile/>
      </div>
      <div className="functionalities">
        <Tabs/>
      </div>
    </div>
      
    </div>
    
  );
}

export default App;
