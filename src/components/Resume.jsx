import React from "react";
//import "./resume.css";
import { FiDownload } from "react-icons/fi";

export default function Resume() {
  return (
    <div className="resume container">
      <h2>Resume</h2>
      <p>Download my resume:</p>
      <a className="resume-download" href="/SowrajResume.pdf" download>
        <FiDownload /> Download Resume
      </a>
    </div>
  );
}
