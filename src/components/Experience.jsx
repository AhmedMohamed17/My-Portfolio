import React from "react";

import company1 from "../images/wakeb.png";
import company2 from "../images/gamifier.jpg";
import company3 from "../images/digitopia.webp";

function Experience() {
  const experiences = [
    {
      company: "Wakeb",
      location: "Cairo, Egypt",
      role: "Frontend Developer",
      date: "Feb 2024 – Present",
      logo: company1,
      description: [
        "Transform Figma designs into responsive and visually appealing user interfaces using Tailwind CSS.",
        "Develop and maintain web applications using React, specifically for marketing campaigns, ensuring they are optimized for performance and user engagement.",
        "Optimize website structure, metadata, and content to improve search engine performance.",
        "Write clean, maintainable, and scalable code following industry standards and best practices.",
      ],
    },
    {
      company: "Gamifier SA",
      location: "Riyadh, Saudi Arabia (Remote)",
      role: "Frontend Developer Intern",
      date: "Nov 2023 – Feb 2024",
      logo: company2,
      description: [
        "Built and maintained responsive, cross-browser-compatible web interfaces using HTML5, CSS3, JavaScript (ES6+), React.js, and Tailwind CSS.",
        "Engineered reusable, modular UI components following component-driven architecture, improving codebase consistency and reducing duplication.",
        "Participated in structured code reviews with senior developers, applying clean code standards on production projects.",
      ],
    },
    {
      company: "Digitopia LTD",
      location: "Casablanca, Morocco (Remote)",
      role: "Frontend Developer",
      date: "Feb 2020 – Aug 2021",
      logo: company3,
      description: [
        "Maintained and developed new features for the frontend of the Aly platform.",
        "Improved critical business logic, including optimizing search functionality based on user-selected distance.",
        "Wrote clean HTML and CSS to convert product designs into responsive web pages.",
      ],
    },
  ];

  return (
    <React.Fragment>
      <section id="experience" className="experience">
        <div className="container">
          <div className="experience-content">
            <p>Experience</p>
            <h3>My professional journey 🚀</h3>
            <div className="experience-grid">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-card">
                  <div className="exp-header">
                    <div className="exp-logo">
                      <img src={exp.logo} alt={exp.company + " logo"} style={{ width: 40, height: 40, objectFit: "contain" }} />
                    </div>
                    <div className="exp-title-box">
                      <h4>{exp.role}</h4>
                      <div className="exp-company-info">
                        <span className="company-name">{exp.company}</span>
                        {exp.location && (
                          <span className="location"> • {exp.location}</span>
                        )}
                      </div>
                      <p className="date-range">{exp.date}</p>
                    </div>
                  </div>
                  <ul className="exp-description">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Experience;
