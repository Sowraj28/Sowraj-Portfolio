import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const PROJECTS = [
  {
    id: 1,
    title: "Crystal Chart – Crypto Market Analyzer",
    img: "/images/project-1.png",
    video: "https://www.youtube.com/embed/A_Rw3em7OJQ",
    isYoutube: true,
    desc: "A full-stack crypto market analysis platform with live coin data, interactive charts, and investment simulation module.",
    github: "https://github.com/Sowraj28/Crystal-Chart",
  },
  {
    id: 2,
    title: "Local Lens – News Publish Website",
    img: "/images/project-2.png",
    video: "https://www.youtube.com/embed/zvl2w3KRnVo",
    isYoutube: true,
    desc: "News publishing platform with CRUD operations, user management, and responsive design for smooth publishing experience.",
    github: "https://github.com/Sowraj28/LOCAL_LENS",
  },
  {
    id: 3,
    title: "Employee Manager – CRUD App",
    img: "/images/project-3.png",
    video: "https://www.youtube.com/embed/4eRMsgy0t9g",
    isYoutube: true,
    desc: "Responsive employee management app with add, update, delete, search, and local storage persistence.",
    github: "https://github.com/Sowraj28/employee-manager",
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <div className="projects container">
      <h2 className="projects-heading"> Projects</h2>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div key={p.id} className="project-card" onClick={() => setActive(p)}>
            <div className="project-img-wrapper">
              <img src={p.img} alt={p.title} />
              <div className="project-overlay">
                <h3>{p.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {active && (
        <ProjectModal project={active} onClose={() => setActive(null)} />
      )}
    </div>
  );
}
