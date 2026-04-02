import React from "react";
import "./Footer.css";
import {
  CONTACT_INFO,
  FOOTER_COMPANY_LINKS,
  FOOTER_SERVICE_LINKS,
} from "../../data/constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              Indian Speech & Hearing<span> Clinic</span>
            </div>
            <div className="footer__unit">A Unit of Hope Enterprises</div>
            <p>
              We are a Signia Certified Center. Our mission is to improve the
              health of our community by providing high quality, comprehensive
              hearing care in a welcoming and compassionate environment.
            </p>
            <div className="footer__contacts">
              <a href={`mailto:${CONTACT_INFO.email}`}>
                <i className="fas fa-envelope"></i>
                {CONTACT_INFO.email}
              </a>
              <a href={`tel:${CONTACT_INFO.phone1}`}>
                <i className="fas fa-phone"></i>
                {CONTACT_INFO.phone1}
              </a>
              <span>
                <i className="fas fa-location-dot"></i>
               Indian Speech and Hearing Clinic, 1st floor, Arctic Mall, Bariatu Road, Ranchi-834009, Ranchi, India, Jharkhand
              </span>
            </div>
          </div>

          {/* Company Links */}
          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="footer__col footer__col--locations">
            <h4>Our Locations</h4>
            {CONTACT_INFO.locations.map((loc) => (
              <div className="footer__location" key={loc.id}>
                <i className="fas fa-location-dot"></i>
                <div>
                  <strong>{loc.label}</strong>
                  <p>{loc.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          © {new Date().getFullYear()} Indian Speech & Hearing Clinic. All Rights Reserved. |
          Designed with ❤️ for Better Hearing Health
        </div>
      </div>
    </footer>
  );
};

export default Footer;
