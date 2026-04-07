import React from "react";
import "./AppointmentBar.css";
import { CONTACT_INFO } from "../../data/constants";

const AppointmentBar = () => {
  return (
    <div className="appt-bar">
      <div className="container">
        <h3 className="appt-bar__heading">
          <i className="fas fa-phone-volume"></i>
          For appointment call or WhatsApp us at:
        </h3>
        <div className="appt-bar__actions">
          <a href={`tel:${CONTACT_INFO.phone1}`} className="appt-bar__link appt-bar__link--phone">
            <i className="fas fa-phone"></i>
            {CONTACT_INFO.phone1}
          </a>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            className="appt-bar__link appt-bar__link--whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
            {CONTACT_INFO.phone2}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBar;
