// import React from "react";
// import "./styles/global.css";

// import TopBar from "./components/Navbar/TopBar";
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import AppointmentBar from "./components/AppointmentBar/AppointmentBar";
// import Services from "./components/Services/Services";
// import About from "./components/About/About";
// import Stats from "./components/Stats/Stats";
// import Products from "./components/Products/Products";
// import WhyTrust from "./components/WhyTrust/WhyTrust";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Certifications from "./components/Certifications/Certifications";
// import Contact from "./components/Contact/Contact";
// import Blogs from "./components/Blogs/Blogs";
// import Footer from "./components/Footer/Footer";
// import FloatingButtons from "./components/Common/FloatingButtons";
// import Brands from "./components/Brands/Brands";
// import FAQPage from "./components/FAQ/FAQ";
// import { useState } from "react";
// function App() {
//    const [showFAQ, setShowFAQ] = useState(false);
//   return (
//     <div className="App">
//       <TopBar />
//       <Navbar onFAQClick={() => setShowFAQ(true)}/>
//       <Hero />
//       <AppointmentBar />
//       <Services />
//       <About />
//       <Stats />
//     {/* <Products /> */}
// <Brands />       {/* ← add this line */}
// <WhyTrust />
//       <Testimonials />
//       <Certifications />
//       <Contact />
//       <Blogs />
//       <Footer />
//       <FloatingButtons />
//             {showFAQ && <FAQPage onClose={() => setShowFAQ(false)} />}
//     </div>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/global.css";

import TopBar from "./components/Navbar/TopBar";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AppointmentBar from "./components/AppointmentBar/AppointmentBar";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Stats from "./components/Stats/Stats";
import WhyTrust from "./components/WhyTrust/WhyTrust";
import Testimonials from "./components/Testimonials/Testimonials";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import FloatingButtons from "./components/Common/FloatingButtons";
import Brands from "./components/Brands/Brands";
import FAQPage from "./components/FAQ/FAQ";
import BrandDetail from "./components/Brands/BrandDetail";
import ScrollToTop from "./components/Common/ScrollToTop";
import ServiceDetail from "./components/Services/ServiceDetail";
const HomePage = () => {
  return (
    <>
      <Hero />
      <AppointmentBar />
      <Services />
      <About />
      <Stats />
      <Brands />
      <WhyTrust />
      <Testimonials />
      <Certifications />
      <Contact />
      <Blogs />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <TopBar />
      <Navbar />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/brands/:brandId" element={<BrandDetail />} />
        <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
      </Routes>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;