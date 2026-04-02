// import React, { useEffect } from "react";
// import "./BrandDetail.css";

// const FeatureItem = ({ icon, label }) => (
//   <div className="feat-item">
//     <i className={icon}></i>
//     <span>{label}</span>
//   </div>
// );

// const ModelCard = ({ model, onClose }) => (
//   <div className="detail-model-card">
//     <div className="detail-model-card__photo">
//       <div className="detail-model-card__img-wrap">
//         <i className={model.icon}></i>
//       </div>
//       <div className="detail-model-card__badge">{model.type}</div>
//     </div>
//     <div className="detail-model-card__body">
//       <h3 className="detail-model-card__name">{model.name}</h3>
//       <p className="detail-model-card__desc">{model.desc}</p>
//       <div className="detail-model-card__features">
//         <FeatureItem icon="fas fa-volume-up" label="Advanced Sound" />
//         <FeatureItem icon="fas fa-bluetooth" label="Connectivity" />
//         <FeatureItem icon="fas fa-battery-three-quarters" label="Long Battery" />
//         <FeatureItem icon="fas fa-shield-alt" label="Warranty" />
//       </div>
//       <a href="#contact" className="detail-model-card__cta" onClick={onClose}>
//         <i className="fas fa-calendar-check"></i>
//         Book Free Trial
//       </a>
//     </div>
//   </div>
// );

// const BrandDetail = ({ brand, onClose }) => {
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   return (
//     <div className="detail-page">

//       {/* Header */}
//       <div className="detail-header">
//         <button className="detail-back" onClick={onClose}>
//           <i className="fas fa-arrow-left"></i> Back
//         </button>
//         <div className="detail-header__content">
//           <div className="detail-header__icon">
//             <i className={brand.icon}></i>
//           </div>
//           <div>
//             <h1 className="detail-header__brand">{brand.brand}</h1>
//             <p className="detail-header__tagline">{brand.tagline}</p>
//           </div>
//         </div>
//       </div>

//       {/* Body */}
//       <div className="detail-body">
//         <div className="container">

//           {/* Overview */}
//           <div className="detail-overview">
//             <div className="detail-overview__text">
//               <span className="section-tag">About {brand.brand}</span>
//               <h2 className="detail-overview__title">Why Choose {brand.brand}?</h2>
//               <p>
//                 {brand.tagline}. {brand.brand} hearing aids are engineered with
//                 cutting-edge technology to deliver superior sound quality, comfort,
//                 and connectivity. Trusted by audiologists and patients worldwide,{" "}
//                 {brand.brand} continues to push the boundaries of hearing healthcare
//                 innovation.
//               </p>
//               <div className="detail-overview__badges">
//                 <span><i className="fas fa-check-circle"></i> Clinically Proven</span>
//                 <span><i className="fas fa-check-circle"></i> Rechargeable Options</span>
//                 <span><i className="fas fa-check-circle"></i> Bluetooth Enabled</span>
//                 <span><i className="fas fa-check-circle"></i> Custom Fitting</span>
//               </div>
//             </div>
//             <div className="detail-overview__img">
//               <i className={brand.icon}></i>
//               <div className="detail-overview__glow"></div>
//             </div>
//           </div>

//           {/* Models */}
//           <div className="detail-models-section">
//             <div className="section-header">
//               <span className="section-tag">Products</span>
//               <h2 className="section-title">Popular Models</h2>
//               <div className="divider"></div>
//             </div>
//             <div className="detail-models-grid">
//               {brand.models.map((model, idx) => (
//                 <ModelCard key={idx} model={model} onClose={onClose} />
//               ))}
//             </div>
//           </div>

//           {/* CTA Banner */}
//           <div className="detail-cta-banner">
//             <div className="detail-cta-banner__text">
//               <h3>Interested in {brand.brand} Hearing Aids?</h3>
//               <p>
//                 Book a free consultation with our expert audiologists and get a
//                 personalized recommendation.
//               </p>
//             </div>
//             <a
//               href="#contact"
//               className="detail-cta-banner__btn"
//               onClick={onClose}
//             >
//               <i className="fas fa-phone"></i> Book Free Consultation
//             </a>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrandDetail;
import React from "react";
import { Link, useParams } from "react-router-dom";
import "./BrandDetail.css";
import { HEARING_BRANDS } from "../../data/constants";

const BrandDetail = () => {
  const { brandId } = useParams();
  const brand = HEARING_BRANDS.find((b) => String(b.id) === brandId);

  if (!brand) {
    return (
      <div className="detail-body">
        <div className="container">
          <h2>Brand not found</h2>
          <Link to="/" className="btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="brand-detail-page">
      {/* HEADER */}
      <div className="detail-header">
        <div className="container">
          <div className="detail-header__inner">
            <Link to="/" className="detail-back">
              <i className="fas fa-arrow-left"></i>
              Back to Home
            </Link>

            <div className="detail-header__content">
              <div className="detail-header__icon">
                <i className={brand.icon}></i>
              </div>

              <div>
                <h1 className="detail-header__brand">{brand.brand}</h1>
                <p className="detail-header__tagline">{brand.tagline}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="detail-body">
        <div className="container">
          {/* OVERVIEW */}
          <div className="detail-overview">
            <div className="detail-overview__text">
              <span className="section-tag">Brand Overview</span>

              <h2 className="detail-overview__title">
                Discover {brand.brand} Hearing Solutions
              </h2>

              <p>
                {brand.brand} is one of the leading global hearing aid brands,
                known for innovation, comfort, and excellent sound quality.
              </p>

              <div className="detail-overview__badges">
                <span>
                  <i className="fas fa-check-circle"></i> Premium Technology
                </span>
                <span>
                  <i className="fas fa-headphones"></i> Multiple Models
                </span>
                <span>
                  <i className="fas fa-user-doctor"></i> Expert Fitting
                </span>
              </div>
            </div>

            <div className="detail-overview__img">
              <div className="detail-overview__glow"></div>
              <i className={brand.icon}></i>
            </div>
          </div>

          {/* MODELS */}
          <div className="detail-models-section">
            <h2 className="section-title">Available Models</h2>
            <div className="divider"></div>

            <div className="detail-models-grid">
              {brand.models.map((model, index) => (
                <div className="detail-model-card" key={index}>
                  <div className="detail-model-card__icon">
                    <i className={model.icon}></i>
                  </div>

                  <h3 className="detail-model-card__name">{model.name}</h3>

                  <span className="detail-model-card__type">{model.type}</span>

                  <p className="detail-model-card__desc">{model.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FREE TRIAL / CTA */}
          <div className="detail-cta">
            <div className="detail-cta__icon">
              <i className="fas fa-headphones"></i>
            </div>

            <div className="detail-cta__text">
              <h3>Book Your Free Hearing Aid Trial Today</h3>
              <p>
                Try {brand.brand} hearing aids with expert fitting and
                personalized consultation from our audiology team.
              </p>
            </div>

            <a href="/#contact" className="detail-cta__btn">
              Book Free Trial <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetail;