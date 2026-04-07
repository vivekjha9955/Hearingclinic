import React from "react";
import "./Services.css";
import { SERVICES } from "../../data/constants";
import SectionHeader from "../Common/SectionHeader";

const ServiceCard = ({ icon, title, description, href }) => (
  <div className="service-card">
    <div className="service-card__icon">
      <i className={icon}></i>
    </div>
    <h4 className="service-card__title">{title}</h4>
    <p className="service-card__desc">{description}</p>
    <a href={href} className="know-more">
      Know More <i className="fas fa-arrow-right"></i>
    </a>
  </div>
);

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <SectionHeader
          tag="What We Offer"
          title="Our Services"
          subtitle="Comprehensive hearing care solutions tailored to your unique needs, delivered by certified professionals."
        />
        <div className="services__grid">
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
