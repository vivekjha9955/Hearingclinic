import React from 'react';
import {HearingAid} from "../data/HearingAid";

function HearingAids() {
  return (
    <div className="container">
      <h1>Hearing Aid Brands & Models</h1>

      {HearingAid.map((aid, index) => (
        <div key={index} className="brand-card">
          <h2>{aid.brand}</h2>

          <ul>
            {aid.models.map((model, i) => (
              <li key={i}>{model}</li>
            ))}
          </ul>

          <p>{aid.description}</p>
        </div>
      ))}
    </div>
  );
}

export default HearingAids;