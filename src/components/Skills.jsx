import React from "react";

// Merged Tech Stack (skills + tools)
const TECH_STACK = [
  { name: "Python", icon: "/icons/python.png" },
  { name: "Django", icon: "/icons/django.png" },
  { name: "DRF", icon: "/icons/DjangoRestFramework1.png" },
  { name: "HTML", icon: "/icons/html.png" },
  { name: "CSS", icon: "/icons/css.png" },
  { name: "Bootstrap", icon: "/icons/bootstrap.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "Canva", icon: "/icons/canva.png" },
  { name: "Figma", icon: "/icons/figma2.png" },
  { name: "Postman", icon: "/icons/postman1.png" },
  { name: "GitHub", icon: "/icons/github.png" },
  { name: "VS Code", icon: "/icons/vscode1.png" },
];

export default function Skills() {
  return (
    <div className="skills section">
      {/* Glass container */}
      <div className="skills-container">
        {/* Top-left heading inside container */}
        <div className="skills-left-heading">
          <h2>Skills</h2>
        </div>

        {/* Tech Stack grid */}
        <div className="skills-grid">
          {TECH_STACK.map((tech) => (
            <div className="skill-icon" key={tech.name}>
              <img src={tech.icon} alt={tech.name} />
              <span className="skill-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
