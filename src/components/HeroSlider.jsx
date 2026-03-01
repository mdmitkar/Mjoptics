import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SplitTextReveal from './SplitTextReveal';

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=2000',
        rightSideVideo: '/assets/videos/glass-1.webm',
        title: 'Timeless Elegance.',
        subtitle: 'Curated luxury eyewear for the modern woman.',
        cta: 'Explore Collection',
        bgColor: 'bg-primary',
        textColor: 'text-soft-bg',
        btnColor: 'bg-accent text-white hover:bg-white hover:text-primary',
    },
    {
         image: 'https://images.unsplash.com/photo-1588667319973-21c60d9ddec3?auto=format&fit=crop&q=80&w=2000',
         title: 'Summer Radiance.',
         subtitle: 'Step out in style with our new Champagne series.',
         cta: 'Shop Sunglasses',
         bgColor: 'bg-soft-bg',
         textColor: 'text-primary',
         btnColor: 'bg-primary text-white hover:bg-accent hover:text-white',
    },
    {
         image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=2000', 
         title: 'UV Protection.',
         subtitle: 'Superior clarity starting from ₹899. Protect your beautiful eyes.',
         cta: 'Shop Now',
         bgColor: 'bg-[#EBE3E3]',
         textColor: 'text-primary',
         btnColor: 'bg-primary text-white hover:bg-white hover:text-primary',
    }
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    useEffect(() => {
        const timer = setInterval(nextSlide, 7000); // 7s for slow luxury feel
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen min-h-[700px] w-full overflow-hidden group">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className={`absolute inset-0 w-full h-full flex flex-col md:flex-row ${slides[current].bgColor}`}
                >
                    {/* Image Half */}
                    <div className="w-full md:w-1/2 h-[50%] md:h-full relative overflow-hidden">
                        <motion.img
                            initial={{ scale: 1.15 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 8, ease: "easeOut" }}
                            src={slides[current].image}
                            alt={slides[current].title}
                            className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/10 md:bg-transparent"></div>
                    </div>
                    
                    {/* Text Half */}
                    <div className="w-full md:w-1/2 h-[50%] md:h-full flex items-center justify-center p-8 md:p-20 relative overflow-hidden">
                         {slides[current].rightSideVideo && (
                             <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.25 }}
                                transition={{ duration: 1.5 }}
                                className="absolute inset-0 z-0 mix-blend-luminosity"
                             >
                                 <video 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline 
                                    src={slides[current].rightSideVideo}
                                    className="w-full h-full object-cover scale-105"
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/80"></div>
                             </motion.div>
                         )}

                         <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 50, damping: 20 }}
                            className={`max-w-xl space-y-6 md:space-y-10 relative z-10 ${slides[current].textColor}`}
                         >
                              <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase opacity-70">
                                   {slides[current].subtitle}
                              </p>
                              
                              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black leading-[1.05] tracking-tight">
                                   <SplitTextReveal text={slides[current].title} />
                              </h1>
                              
                              <div className="pt-4 md:pt-8 line-clamp-1">
                                   <button className={`px-8 md:px-12 py-4 rounded-none font-bold text-xs md:text-sm tracking-[0.15em] uppercase transition-all duration-500 shadow-xl border border-transparent hover:border-current ${slides[current].btnColor}`}>
                                        {slides[current].cta}
                                   </button>
                              </div>
                         </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicators (Progress Bars) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className="relative h-1 w-16 bg-white/30 overflow-hidden hover:bg-white/50 transition-colors"
                    >
                        {idx === current ? (
                            <motion.div
                                className={`absolute top-0 left-0 bottom-0 ${slides[current].bgColor === 'bg-primary' ? 'bg-accent' : 'bg-primary'}`}
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 7, ease: "linear" }}
                            />
                        ) : (
                            <div className="absolute top-0 left-0 bottom-0 bg-transparent" />
                        )}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;
