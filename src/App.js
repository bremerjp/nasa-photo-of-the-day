import React from "react";
import "./App.css";
import PhotoData from "./components/PhotoData";



function App() {
  return (
    <div style={{backgroundColor: '#f1f1f1'}} className="App p-3">
      <h1>NASA Astronomy Picture of the Day</h1> 
      <PhotoData />
    </div>
  );
}

export default App;
