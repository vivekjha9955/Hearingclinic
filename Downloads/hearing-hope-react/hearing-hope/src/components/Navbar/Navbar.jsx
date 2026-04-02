// // 
// import React, { useState } from "react";
// import "./Navbar.css";
// import { NAV_LINKS } from "../../data/constants";

// const Navbar = ({ onFAQClick }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="navbar__inner">
//           {/* Logo */}
//           <a href="#" className="navbar__logo">
//             Indian Speech & Hearing<span>Clinic</span>
//           </a>

//           {/* Nav Links */}
//           <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
//             {NAV_LINKS.map((link) => (
//               <li key={link.label} className="navbar__item">
//                 {link.label === "FAQ" ? (
//                   <button
//                     className="navbar__link navbar__faq-btn"
//                     onClick={() => { onFAQClick(); setMenuOpen(false); }}
//                   >
//                     {link.label}
//                   </button>
//                 ) : (
//                   <a href={link.href} className="navbar__link">
//                     {link.label}
//                     {link.dropdown && <i className="fas fa-chevron-down navbar__chevron"></i>}
//                   </a>
//                 )}
//                 {link.dropdown && (
//                   <ul className="navbar__dropdown">
//                     {link.dropdown.map((item) => (
//                       <li key={item.label}>
//                         <a href={item.href} className="navbar__dropdown-link">
//                           {item.label}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//             <li>
//               <a href="#contact" className="navbar__link navbar__cta">
//                 Contact Us
//               </a>
//             </li>
//           </ul>

//           {/* Hamburger */}
//           <button
//             className="navbar__hamburger"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//           >
//             <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { NAV_LINKS } from "../../data/constants";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const isRouteLink = (href) => href.startsWith("/");

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__inner">
          {/* Logo */}
          <a href="#" className="navbar__logo" onClick={closeMenu}>
            Indian Speech & Hearing<span>Clinic</span>
          </a>

          {/* Nav Links */}
          <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="navbar__item">
                {link.label === "FAQ" ? (
                  <Link to="/faq" className="navbar__link" onClick={closeMenu}>
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className="navbar__link" onClick={closeMenu}>
                    {link.label}
                    {link.dropdown && (
                      <i className="fas fa-chevron-down navbar__chevron"></i>
                    )}
                  </a>
                )}

                {link.dropdown && (
                  <ul className="navbar__dropdown">
                    {link.dropdown.map((item) => (
                      <li key={item.label}>
                        {isRouteLink(item.href) ? (
                          <Link
                            to={item.href}
                            className="navbar__dropdown-link"
                            onClick={closeMenu}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <a
                            href={item.href}
                            className="navbar__dropdown-link"
                            onClick={closeMenu}
                          >
                            {item.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li>
              <a href="#contact" className="navbar__link navbar__cta" onClick={closeMenu}>
                Contact Us
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;