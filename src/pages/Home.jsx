import React from 'react';
import HeroSlider from '../components/HeroSlider';
import CategoryGrid from '../components/CategoryGrid';
import TrustSection from '../components/TrustSection';
import OfferSection from '../components/OfferSection';
import ProductGrid from '../components/ProductGrid';
import VideoSection from '../components/VideoSection';
import TrustSignals from '../components/TrustSignals';
import SEOContent from '../components/SEOContent';

const Home = () => {
    return (
        <main className="animate-fade-in bg-white overflow-x-hidden">
            {/* 1. Hero Slider (Full-width, No Container) */}
            <HeroSlider />

            {/* 2. Category Grid (White Background) */}
            <CategoryGrid />

            {/* 3. Trust Section (Gray Background - Alternating) */}
            <TrustSection />

            {/* 4. Offer Section (White Background) */}
            <OfferSection />

            {/* 5. Product Grid (White Background - Could be Gray but let's keep it White for clarity) */}
            <ProductGrid />

            {/* 6. Video & Store Section */}
            <VideoSection />

            {/* 7. Lenskart Style Trust Badges */}
            <TrustSignals />

            {/* 8. SEO & Brand Story Section */}
            <SEOContent />
        </main>
    );
};

export default Home;
