import React from "react";
import "./Certifications.css";
import { CERTIFICATIONS } from "../../data/constants";
import SectionHeader from "../Common/SectionHeader";

const Certifications = () => {
  return (
    <section className="certifications">
      <div className="container">
        <SectionHeader
          tag="Credentials"
          title="Our Certifications"
          subtitle="Accredited and recognized by leading institutions in hearing healthcare."
        />
        <div className="certifications__grid">
          {CERTIFICATIONS.map((cert) => (
            <div className="cert-item" key={cert.id}>
              <i className={cert.icon}></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
