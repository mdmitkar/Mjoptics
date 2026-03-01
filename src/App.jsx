import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import OfferSection from './components/OfferSection';
import TrustSection from './components/TrustSection';
import VideoSection from './components/VideoSection';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CategoryGrid />
        <TrustSection />
        <OfferSection />
        <ProductGrid />
        <VideoSection />

        {/* Map Section Mockup */}
        <section className="section-padding flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-black">Find Us in Kalyan West</h2>
            <p className="text-lg text-slate-600 font-medium">
              Experience our premium eyewear collection in person. Our experts are ready to provide you with the most accurate eye testing and styling advice.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-premium border border-light-gray shadow-sm">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase">Call for Appointment</p>
                  <p className="text-lg font-bold text-primary">09972414093</p>
                </div>
              </div>
              <button className="btn-accent w-full py-4 text-lg flex items-center justify-center gap-3">
                <span className="text-2xl">💬</span> Chat with us on WhatsApp
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full aspect-video bg-light-gray rounded-premium overflow-hidden border-4 border-white shadow-2xl relative group">
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all pointer-events-none"></div>
            <img
              src="https://images.unsplash.com/photo-1524666041070-9d87656c25bb?auto=format&fit=crop&q=80&w=1000"
              alt="Map placeholder"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-6 py-3 bg-primary text-white font-black rounded-full shadow-2xl animate-bounce">
                M J Optics - Kalyan West
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
