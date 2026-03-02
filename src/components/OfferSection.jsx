import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const OfferSection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Main Offer Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 20 }}
                        className="relative rounded-2xl overflow-hidden h-[450px] group shadow-[0_20px_40px_-15px_rgba(216,164,164,0.2)] border border-[#EBE3E3] flex"
                    >
                        <img
                            src="/assets/banner_offer.png"
                            alt="Special Offer"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/60 to-transparent flex flex-col justify-center p-8 lg:p-12 text-white space-y-6">
                            <div className="flex items-center gap-2 bg-accent/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] w-fit shadow-md border border-white/20">
                                Exclusive Selection
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-serif font-black text-white leading-tight tracking-tight">
                                Buy 2 Pairs & <br />
                                <span className="text-accent italic font-serif">Get 1 Free.</span>
                            </h2>
                            <p className="text-sm lg:text-base font-medium opacity-90 max-w-sm leading-relaxed">Curate your perfect eyewear wardrobe with our season's most loved styles.</p>
                            <button className="bg-white text-primary px-8 py-4 rounded-none font-bold text-[10px] uppercase tracking-[0.2em] w-fit hover:bg-accent hover:text-white transition-all duration-300 shadow-xl border border-transparent">
                                Discover Offer
                            </button>
                        </div>
                    </motion.div>

                    {/* Secondary Offer Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
                        className="bg-soft-bg border border-[#EBE3E3] rounded-2xl p-8 lg:p-12 flex flex-col justify-center space-y-8 relative overflow-hidden group shadow-[0_15px_30px_-10px_rgba(216,164,164,0.15)]"
                    >
                        <div className="absolute -top-12 -right-12 p-12 opacity-5 group-hover:opacity-10 transition-all rotate-12 duration-1000 ease-out group-hover:rotate-45 group-hover:scale-110">
                            <Zap className="w-48 h-48 text-accent" />
                        </div>
                        <div className="space-y-4 relative z-10">
                            <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-accent/20">The Summer Edit</div>
                            <h3 className="text-2xl lg:text-3xl font-serif font-black text-primary leading-tight tracking-tight">UV Protection <br />Pro-Series.</h3>
                            <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xs">Flawless clarity meets absolute protection against harmful rays.</p>
                        </div>
                        <div className="flex items-baseline gap-4 relative z-10">
                            <span className="text-3xl lg:text-4xl font-sans font-black text-primary tracking-tight">₹899</span>
                            <span className="text-slate-400 line-through text-lg font-bold">₹1,999</span>
                        </div>
                        <button className="border border-primary text-primary hover:bg-primary hover:text-white w-fit py-4 px-10 flex items-center gap-4 relative z-10 uppercase tracking-[0.2em] text-[10px] font-bold transition-all duration-300">
                            Shop UV Collection <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;
