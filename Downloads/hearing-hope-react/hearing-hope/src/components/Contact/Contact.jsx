import React, { useState } from "react";
import "./Contact.css";
import { CONTACT_INFO } from "../../data/constants";
import SectionHeader from "../Common/SectionHeader";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSubmitted(true);
  //   setTimeout(() => setSubmitted(false), 4000);
  //   setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  // };
const handleSubmit = (e) => {
  e.preventDefault();

  const message = `
*New Appointment Request*
--------------------------
*Name:* ${form.name}
*Email:* ${form.email}
*Phone:* ${form.phone}
*Subject:* ${form.subject}
*Message:* ${form.message}
  `.trim();

  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = "916367667306"; // your number with country code, no +
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");

  setSubmitted(true);
  setTimeout(() => setSubmitted(false), 4000);
  setForm({ name: "", email: "", phone: "", subject: "", message: "" });
};
  return (
    <section className="contact" id="contact">
      <div className="container">
        <SectionHeader
          tag="Get In Touch"
          title="Contact Us"
          subtitle="Book an appointment or reach us at any of our Delhi locations."
        />
        <div className="contact__grid">
          {/* Info Side */}
          <div className="contact__info">
            <h3 className="contact__info-title">We're Here to Help</h3>
            <p className="contact__info-desc">
              Visit us at our conveniently located clinics in Ranchi or reach out
              through phone, WhatsApp, or email.
            </p>

            <div className="contact__item">
              <div className="contact__item-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <span className="contact__item-label">Email Us</span>
                <a href={`mailto:${CONTACT_INFO.email}`}>
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="contact__item">
              <div className="contact__item-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <span className="contact__item-label">Call Us</span>
                <a href={`tel:${CONTACT_INFO.phone1}`}>{CONTACT_INFO.phone1}</a>
              </div>
            </div>

            <div className="contact__item">
              <div className="contact__item-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div>
                <span className="contact__item-label">WhatsApp</span>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {CONTACT_INFO.phone2}
                </a>
              </div>
            </div>

            {CONTACT_INFO.locations.map((loc) => (
              <div className="contact__item" key={loc.id}>
                <div className="contact__item-icon">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div>
                  <span className="contact__item-label">{loc.label}</span>
                  <span>{loc.address}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Form Side */}
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="contact__form-row">
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="How can we help?"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Tell us about your hearing concerns..."
                value={form.message}
                onChange={handleChange}
                rows={5}
              />
            </div>
            <button type="submit" className="btn-primary">
              <i className="fas fa-paper-plane"></i>
              Submit
            </button>
            {submitted && (
              <div className="contact__success">
                ✅ Thank you! We will contact you shortly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
