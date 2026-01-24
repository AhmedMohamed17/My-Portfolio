import AboutImg from "../images/about-img.webp";
import RoundedText from "../images/text2.svg";
import WorkingEmoji from "../images/working-emoji.png";
import React from "react";

function AboutMe() {
  return (
    <React.Fragment>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
              <span>
                <img src={RoundedText} alt="text" />
              </span>
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                Front-end Developer <br /> based in Cairo, Egypt 📍
              </h4>
              <p className="para-text">
                My Name is : Ahmed Mohamed Sayed
                <br />
                <br />
                A dedicated web developer with a profound interest in mastering
                Front-end Development.
                <br />
                <br />
                I graduated from Thebes Academy in 2021 with a Bachelor’s degree in Computer Science from the Department of Computer and Information Sciences.
                <br />
                <br />
                Recipient of the{" "}
                <a href="https://iti.gov.eg/">
                  Information Technology Institute (ITI){" "}
                </a>
                scholarship, commencing in July 2023 and graduating in November
                2023.
                <br />
                <br />
                Participated in competitions such as the Wildlife Challenge,
                focused on wildlife conservation and public awareness through
                programming and technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default AboutMe;
