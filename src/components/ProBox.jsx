import React from "react";
import "../dist/styles.css";
import github from "../images/github.png";
import imagedemo from "../images/demo.png";
import http_img from "../images/http.png";


const ProBox = ({ title, img, description, techno1 ="Tech I've used :", techno2, code, demo }) => {
  return (
    <section className="mainprojects">
      <div className="maindiv-one">
        <a href={demo} target="_blank">
          <img src={img}  alt="image"/>
        </a>
      </div>
      <div className="maindiv-two">
        <h2>{title}</h2>

        <h3>{description}</h3>
        <div className="div-tech">
          {" "}
          <h2>{techno1}</h2> 
          <h3>{techno2}</h3>
        </div>
        <div className="links-about-projects">
          {/* <span className="span-one">
            Code
            <a href={code}>
              <img src={github} alt="icon"/>
            </a>
          </span> */}
          <a href={demo} className="span-two button" target="_blank">
            URL Production <img src={http_img} alt="icon"/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProBox;
