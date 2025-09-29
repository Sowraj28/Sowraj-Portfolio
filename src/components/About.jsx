import React from "react";
//import "./about.css";
import { scrollToId } from "../utils";

export default function About() {
  return (
    <div className="about container">
      <h2>About Me</h2>
      <p>
        I am Sowraj S, a passionate Computer Science student and web developer
        with a strong interest in building modern, user-friendly, and scalable
        web applications. I specialize in working with Django, React and
        full-stack development, and I enjoy transforming ideas into real-world
        solutions through <br></br>clean code and creative design.
      </p>

      <div className="about-grid">
        <div>
          <h3>Experience & Internships</h3>
          <ul>
            <li>WebGen Tech Solutions | Web Development</li>
            <li>Web Development Intern | CodSoft</li>
            <li>Application Designer | EduBridge | Infosys</li>
          </ul>
        </div>

        <div>
          <h3>Education</h3>
          <p>
            SNS College of Engineering — B.E. Computer Science and Engineering
            (CGPA 8.4 )
          </p>
          <p>Metro Matriculation Higher Secondary School </p>
          <p>
            HSC - 83% |  SSLC - 70%
          </p>
        </div>
      </div>

      <p className="resume-note"></p>
    </div>
  );
}
