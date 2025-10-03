import React from "react";

const roles = ["Web Developer",  "UI/UX Designer"];

function useRotatingRoles(intervalMs = 15000) {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % roles.length),
      intervalMs
    );
    return () => clearInterval(t);
  }, [intervalMs]);
  return roles[index];
}

function useTyping(text, speed = 80) {
  const [visible, setVisible] = React.useState("");
  React.useEffect(() => {
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

// Split name into letters for hover effect
const NameWithBubbles = ({ name }) => {
  return (
    <span className="name">
      {name.split("").map((letter, i) => (
        <span key={i} className="letter">
          {letter}
          <span className="bubble">{letter}</span>
        </span>
      ))}
    </span>
  );
};

export default function Home() {
  const currentRole = useRotatingRoles(15000);
  const typed = useTyping(currentRole, 60);

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-left">
          <h1 className="hi">
            Hi, I'm <NameWithBubbles name="Sowraj " />
          </h1>
          <h2 className="role">
            <span className="typing">{typed}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="domain">
            
            
            Always exploring new technologies to bring creative ideas to life.
          </p>

          <div className="home-buttons">
            <a
              href="https://wa.me/6380690109"
              target="_blank"
              rel="noopener noreferrer"
              className="btn chat-btn"
            >
              Let's Talk
            </a>
          </div>
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
    </div>
  );
}
