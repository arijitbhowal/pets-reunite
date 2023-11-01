import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Findpet from "./components/Findpet";
import OurModel from "./components/OurModel";

function App() {
  return (
    <div className="nav">
      <Navbar />
      <div className="main-content">
        <Findpet />
        <OurModel />
      </div>
    </div>
  );
}

export default App;
