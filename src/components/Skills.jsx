import React from "react";

const SKILLS = [
  { name: "Python", value: 80 },
  { name: "Django & Django REST Framework", value: 90 },
  { name: "HTML", value: 80 },
  { name: "CSS", value: 85 },
  { name: "Bootstrap", value: 70 },
  { name: "React", value: 50 },
];

const TOOLS = ["Canva", "Figma", "Postman", "Git & GitHub", "VS Code"];

export default function Skills() {
  return (
    <div className="skills container">
      <h2>Skills & Tools</h2>
      <div className="skills-grid">
        {/* Left side - Technical Skills */}
        <div className="skills-list">
          <h3>Technical Skills</h3>
          {SKILLS.map((s) => (
            <div className="skill" key={s.name}>
              <div className="skill-head">
                <span>{s.name}</span>
                <span>{s.value}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ width: `${s.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Tools */}
        <div className="tools-section">
          <h3>Tools</h3>
          <div className="tools-grid">
            {TOOLS.map((tool) => (
              <span className="tool-badge" key={tool}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
