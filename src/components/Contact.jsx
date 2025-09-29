import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiMail, FiPhone } from "react-icons/fi";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/sowrajs",
  github: "https://github.com/Sowraj28",
  leetcode: "https://leetcode.com/u/sowraj28/",
  instagram: "https://www.instagram.com/sowraj_28/",
  email: "mailto:sowrajsethu2004@gmail.com",
  whatsapp: "https://wa.me/916380690109",
  phone: "tel:+916380690109",
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

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
        "service_58fot1l", // Replace with your Service ID
        "template_s6dcygd", // Replace with your Template ID
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        "WA7hZ_CdfFZXp_QHV" // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setStatus("Message sent successfully!");
          setForm({ name: "", email: "", phone: "", message: "" });
          setTimeout(() => setStatus(""), 4000); // hide after 4s
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setStatus("Failed to send message. Try again.");
        }
      );
  }

  return (
    <div className="contact container">
      <h2>Connect With Me</h2>
      <div className="socials-grid">
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
          <FaLinkedin size={22} /> LinkedIn
        </a>
        <a href={LINKS.github} target="_blank" rel="noreferrer">
          <FaGithub size={22} /> GitHub
        </a>
        <a href={LINKS.leetcode} target="_blank" rel="noreferrer">
          <SiLeetcode size={22} /> LeetCode
        </a>
        <a href={LINKS.instagram} target="_blank" rel="noreferrer">
          <FaInstagram size={22} /> Instagram
        </a>
        <a href={LINKS.email}>
          <FiMail size={22} /> sowrajsethu2004@gmail.com
        </a>
        <a href={LINKS.phone}>
          <FiPhone size={22} /> +91 63806 90109
        </a>
        <a href={LINKS.whatsapp} target="_blank" rel="noreferrer">
          <FaWhatsapp size={22} /> WhatsApp
        </a>
      </div>

      <h2 style={{ marginTop: "40px" }}>Contact Form</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <div style={{ textAlign: "center", position: "relative" }}>
          <button type="submit" className="btn-primary">
            {loading ? (
              <span className="loading">
                <span className="spinner"></span> Sending...
              </span>
            ) : (
              "Send message"
            )}
          </button>
          {status && <p className="status-message">{status}</p>}
        </div>
      </form>
    </div>
  );
}
