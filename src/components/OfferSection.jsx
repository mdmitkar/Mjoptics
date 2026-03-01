import React from 'react';
import { Sparkles, ArrowRight, Zap } from 'lucide-react';

const OfferSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Main Offer Card */}
                    <div className="relative rounded-3xl overflow-hidden h-[450px] group shadow-xl border-4 border-white flex">
                        <img
                            src="/assets/banner_offer.png"
                            alt="Special Offer"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent flex flex-col justify-center p-8 lg:p-12 text-white space-y-6">
                            <div className="flex items-center gap-2 bg-cta-highlight px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest w-fit shadow-lg">
                                <Sparkles className="w-3 h-3" /> Exclusive Deal
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tighter uppercase">
                                Buy 2 Specs & <br />
                                <span className="text-accent italic">Contact Lens FREE</span>
                            </h2>
                            <p className="text-base lg:text-lg font-medium opacity-90 max-w-sm">Upgrade your vision with our most popular bundle. Available on all premium frames.</p>
                            <button className="bg-white text-primary px-8 py-3.5 rounded-xl font-black text-sm uppercase tracking-widest w-fit hover:bg-accent hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl">
                                Claim Offer
                            </button>
                        </div>
                    </div>

                    {/* Secondary Offer Card */}
                    <div className="bg-soft-bg border-4 border-white rounded-3xl p-8 lg:p-12 flex flex-col justify-center space-y-8 relative overflow-hidden group shadow-lg">
                        <div className="absolute -top-12 -right-12 p-12 opacity-10 group-hover:opacity-20 transition-all rotate-12">
                            <Zap className="w-48 h-48 text-accent" />
                        </div>
                        <div className="space-y-4 relative z-10">
                            <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Limited Period</div>
                            <h3 className="text-3xl lg:text-4xl font-black text-primary leading-tight tracking-tighter uppercase">UV Protection <br />Pro-Series</h3>
                            <p className="text-slate-500 font-bold text-lg">Superior clarity. Advanced eye protection.</p>
                        </div>
                        <div className="flex items-baseline gap-3 relative z-10">
                            <span className="text-4xl lg:text-5xl font-black text-cta-highlight tracking-tighter">₹899</span>
                            <span className="text-slate-300 line-through text-lg lg:text-xl font-bold">₹1,999</span>
                        </div>
                        <button className="btn-primary w-fit py-4 px-10 flex items-center gap-3 relative z-10 uppercase tracking-widest text-sm">
                            Shop UV Tech <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;
