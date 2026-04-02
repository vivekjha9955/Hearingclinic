import React from "react";
import "./TopBar.css";
import { CONTACT_INFO } from "../../data/constants";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
       
        <div className="top-bar__left">
          
          Best Hearing Care Clinic in Ranchi
        </div>
        <div className="top-bar__right">
          <a href={`mailto:${CONTACT_INFO.email}`} className="top-bar__link">
            <i className="fas fa-envelope"></i>
            {CONTACT_INFO.email}
          </a>
          <a href={`tel:${CONTACT_INFO.phone1}`} className="top-bar__link">
            <i className="fas fa-phone"></i>
            {CONTACT_INFO.phone1}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
