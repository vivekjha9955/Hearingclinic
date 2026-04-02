import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import { SERVICES_DATA } from "../../data/constants";
import SectionHeader from "../Common/SectionHeader";


const ServiceCard = ({ service }) => {
  return (
    <div className="service-card modern-service-card">
      <div className="service-card__icon modern-service-card__icon">
        <i className={service.icon}></i>
      </div>

      <h3 className="service-card__title">{service.title}</h3>

      <p className="service-card__desc">{service.shortDesc}</p>

      <Link to={`/services/${service.slug}`} className="service-card__link">
        Know More <i className="fas fa-arrow-right"></i>
      </Link>
    </div>
  );
};

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <SectionHeader
          tag="Our Services"
          title="Comprehensive Hearing & Speech Care"
          subtitle="Expert audiology and speech therapy services designed to support hearing health, communication, and overall quality of life."
        />

        <div className="services__grid modern-services-grid">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;