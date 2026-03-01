import React from 'react';
import { Play, MapPin, MessageCircle, ExternalLink } from 'lucide-react';

const VideoSection = () => {
    return (
        <div className="animate-fade-in">
            {/* Cinematic Video Section */}
            <section className="relative h-[650px] w-full flex items-center justify-center overflow-hidden p-0 m-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                >
                    <source src="/video1.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/30 to-primary/80 backdrop-blur-[1px]"></div>

                <div className="relative z-10 text-center text-white space-y-8 max-w-4xl px-8">
                    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mx-auto">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span> Kalyan's Most Trusted Optician
                    </div>

                    <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase drop-shadow-2xl">
                        Precision <br />
                        <span className="text-accent italic drop-shadow-none">Optical Care</span>
                    </h2>

                    <p className="text-lg md:text-xl font-medium text-slate-100 opacity-90 max-w-2xl mx-auto leading-relaxed italic">
                        "Combining 23 years of medical precision with the world's finest eyewear trends."
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                        <button className="bg-accent text-white px-10 py-4.5 rounded-2xl font-black text-base uppercase tracking-widest hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-2xl active:scale-95 flex items-center justify-center gap-3">
                            Book Appointment <ExternalLink className="w-4 h-4" />
                        </button>
                        <button className="bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white px-10 py-4.5 rounded-2xl font-black text-base uppercase tracking-widest hover:bg-white/20 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
                            <Play className="w-4 h-4 fill-white" /> Watch Story
                        </button>
                    </div>
                </div>

                {/* Marquee Effect */}
                <div className="absolute bottom-0 w-full overflow-hidden opacity-10 whitespace-nowrap hidden md:block border-t border-white/10 py-6">
                    <div className="inline-block animate-marquee text-8xl font-black text-white tracking-[0.2em] uppercase leading-none">
                        EYE TESTING • PREMIUM FRAMES • CONTACT LENSES • LUXURY EYEWEAR • EYE TESTING • PREMIUM FRAMES •
                    </div>
                </div>
            </section>

            {/* Modern Find Us Section */}
            <section className="bg-soft-bg py-32 border-t border-light-gray">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                        <div className="lg:w-1/2 space-y-8 reveal">
                            <div className="inline-block px-4 py-1.5 bg-accent/10 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Our Flagship Store</div>
                            <h2 className="text-4xl lg:text-5xl font-black leading-tight uppercase tracking-tighter">Experience <br />M J Optics In Person</h2>
                            <p className="text-xl text-slate-500 font-medium leading-relaxed">
                                Visit our state-of-the-art facility in Kalyan West for personalized eye care and a private consultation with our frame stylists.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 pt-4">
                                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-light-gray shadow-sm group hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 bg-soft-bg rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Location</p>
                                        <p className="text-base font-bold text-primary">Kalyan West, Maharashtra</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-light-gray shadow-sm group hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center text-white">
                                        <MessageCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">WhatsApp</p>
                                        <p className="text-base font-bold text-primary">Fast Consultation</p>
                                    </div>
                                </div>
                            </div>

                            <button className="btn-primary w-full sm:w-fit py-4.5 px-12 text-sm uppercase tracking-[0.2em]">
                                Get Directions
                            </button>
                        </div>

                        <div className="lg:w-1/2 w-full aspect-[4/3] bg-white rounded-3xl overflow-hidden shadow-2xl relative group border-8 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1556740734-7f9a2b7a0d59?auto=format&fit=crop&q=80&w=1200"
                                alt="Store Consultation"
                                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all"></div>
                            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs border border-light-gray transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-2">Established 2003</p>
                                <p className="text-sm font-bold text-primary leading-snug">Trust of two decades in every frame we craft.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VideoSection;
