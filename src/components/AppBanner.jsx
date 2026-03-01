import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Apple, Play } from 'lucide-react';

const AppBanner = () => {
    return (
        <section className="py-20 px-4">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-primary rounded-[40px] overflow-hidden p-12 md:p-20 flex flex-col lg:row items-center justify-between gap-12 group"
                >
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 lg:w-3/5 space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                            <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Now available on mobile</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black text-white leading-none uppercase tracking-tighter">
                            Your Perfect <br />
                            <span className="text-accent italic">Eyewear App</span>
                        </h2>

                        <p className="text-lg text-slate-200 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed italic">
                            Experience 3D Trial, Virtual Measurements, and the entire MJ Optics catalog from the comfort of your palm.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                            <button className="bg-white text-primary px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-accent hover:text-white transition-all transform hover:scale-105 active:scale-95">
                                <Apple className="w-5 h-5 fill-current" /> App Store
                            </button>
                            <button className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-white hover:text-primary transition-all transform hover:scale-105 active:scale-95">
                                <Play className="w-5 h-5 fill-current" /> Google Play
                            </button>
                        </div>
                    </div>

                    <div className="relative z-10 lg:w-1/3 flex justify-center">
                        <motion.div
                            initial={{ y: 50, rotate: 5 }}
                            whileInView={{ y: 0, rotate: -5 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="bg-slate-900 w-[240px] h-[480px] rounded-[40px] border-8 border-slate-800 shadow-2xl relative overflow-hidden"
                        >
                            <img
                                src="/assets/app_mockup.png"
                                alt="App Interface"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                            <div className="absolute bottom-10 left-0 w-full text-center px-6">
                                <div className="text-white font-black text-xl uppercase tracking-tighter">M J OPTICS</div>
                                <div className="text-accent text-[8px] font-bold uppercase tracking-[0.4em] mt-1">Virtual Try-On</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AppBanner;
