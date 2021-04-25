import React from "react";
import "./style.scss";
//import "./style.css";

function Banner() {
  return (
    <div className="banner-bg">
      <div className="banner-container">
        <div className="banner-subcon">
          <div className="banner-text">
            <h1>Prepare young minds for a better future.</h1>
            <p>
              Let us help you advance students in Digital Technologies and other
              learning areas with our project-based learning program
            </p>
            <a href="a" className="banner-btn">
              LEARN MORE
            </a>
            <a href="a" className="banner-btn2">
              SIGN UP
            </a>
            <p className="smallprint">
              &#8727; Basic subscription includes the{" "}
            </p>
            <p className="smallprint">first 15 projects free of charge</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
