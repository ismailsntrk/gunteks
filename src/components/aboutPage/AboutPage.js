import React from "react";
import "./AboutPage.scss";
import machine from "../../assets/machine.jpg";
import AboutChapOne from "./aboutChapOne/AboutChapOne";
import AboutChapTwo from "./aboutChapTwo/AboutChapTwo";
const AboutPage = () => {
  return (
    <div>
      <div id="about-img" style={{ backgroundImage: `url(${machine})` }}>
        <div id="main-titles" >
          Hakkimizda
        </div>
        <div
          id="main-titles-two"
        >
          Tecrübemiz , İşimiz , Kalitemiz ...
        </div>
      </div>
      <div>
        <AboutChapOne></AboutChapOne>
      </div>
      <div>
        <AboutChapTwo></AboutChapTwo>
      </div>
    </div>
  );
};

export default AboutPage;
