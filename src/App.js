import React, { useState } from "react";
import "./styles/global.css";

import TopBar from "./components/Navbar/TopBar";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AppointmentBar from "./components/AppointmentBar/AppointmentBar";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Stats from "./components/Stats/Stats";
import Brands from "./components/Brands/Brands";
import WhyTrust from "./components/WhyTrust/WhyTrust";
import Testimonials from "./components/Testimonials/Testimonials";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import FloatingButtons from "./components/Common/FloatingButtons";
import FAQPage from "./components/FAQ/FAQ";

function App() {
  const [showFAQ, setShowFAQ] = useState(false);

  return (
    <div className="App">
      <TopBar />
      <Navbar onFAQClick={() => setShowFAQ(true)} />
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
      <Footer />
      <FloatingButtons />
      {showFAQ && <FAQPage onClose={() => setShowFAQ(false)} />}
    </div>
  );
}

export default App;
