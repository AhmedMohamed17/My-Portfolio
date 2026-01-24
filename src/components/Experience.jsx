import React from "react";
import { IconBriefcase } from "@tabler/icons-react";

function Experience() {
  const experiences = [
    {
      company: "Wakeb",
      location: "Cairo, Egypt",
      role: "Frontend Developer",
      date: "Feb 2024 – Present",
      description: [
        "Handled major performance and optimization challenges caused by large data flows and heavy server responses by designing structured and efficient solutions.",
        "Improved overall application performance by optimizing component architecture, enhancing state management, and reducing unnecessary re-renders, achieving approximately 30% performance improvement.",
        "Simplified and optimized UI components to ensure faster rendering and smoother user interactions, leading to a 20% increase in application responsiveness.",
        "Enhanced handling of large datasets through optimized API calls, caching strategies, and improved data flow structure to ensure scalability and stability.",
      ],
    },
    {
      company: "Gamifier SA",
      location: "Riyadh, Saudi Arabia (Remote)",
      role: "Frontend Developer Intern",
      date: "Nov 2023 – Feb 2024",
      description: [
        "Collaborated closely with the UX team to implement 9 responsive UI features, contributing to a 21% increase in monthly active users.",
        "Actively participated in agile development processes, successfully achieving 84% of sprint goals and improving overall team productivity.",
        "Assisted senior developers in ideating and implementing a new website feature that increased user sign-ups by 32% within the first three months after launch.",
      ],
    },
    {
      company: "Digitopia LTD",
      location: "Casablanca, Morocco (Remote)",
      role: "Frontend Developer",
      date: "Feb 2020 – Aug 2021",
      description: [
        "Maintained and developed new features for the frontend of the Aly platform.",
        "Improved critical business logic, including optimizing search functionality based on user-selected distance.",
        "Worked extensively with Next.js and GraphQL APIs to ensure smooth integration with backend services.",
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
                      <IconBriefcase size={30} color="#147efb" />
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
