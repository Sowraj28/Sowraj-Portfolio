import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";

export default function About() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Load Lottie JSON from public folder
    fetch("/lottie/happy-developer-white.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <div className="about section">
      <div className="about-container">
        {/* Left side - About content */}
        <div className="about-left">
          <h2>About Me</h2>
          <p>
            I am Sowraj S, a passionate Computer Science student and web
            developer with hands-on experience building modern, intuitive, and
            responsive web applications. I specialize in Django, React, and
            full-stack development, transforming ideas into real-world solutions
            with clean code and creative design.
          </p>

          {/* Resume Button */}
          <a href="/SowrajResume1.pdf" download className="resume-btn">
            <span className="arrow">⬇</span>
            <span className="resume-text">Resume</span>
          </a>
        </div>

        {/* Right side - Lottie animation */}
        <div className="about-right">
          {animationData && (
            <Lottie
              animationData={animationData}
              loop
              style={{ width: "100%", maxWidth: "400px", height: "auto" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
