import React from "react";
import { FiX } from "react-icons/fi";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FiX />
        </button>

        <h3>{project.title}</h3>

        <video
          controls
          autoPlay
          loop
          muted={false}
          className="modal-video"
          src={project.video}
        />

        <p className="modal-desc">{project.desc}</p>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="view-code-btn"
          >
            View Code →
          </a>
        )}
      </div>
    </div>
  );
}
