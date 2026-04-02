// import React, { useState, useEffect } from "react";
// import "./FAQ.css";
// import { FAQ_DATA } from "../../data/FAQ_DATA";

// const FAQItem = ({ question, answer, index }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className={`faq-item ${open ? "faq-item--open" : ""}`}>
//       <button className="faq-item__question" onClick={() => setOpen(!open)}>
//         <span className="faq-item__num">0{index + 1}</span>
//         <span className="faq-item__text">{question}</span>
//         <span className="faq-item__icon">
//           <i className={`fas ${open ? "fa-minus" : "fa-plus"}`}></i>
//         </span>
//       </button>
//       <div className="faq-item__answer">
//         <div className="faq-item__answer-inner">
//           <p>{answer}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const FAQPage = ({ onClose }) => {
//   const [search, setSearch] = useState("");
//   const [activeCategory, setActiveCategory] = useState("All");

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   const categories = ["All", ...new Set(FAQ_DATA.map((f) => f.category))];

//   const filtered = FAQ_DATA.filter((f) => {
//     const matchCat = activeCategory === "All" || f.category === activeCategory;
//     const matchSearch =
//       f.question.toLowerCase().includes(search.toLowerCase()) ||
//       f.answer.toLowerCase().includes(search.toLowerCase());
//     return matchCat && matchSearch;
//   });

//   return (
//     <div className="faq-page">
//       {/* Header */}
//       <div className="faq-header">
//         <div className="faq-header__inner">
//           {/* <button className="faq-back" onClick={onClose}>
//             <i className="fas fa-arrow-left"></i> Back
//           </button> */}
//           <div className="faq-header__title-wrap">
//             <h1 className="faq-header__title">
//               Frequently Asked Questions
//             </h1>
//             <p className="faq-header__sub">
//               Everything you need to know about hearing loss and hearing aids
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Search */}
//       <div className="faq-search-wrap">
//         <div className="faq-search-box">
//           <i className="fas fa-search"></i>
//           <input
//             type="text"
//             placeholder="Search your question..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           {search && (
//             <button onClick={() => setSearch("")} className="faq-search-clear">
//               <i className="fas fa-times"></i>
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Body */}
//       <div className="faq-body">
//         <div className="container">

//           {/* Categories */}
//           <div className="faq-categories">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 className={`faq-cat-btn ${activeCategory === cat ? "faq-cat-btn--active" : ""}`}
//                 onClick={() => setActiveCategory(cat)}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* Count */}
//           <p className="faq-count">
//             Showing <strong>{filtered.length}</strong> questions
//             {activeCategory !== "All" && <span> in <strong>{activeCategory}</strong></span>}
//           </p>

//           {/* FAQ List */}
//           {filtered.length > 0 ? (
//             <div className="faq-list">
//               {filtered.map((faq, idx) => (
//                 <FAQItem
//                   key={idx}
//                   index={idx}
//                   question={faq.question}
//                   answer={faq.answer}
//                 />
//               ))}
//             </div>
//           ) : (
//             <div className="faq-empty">
//               <i className="fas fa-search"></i>
//               <p>No questions found for "<strong>{search}</strong>"</p>
//               <button onClick={() => { setSearch(""); setActiveCategory("All"); }}>
//                 Clear filters
//               </button>
//             </div>
//           )}

//           {/* Bottom CTA */}
//           <div className="faq-cta">
//             <div className="faq-cta__icon">
//               <i className="fas fa-headset"></i>
//             </div>
//             <div className="faq-cta__text">
//               <h3>Still have questions?</h3>
//               <p>Our expert audiologists are ready to help you personally.</p>
//             </div>
//             <a href="#contact" className="faq-cta__btn" onClick={onClose}>
//               <i className="fas fa-phone"></i> Contact Us
//             </a>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQPage;
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./FAQ.css";
import { FAQ_DATA } from "../../data/FAQ_DATA";

const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "faq-item--open" : ""}`}>
      <button className="faq-item__question" onClick={() => setOpen(!open)}>
        <div className="faq-item__num">{String(index + 1).padStart(2, "0")}</div>
        <div className="faq-item__text">{faq.question}</div>
        <div className="faq-item__icon">
          <i className={`fas ${open ? "fa-minus" : "fa-plus"}`}></i>
        </div>
      </button>

      {open && (
        <div className="faq-item__answer">
          <div className="faq-item__answer-inner">
            <p>{faq.answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const FAQPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const unique = [...new Set(FAQ_DATA.map((faq) => faq.category))];
    return ["All", ...unique];
  }, []);

  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" || faq.category === activeCategory;

      const matchesSearch =
        faq.question.toLowerCase().includes(search.toLowerCase()) ||
        faq.answer.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="faq-page">
      {/* Header */}
      <div className="faq-header">
        <div className="faq-header__inner">
          <Link to="/" className="faq-back">
            <i className="fas fa-arrow-left"></i>
            Back to Home
          </Link>

          <div>
            <h1 className="faq-header__title">Frequently Asked Questions</h1>
            <p className="faq-header__sub">
              Find answers to common questions about hearing loss, hearing aids,
              hearing health, and hearing care.
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="faq-search-wrap">
        <div className="faq-search-box">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              className="faq-search-clear"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="faq-body">
        <div className="container">
          {/* Categories */}
          <div className="faq-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`faq-cat-btn ${
                  activeCategory === cat ? "faq-cat-btn--active" : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="faq-count">
            Showing {filteredFAQs.length} question{filteredFAQs.length !== 1 ? "s" : ""}
          </div>

          {/* FAQ List */}
          <div className="faq-list">
            {filteredFAQs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>

          {/* CTA */}
          <div className="faq-cta">
            <div className="faq-cta__icon">
              <i className="fas fa-phone-volume"></i>
            </div>

            <div className="faq-cta__text">
              <h3>Still have questions?</h3>
              <p>
                Contact our hearing care experts for a personalized consultation.
              </p>
            </div>

            <a href="/#contact" className="faq-cta__btn">
              Contact Us <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;