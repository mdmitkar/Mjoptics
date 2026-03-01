import React from 'react';
import { Play, Store, ArrowRight } from 'lucide-react';

const VideoSection = () => {
    return (
        <section className="relative h-[700px] w-full flex items-center justify-center overflow-hidden my-24 p-0">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-105"
            >
                <source src="/video1.mp4" type="video/mp4" />
            </video>

            {/* Dynamic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/80 backdrop-blur-[1px]"></div>

            {/* Animated Content */}
            <div className="relative z-10 text-center text-white space-y-10 max-w-4xl px-8">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mx-auto animate-pulse">
                    <Store className="w-4 h-4 text-accent" /> Kalyan's Most Trusted Optician
                </div>

                <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter drop-shadow-2xl">
                    Experience <br />
                    <span className="text-accent italic drop-shadow-none">Optical Excellence</span>
                </h2>

                <p className="text-xl md:text-2xl font-medium text-slate-100 italic opacity-90 max-w-2xl mx-auto leading-relaxed">
                    "Where high-precision medical expertise meets premium global-style eyewear trends."
                </p>

                <div className="flex flex-col sm:row justify-center gap-8 pt-8">
                    <button className="bg-accent text-white px-12 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-2xl shadow-accent/20 active:scale-95 flex items-center justify-center gap-4">
                        Visit Our Store <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white/20 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-4">
                        <Play className="w-5 h-5 fill-white" /> Watch Review
                    </button>
                </div>
            </div>

            {/* Scrolling Text Ribbon Effect */}
            <div className="absolute bottom-10 w-full overflow-hidden opacity-20 whitespace-nowrap hidden md:block">
                <div className="inline-block animate-marquee text-[100px] font-black text-white tracking-widest uppercase select-none p-0 leading-none">
                    M J OPTICS PREMIUM EYEWEAR & LUXURY FRAMES • M J OPTICS PREMIUM EYEWEAR & LUXURY FRAMES •
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
