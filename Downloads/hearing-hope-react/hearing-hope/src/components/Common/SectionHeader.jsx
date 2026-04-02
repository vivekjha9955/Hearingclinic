import React from "react";

const SectionHeader = ({ tag, title, subtitle }) => (
  <div className="section-header">
    {tag && <span className="section-tag">{tag}</span>}
    <h2 className="section-title">{title}</h2>
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
    <div className="divider"></div>
  </div>
);

export default SectionHeader;
