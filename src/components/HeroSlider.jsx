import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        image: '/assets/banner_home.png',
        title: 'Clear Vision. Trusted for 23 Years.',
        subtitle: 'Premium Eyewear & Contact Lens Experts in Kalyan West',
        cta: 'Explore Collection',
        color: 'from-primary/60'
    },
    {
        image: '/assets/banner_offer.png',
        title: 'Exclusive Weekend Offer',
        subtitle: 'Buy 2 Specs & Get Contact Lens FREE. Limited time only.',
        cta: 'Shop Offers',
        color: 'from-accent/60'
    },
    {
        image: '/assets/banner_uv.png',
        title: 'UV Protection Specialist',
        subtitle: 'Premium polarized lenses from ₹899. Protect your eyes in style.',
        cta: 'Shop Now',
        color: 'from-primary/50'
    },
    {
        image: '/assets/banner_premium.png',
        title: 'Premium Collection Showcase',
        subtitle: 'Discover internal brands and luxury frames handcrafted for you.',
        cta: 'View Premium',
        color: 'from-slate-900/60'
    }
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[80vh] min-h-[600px] w-full mt-24 mb-0 p-0 overflow-hidden group">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    {/* Background Image */}
                    <img
                        src={slides[current].image}
                        alt={slides[current].title}
                        className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${slides[current].color} to-transparent`}></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="container-custom">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="max-w-2xl space-y-6 text-white"
                            >
                                <h1 className="text-6xl md:text-7xl font-black leading-[1.1] drop-shadow-2xl">
                                    {slides[current].title}
                                </h1>
                                <p className="text-xl md:text-2xl font-medium opacity-90 drop-shadow-md">
                                    {slides[current].subtitle}
                                </p>
                                <div className="pt-8">
                                    <button className="bg-white text-primary px-10 py-4 rounded-premium font-black text-lg hover:bg-accent hover:text-white transition-all transform hover:scale-105 shadow-2xl active:scale-95 uppercase tracking-wider">
                                        {slides[current].cta}
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
            >
                <ChevronRight className="w-8 h-8" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`transition-all duration-300 rounded-full ${idx === current ? 'w-10 h-2 bg-accent' : 'w-2 h-2 bg-white/50 hover:bg-white'}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;
