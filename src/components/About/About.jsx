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
              <span className="about__badge-num">15+</span>
              <span className="about__badge-label">Years of Experience</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="about__content">
            <span className="section-tag">About Us</span>
            <h2 className="about__title">
              Best Hearing Care Clinic in Delhi
            </h2>
            <p>
              We are a Signia Certified Center and a leading Hearing Care Clinic
              in Delhi. Our mission is to enhance the health of our community by
              delivering high-quality, comprehensive hearing care in a welcoming
              and compassionate environment.
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
