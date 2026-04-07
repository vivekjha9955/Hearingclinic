import React, { useState, useEffect } from "react";
import "./FloatingButtons.css";
import { CONTACT_INFO } from "../../data/constants";

const FloatingButtons = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* WhatsApp Float */}
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        className="wa-float"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Scroll to Top */}
      <button
        className={`scroll-top ${visible ? "scroll-top--visible" : ""}`}
        onClick={scrollTop}
        aria-label="Scroll to top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </>
  );
};

export default FloatingButtons;
