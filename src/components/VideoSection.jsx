import React from 'react';

const VideoSection = () => {
    return (
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
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

            {/* Overlay */}
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white space-y-8 max-w-3xl px-6 animate-in fade-in zoom-in duration-1000">
                <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                    Experience the Difference <br />
                    at <span className="text-accent italic">M J Optics</span>
                </h2>
                <p className="text-xl font-medium text-slate-100 italic">
                    "Where precision meets style, for every pair of eyes we touch."
                </p>
                <div className="flex justify-center gap-4">
                    <button className="btn-accent px-10">Visit Our Store</button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
                    <div className="w-1 h-2 bg-white rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
