import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { scrollToId } from "../utils";
import Lottie from "lottie-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [animationData, setAnimationData] = useState(null);
  const [showGreeting, setShowGreeting] = useState(false);

  const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  function handleClick(id) {
    scrollToId(id);
    setOpen(false);
  }

  // Show greeting for 2 seconds
  const triggerGreeting = () => {
    setShowGreeting(true);
    setTimeout(() => setShowGreeting(false), 2000);
  };

  useEffect(() => {
    // Load Lottie animation
    fetch("/lottie/animation.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));

    // Show greeting on page load
    triggerGreeting();

    // Scroll spy
    const handleScroll = () => {
      let current = "home";
      nav.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop - 80;
          if (window.scrollY >= top) current = item.id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    // Show greeting when tab is switched back
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        triggerGreeting();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          {animationData && (
            <div className="man-animation">
              <Lottie
                animationData={animationData}
                loop
                autoplay
                style={{ width: "80px", height: "auto", cursor: "pointer" }}
              />
              {showGreeting && (
                <span className="greeting-message">Hey!</span>
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className={`nav ${open ? "open" : ""}`}>
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`nav-link ${active === item.id ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>
    </header>
  );
}
