import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SunglassesPage from './pages/SunglassesPage';
import SpectaclesPage from './pages/SpectaclesPage';
import GenericCatalogPage from './pages/GenericCatalogPage';

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
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eyeglasses" element={<SpectaclesPage />} />
          <Route path="/sunglasses" element={<SunglassesPage />} />
          <Route path="/contact-lenses" element={<GenericCatalogPage title="Contact Lenses" banner="/assets/banner_home.png" />} />
          <Route path="/special-power" element={<GenericCatalogPage title="Special Power" banner="/assets/banner_offer.png" />} />
          <Route path="/store" element={<GenericCatalogPage title="Our Store" banner="/assets/banner_home.png" />} />
          <Route path="/offers" element={<GenericCatalogPage title="Hot Offers" banner="/assets/banner_offer.png" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
