import React from "react";
import "./WhyTrust.css";
import { TRUST_ITEMS } from "../../data/constants";
import SectionHeader from "../Common/SectionHeader";

const WhyTrust = () => {
  return (
    <section className="why-trust">
      <div className="container">
        <SectionHeader
          tag="Our Strengths"
          title="Why People Trust Us?"
          subtitle="Thousands of patients choose Hearing Hope for our expertise, technology, and compassionate care."
        />
        <div className="why-trust__grid">
          {TRUST_ITEMS.map((item) => (
            <div className="trust-item" key={item.id}>
              <div className="trust-item__icon">
                <i className={item.icon}></i>
              </div>
              <h4 className="trust-item__label">{item.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrust;
