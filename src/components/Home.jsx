import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Findpet from "./Findpet";
import OurModel from "./OurModel";

const Home = () => {
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

export default Home;
