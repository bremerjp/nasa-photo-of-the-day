import React from "react";
import "./App.css";
import PhotoData from "./components/PhotoData";

function App() {
  return (
    <div className="App">
      <h1>NASA Astronomy Picture of the Day</h1> 
      <PhotoData />
    </div>
  );
}

export default App;
