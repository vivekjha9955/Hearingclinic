// import React, { useState } from "react";
// import "./Brands.css";
// import { HEARING_BRANDS } from "../../data/constants";
// import SectionHeader from "../Common/SectionHeader";
// import BrandDetail from "./BrandDetail";

// const BrandCard = ({ brand, onSelect }) => (
//   <div className="brand-card">
//     <div className="brand-card__header">
//       <div className="brand-card__icon">
//         <i className={brand.icon}></i>
//       </div>
//       <div>
//         <h3 className="brand-card__name">{brand.brand}</h3>
//         <p className="brand-card__tagline">{brand.tagline}</p>
//       </div>
//     </div>
//     <div className="brand-card__models">
//       {brand.models.map((model, idx) => (
//         <div className="model-item" key={idx}>
//           <div className="model-item__img">
//             <i className={model.icon}></i>
//           </div>
//           <div className="model-item__info">
//             <span className="model-item__name">{model.name}</span>
//             <span className="model-item__type">{model.type}</span>
//           </div>
//           <button
//             className="model-item__btn"
//             onClick={() => onSelect(brand)}
//           >
//             Know More <i className="fas fa-arrow-right"></i>
//           </button>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const Brands = () => {
//   const [selectedBrand, setSelectedBrand] = useState(null);

//   return (
//     <section className="brands" id="brands">
//       <div className="container">
//         <SectionHeader
//           tag="Top Brands"
//           title="Hearing Aid Companies & Models"
//           subtitle="We offer hearing aids from the world's leading brands — each with unique technology to match your lifestyle and hearing needs."
//         />
//         <div className="brands__grid">
//           {HEARING_BRANDS.map((b) => (
//             <BrandCard key={b.id} brand={b} onSelect={setSelectedBrand} />
//           ))}
//         </div>
//       </div>

//       {selectedBrand && (
//         <BrandDetail
//           brand={selectedBrand}
//           onClose={() => setSelectedBrand(null)}
//         />
//       )}
//     </section>
//   );
// };

// export default Brands;
import React from "react";
import { Link } from "react-router-dom";
import "./Brands.css";
import { HEARING_BRANDS } from "../../data/constants";
import SectionHeader from "../Common/SectionHeader";

const BrandCard = ({ brand }) => (
  <div className="brand-card">
    <div className="brand-card__header">
      <div className="brand-card__icon">
        <i className={brand.icon}></i>
      </div>
      <div>
        <h3 className="brand-card__name">{brand.brand}</h3>
        <p className="brand-card__tagline">{brand.tagline}</p>
      </div>
    </div>

    <div className="brand-card__models">
      {brand.models.map((model, idx) => (
        <div className="model-item" key={idx}>
          <div className="model-item__img">
            <i className={model.icon}></i>
          </div>
          <div className="model-item__info">
            <span className="model-item__name">{model.name}</span>
            <span className="model-item__type">{model.type}</span>
          </div>

          <Link className="model-item__btn" to={`/brands/${brand.id}`}>
            Know More <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

const Brands = () => {
  return (
    <section className="brands" id="brands">
      <div className="container">
        <SectionHeader
          tag="Top Brands"
          title="Hearing Aid Companies & Models"
          subtitle="We offer hearing aids from the world's leading brands — each with unique technology to match your lifestyle and hearing needs."
        />
        <div className="brands__grid">
          {HEARING_BRANDS.map((b) => (
            <BrandCard key={b.id} brand={b} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;