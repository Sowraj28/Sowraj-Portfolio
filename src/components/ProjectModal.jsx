import React from "react";
import { FiX } from "react-icons/fi";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FiX size={24} />
        </button>

        <h3>{project.title}</h3>

        {project.isYoutube ? (
          <iframe
            width="100%"
            height="360"
            src={project.video}
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <video
            controls
            autoPlay
            loop
            muted
            className="modal-video"
            src={project.video}
            preload="metadata"
          />
        )}

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
