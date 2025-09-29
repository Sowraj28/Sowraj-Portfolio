import React, { useEffect, useState } from "react";
//import "./home.css";
import { FiDownload } from "react-icons/fi";

const roles = ["Web Developer", "Full Stack Developer","UI/UX Designer"];

function useRotatingRoles(intervalMs = 15000) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % roles.length),
      intervalMs
    );
    return () => clearInterval(t);
  }, [intervalMs]);
  return roles[index];
}

// simple typing effect hook
function useTyping(text, speed = 80) {
  const [visible, setVisible] = useState("");
  useEffect(() => {
    let i = 0;
    setVisible("");
    const id = setInterval(() => {
      setVisible(text.slice(0, ++i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return visible;
}

export default function Home() {
  const currentRole = useRotatingRoles(15000);
  const typed = useTyping(currentRole, 60);

  return (
    <div className="home container grid">
      <div className="home-left">
        <h1 className="hi">
          Hi, I'm <span className="name">Sowraj S</span>
        </h1>
        <h2 className="role">
          <span className="typing">{typed}</span>
          <span className="cursor">|</span>
        </h2>
        <p className="domain">Where Ideas Meets Execution!</p>
        <a className="resumee-download" href="/SowrajResume1.pdf" download>
          Download Resume
        </a>
      </div>

      <div className="home-right">
        <div className="profile-ring">
          <img
            src="/images/profile.jpg"
            alt="Sowraj S"
            className="profile-pic"
          />
        </div>
      </div>
    </div>
  );
}


//https://dashboard.emailjs.com/admin