import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SplitTextReveal from './SplitTextReveal';
const slides = [
    {
        image: '/banner1.png',
        title: 'Clear Vision. Trusted for 23 Years.',
        subtitle: 'Premium eyewear experts in Kalyan West. Quality you can see.',
        cta: 'Explore Collection',
        color: 'from-black/70 via-black/20',
        titleClass: 'text-[#FFF8E7] drop-shadow-2xl font-black italic tracking-tighter sm:whitespace-nowrap',
        subtitleClass: 'text-white/80 font-bold max-w-xl mx-auto',
        textAlign: 'center'
    },
    {
        image: '/assets/hero_slide_2.png',
        title: 'Summer Collection 2026',
        subtitle: 'Step out in style with our latest colorful sunglasses series.',
        cta: 'Shop Sunglasses',
        color: 'from-accent/80 via-accent/30',
        titleClass: 'text-white drop-shadow-2xl font-black uppercase tracking-tight',
        subtitleClass: 'text-white/90 font-medium max-w-sm',
        textAlign: 'left',
        imageClass: 'object-[center_20%]'
    },
    {
        image: '/assets/hero_slide_3.png',
        title: 'UV Protection Lenses',
        subtitle: 'Superior clarity starting from ₹899. Protect your eyes today.',
        cta: 'Shop Now',
        color: 'from-slate-900/80 via-slate-900/30',
        titleClass: 'text-white drop-shadow-lg font-extrabold tracking-tight',
        subtitleClass: 'text-white/80 font-normal max-w-md italic',
        textAlign: 'left'
    },
    {
        image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=2000',
        title: 'Premium Frames Collection',
        subtitle: 'Handcrafted luxury frames for the sophisticated look you deserve.',
        cta: 'View Premium',
        color: 'from-slate-950/70 via-transparent',
        titleClass: 'text-white drop-shadow-xl font-bold font-serif italic tracking-tighter whitespace-nowrap',
        subtitleClass: 'text-slate-200 font-light max-w-lg',
        textAlign: 'left'
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
        <section className="relative h-[60vh] min-h-[400px] w-full mt-[64px] mb-0 p-0 overflow-hidden group">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    {/* Background Image */}
                    <img
                        src={slides[current].image}
                        alt={slides[current].title}
                        className={`w-full h-full object-cover ${slides[current].imageClass || ''}`}
                    />

                    {/* Gradient Overlay for Readability */}
                    <div className={`absolute inset-0 bg-linear-to-r ${slides[current].color} to-transparent`}></div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="container-custom">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className={`max-w-5xl space-y-4 ${slides[current].textAlign === 'center' ? 'mx-auto text-center' : 'text-left'}`}
                            >
                                <h1 className={`text-4xl md:text-5xl lg:text-6xl leading-tight ${slides[current].titleClass}`}>
                                    <SplitTextReveal text={slides[current].title} />
                                </h1>
                                <p className={`text-base md:text-lg lg:text-xl ${slides[current].subtitleClass}`}>
                                    {slides[current].subtitle}
                                </p>
                                <div className="pt-4">
                                    <button className="bg-white text-primary px-8 py-3.5 rounded-premium font-black text-sm hover:bg-accent hover:text-white transition-all transform hover:scale-105 shadow-2xl active:scale-95 uppercase tracking-widest border border-slate-100 min-w-[200px]">
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
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronRight className="w-8 h-8" />
            </button>

            {/* Slide Indicators (Progress Bars) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className="relative h-2 w-16 bg-white/30 rounded-full overflow-hidden hover:bg-white/50 transition-colors"
                    >
                        {idx === current ? (
                            <motion.div
                                className="absolute top-0 left-0 bottom-0 bg-accent"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 5, ease: "linear" }}
                            />
                        ) : (
                            <div className="absolute top-0 left-0 bottom-0 bg-white/0" />
                        )}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;
