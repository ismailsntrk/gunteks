import React from "react";
import AboutUs from "../aboutUs/AboutUs";
import Carousel from "../carousel/Carousel";
import "./Dashboard.scss";
const Dashboard = () => {
  return (
    <div id="dash-main">  
      <Carousel></Carousel>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Dashboard;
