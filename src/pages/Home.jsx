import React from 'react';
import HeroSlider from '../components/HeroSlider';
import CategoryGrid from '../components/CategoryGrid';
import TrustSection from '../components/TrustSection';
import OfferSection from '../components/OfferSection';
import ProductGrid from '../components/ProductGrid';
import VideoSection from '../components/VideoSection';

const Home = () => {
    return (
        <main className="animate-fade-in">
            <HeroSlider />

            <div className="container-custom">
                <CategoryGrid />
            </div>

            <TrustSection />

            <div className="container-custom">
                <OfferSection />
                <ProductGrid />
            </div>

            <VideoSection />

            {/* Map Section Refining */}
            <section className="container-custom flex flex-col lg:flex-row gap-20 items-center py-32">
                <div className="lg:w-1/2 space-y-8">
                    <div className="inline-block px-4 py-1.5 bg-accent/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
                        Visit Our Store
                    </div>
                    <h2 className="text-5xl font-black leading-tight">Expert Consultation <br />in Kalyan West</h2>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed">
                        Experience our premium eyewear collection in person. Our experts are ready to provide you with the most accurate eye testing and styling advice.
                    </p>
                    <div className="flex flex-col gap-5 pt-4">
                        <div className="flex items-center gap-6 p-6 bg-white rounded-premium border border-light-gray shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-soft-bg rounded-full flex items-center justify-center text-2xl">📍</div>
                            <div>
                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Location</p>
                                <p className="text-lg font-bold text-primary">Kalyan West, Maharashtra</p>
                            </div>
                        </div>
                        <a
                            href="https://wa.me/919972414093"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-accent py-5 text-xl flex items-center justify-center gap-4 hover:scale-[1.02]"
                        >
                            <span className="text-2xl font-bold">💬</span>
                            <span>Chat on WhatsApp</span>
                        </a>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full aspect-[4/3] bg-light-gray rounded-premium overflow-hidden border-8 border-white shadow-2xl relative group">
                    <img
                        src="https://images.unsplash.com/photo-1511732351157-1865ef36f455?auto=format&fit=crop&q=80&w=1200"
                        alt="Store Interior"
                        className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="px-8 py-3 bg-white text-primary font-black rounded-full shadow-2xl text-sm tracking-widest uppercase">
                            M J OPTICS
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
