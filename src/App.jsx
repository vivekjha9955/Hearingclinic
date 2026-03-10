import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import About from "./pages/About";
import Services from "./pages/Services";
import HearingAids from "./pages/HearingAid";
// import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/hearing-aids" element={<HearingAids />} />
        {/* <Route path="/appointment" element={<Appointment />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;