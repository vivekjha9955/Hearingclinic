import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">
          {/* Image Side */}
          <div className="about__img-wrap">
            <div className="about__img-main">
              <i className="fas fa-hospital"></i>
            </div>
            <div className="about__badge">
              <span className="about__badge-num">17+</span>
              <span className="about__badge-label">Years of Experience</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="about__content">
            <span className="section-tag">About Us</span>
            <h2 className="about__title">
              Best Hearing Care Clinic in Ranchi
            </h2>
            <p>
          Indian Speech & Hearing Clinic, Ranchi deals with hearing evaluation, hearing aid fitting, Speech & Language evaluation with therapy to different age of population. We have an experienced & qualified team of Audiologist and SLP .
            </p>
            <p>
              On behalf of our entire staff, we warmly welcome you to our clinic.
              We are delighted to have the opportunity to assist you with your
              hearing needs. Our goal is to provide the most advanced and
              effective hearing treatments available, conducted in a professional
              and caring manner.
            </p>
            <p>
              We are committed to helping you achieve your rehabilitation goals
              and improve your overall hearing health.
            </p>
            <a href="#" className="btn-primary about__btn">
              Know More <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
