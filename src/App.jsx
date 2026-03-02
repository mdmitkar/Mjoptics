import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import PrecisionLenses from './pages/PrecisionLenses';
import Collections from './pages/Collections';
import EyeCareServices from './pages/EyeCareServices';
import LocationContact from './pages/LocationContact';
import AppointmentBooking from './pages/AppointmentBooking';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-secondary selection:bg-accent/30 selection:text-primary">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/precision-lenses" element={<PrecisionLenses />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/eye-care-services" element={<EyeCareServices />} />
            <Route path="/location-contact" element={<LocationContact />} />
            <Route path="/book-appointment" element={<AppointmentBooking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
