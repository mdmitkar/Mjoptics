import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Generic Page Component for Categories
const CategoryPage = ({ title, banner }) => (
  <main className="pt-32 min-h-screen animate-fade-in">
    <div className="relative h-[40vh] w-full overflow-hidden mb-16">
      <img src={banner} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] flex items-center justify-center">
        <h1 className="text-6xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">{title}</h1>
      </div>
    </div>

    <div className="container-custom pb-20">
      <div className="flex justify-between md:items-end mb-12 border-b-2 border-slate-100 pb-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-black">All {title}</h2>
          <p className="text-slate-500 font-medium">Discover our handpicked premium selection</p>
        </div>
        <div className="hidden md:flex gap-4">
          <select className="bg-white border border-light-gray px-4 py-2 rounded-lg font-bold text-sm outline-none focus:border-accent">
            <option>Sort by: Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Mock Product Grid for Category Page */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
          <div key={id} className="premium-card group p-5 flex flex-col gap-4 animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: `${id * 100}ms` }}>
            <div className="relative aspect-square rounded-premium bg-soft-bg overflow-hidden">
              <img
                src={id % 2 === 0 ? '/assets/product_1.png' : '/assets/product_2.png'}
                alt="Product"
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 px-2 py-1 bg-white/90 backdrop-blur rounded-lg text-[10px] font-black text-accent shadow-sm">
                4.9 ★
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-dark-text group-hover:text-primary transition-colors line-clamp-1">Premium Frame Variant {id}</h3>
              <div className="flex justify-between items-center pt-2">
                <span className="text-xl font-black text-primary">₹{(1999 + (id * 250)).toLocaleString()}</span>
                <button className="text-xs font-black text-primary border-b-2 border-accent hover:border-primary transition-all pb-1">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </main>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eyeglasses" element={<CategoryPage title="Eyeglasses" banner="/assets/banner_premium.png" />} />
          <Route path="/sunglasses" element={<CategoryPage title="Sunglasses" banner="/assets/banner_uv.png" />} />
          <Route path="/contact-lenses" element={<CategoryPage title="Contact Lenses" banner="/assets/banner_home.png" />} />
          <Route path="/special-power" element={<CategoryPage title="Special Power" banner="/assets/banner_offer.png" />} />
          <Route path="/store" element={<CategoryPage title="Our Store" banner="/assets/banner_home.png" />} />
          <Route path="/offers" element={<CategoryPage title="Hot Offers" banner="/assets/banner_offer.png" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
