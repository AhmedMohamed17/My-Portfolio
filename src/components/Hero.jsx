import "../dist/styles.css";
import Waving from "../images/waving.png";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import React from "react";

const skillsIcons = [
  {
    img: "https://skillicons.dev/icons?i=html,css",
    id: 1,
  },
  {
    img: "https://skillicons.dev/icons?i=js,ts",
    id: 2,
  },
  {
    img: "https://skillicons.dev/icons?i=react,redux",
    id: 3,
  },
  {
    img: "https://skillicons.dev/icons?i=tailwind,scss",
    id: 4,
  },
  {
    img: "https://skillicons.dev/icons?i=nodejs,mongodb,express",
    id: 5,
  },
];

function Hero() {
  return (
    <React.Fragment>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Front-End Developer</h1>
                <img src={Waving} alt="waving_hand" />
                <p>
                Hi, I'm Ahmed Mohamed, a Front-end Developer with 3+ years of experience building scalable web applications using React.js and TypeScript. I specialize in delivering production-ready solutions with strong architecture, problem-solving skills, and effective team collaboration. 📍
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/ahmed-mohamed-642a9836b/"
                  >
                    <IconBrandLinkedin width={32} height={32} />
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/AhmedMohamed17"
                  >
                    <IconBrandGithub width={32} height={32} />
                  </a>
                </span>
              </div>

              <div className="hero-img"></div>
            </div>

            {/*  */}
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.id}>
                      <img src={icon.img} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Hero;
