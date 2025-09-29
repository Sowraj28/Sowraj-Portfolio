import React, { useState } from "react";
import { scrollToId } from "../utils";
import { FiMenu, FiX } from "react-icons/fi";
//import "./header.css"; // optional separate CSS if preferred

export default function Header() {
  const [open, setOpen] = useState(false);

  const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    //{ id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  function handleClick(id) {
    scrollToId(id);
    setOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand" onClick={() => handleClick("home")}>
          <span className="name-left">Sowraj S</span>
        </div>

        <nav className={`nav ${open ? "open" : ""}`}>
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="nav-link"
            >
              {item.label}
            </button>
          ))}
        </nav>

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
