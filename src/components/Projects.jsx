import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

// Update video paths and remove spaces from filenames for Vercel compatibility
const PROJECTS = [
  {
    id: 1,
    title: "Crystal Chart – Crypto Market Analyzer",
    img: "/images/project-1.png",
    video: "/projects/crystalchat.mp4",
    desc: "A full-stack crypto market analysis platform that integrates live coin data, interactive charts, and price trends. Built using Python, Django REST Framework, and React, it includes an investment simulation module for practicing trading with virtual funds, helping beginners reduce risks and make data-driven decisions.",
    github: "https://github.com/Sowraj28/Crystal-Chart",
  },
  {
    id: 2,
    title: "Local Lens – News Publish Website",
    img: "/images/project-2.png",
    video: "/projects/blog-vedio.mp4", // filename updated, no spaces
    desc: "A news publishing platform where authenticated users can submit, edit, and manage articles. Designed with a clean UI and secure authentication, this project demonstrates user management, CRUD operations, and responsive web design for a smooth publishing experience.",
    github: "https://github.com/Sowraj28/LOCAL_LENS",
  },
  {
    id: 3,
    title: "Employee Manager – CRUD App",
    img: "/images/project-3.png",
    video: "/projects/empmanager.mp4",
    desc: "A responsive employee management web app that allows adding, updating, and deleting employee records. It includes search functionality, local storage persistence, and a simple yet professional UI for managing employee data efficiently.",
    github: "https://github.com/Sowraj28/employee-manager",
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <div className="projects container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div key={p.id} className="project-card" onClick={() => setActive(p)}>
            <img src={p.img} alt={p.title} />
            <div className="project-info">
              <h3>{p.title}</h3>
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
