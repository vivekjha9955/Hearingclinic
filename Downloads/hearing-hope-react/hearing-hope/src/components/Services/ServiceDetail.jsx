import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ServiceDetails.css"
import { SERVICES_DATA } from "../../data/constants";


const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const service = SERVICES_DATA.find((item) => item.slug === serviceSlug);

  if (!service) {
    return (
      <div className="service-detail-page">
        <div className="container">
          <h2>Service not found</h2>
          <Link to="/" className="service-detail__btn">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      {/* Hero */}
      <section className="service-detail-hero">
        <div className="container">
          <Link to="/" className="service-detail__back">
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>

          <div className="service-detail-hero__content">
            <div className="service-detail-hero__icon">
              <i className={service.icon}></i>
            </div>

            <div>
              <span className="service-detail__tag">Our Service</span>
              <h1 className="service-detail__title">{service.title}</h1>
              <p className="service-detail__subtitle">{service.shortDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="service-detail-content">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-main">
              <div className="service-detail-card">
                <h2>What We Do</h2>
                <p>{service.longDesc}</p>
              </div>

              <div className="service-detail-card">
                <h2>What’s Included</h2>
                <ul className="service-detail-list">
                  {service.points.map((point, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="service-detail-side">
              <div className="service-detail-sidecard">
                <h3>Need Expert Consultation?</h3>
                <p>
                  Speak with our audiology and speech care specialists for
                  personalized guidance and the right treatment plan.
                </p>
                <a href="/#contact" className="service-detail__btn">
                  Contact Us <i className="fas fa-arrow-right"></i>
                </a>
              </div>

              <div className="service-detail-sidecard service-detail-sidecard--light">
                <h3>Suitable For</h3>
                <p>
                  Children, adults, senior citizens, and anyone experiencing
                  hearing or speech-related concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;