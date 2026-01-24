import React from "react";
import "../dist/styles.css";
import github from "../images/github.png";
import imagedemo from "../images/demo.png";

const ProBox = ({ title, img, description, techno1, techno2, code, demo }) => {
  return (
    <section className="mainprojects">
      <div className="maindiv-one">
        <img src={img}  alt="image"/>
      </div>
      <div className="maindiv-two">
        <h2>{title}</h2>

        <h3>{description}</h3>
        <div className="div-tech">
          {" "}
          <h2>{techno1}</h2> <h3>{techno2}</h3>
        </div>
        <div className="links-about-projects">
          <span className="span-one">
            Code
            <a href={code}>
              <img src={github} alt="icon"/>
            </a>
          </span>
          <span className="span-two">
            Live Demo
            <a href={demo}>
              <img src={imagedemo} alt="icon"/>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProBox;
