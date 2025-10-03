import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/sowrajs",
  github: "https://github.com/Sowraj28",
  instagram: "https://www.instagram.com/sowraj_28/",
  email: "mailto:sowrajsethu2004@gmail.com",
  whatsapp: "https://wa.me/916380690109",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const popupRef = useRef();

  // Close popup on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        !event.target.closest(".contact-btn")
      ) {
        setShowPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        "service_58fot1l",
        "template_s6dcygd",
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        "WA7hZ_CdfFZXp_QHV"
      )
      .then(
        () => {
          setLoading(false);
          setStatus("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(""), 4000);
        },
        () => {
          setLoading(false);
          setStatus("Failed to send message. Try again.");
        }
      );
  }

  return (
    <>
      {/* Connect Section */}
      <div className="connect-container">
        <h2>Connect With Me</h2>
        {/*<p>✨ Connect and grow together! ✨</p>*/}
        <div className="socials-grid">
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin size={22} />
          </a>
          <a href={LINKS.github} target="_blank" rel="noreferrer">
            <FaGithub size={22} />
          </a>
          <a href={LINKS.instagram} target="_blank" rel="noreferrer">
            <FaInstagram size={22} />
          </a>
          {/*<a href={LINKS.email}>
            <FiMail size={22} />
          </a>*/}
          <a href={LINKS.whatsapp} target="_blank" rel="noreferrer">
            <FaWhatsapp size={22} />
          </a>
        </div>
      </div>

      {/* Floating Message Button */}
      <button className="contact-btn" onClick={() => setShowPopup(!showPopup)}>
        <FaEnvelope />
      </button>

      {/* Popup Contact Form */}
      <div
        ref={popupRef}
        className={`contact-popup ${showPopup ? "show" : ""}`}
      >
        <h3>Send a Message</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-primary">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </>
  );
}
