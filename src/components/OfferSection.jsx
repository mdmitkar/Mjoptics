import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const OfferSection = () => {
    return (
        <section className="py-24">
            <div className="grid md:grid-cols-2 gap-10">
                {/* Main Offer */}
                <div className="relative rounded-[32px] overflow-hidden h-[400px] group shadow-2xl border-4 border-white">
                    <img
                        src="/assets/banner_offer.png"
                        alt="Special Offer"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/40 to-transparent flex flex-col justify-center p-12 text-white space-y-6">
                        <div className="flex items-center gap-3 bg-cta-highlight px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest w-fit shadow-xl">
                            <Sparkles className="w-3 h-3" /> Exclusive Deal
                        </div>
                        <h2 className="text-5xl font-black text-white leading-[1.1] tracking-tighter drop-shadow-lg">
                            Buy 2 Specs & <br />
                            <span className="text-accent italic drop-shadow-none">Contact Lens FREE</span>
                        </h2>
                        <p className="text-lg font-medium opacity-90 max-w-sm">Upgrade your vision with our most popular bundle. Valid on all premium brands.</p>
                        <button className="bg-white text-primary px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider w-fit hover:bg-accent hover:text-white transition-all transform hover:scale-105 shadow-xl active:scale-95">
                            Claim Now
                        </button>
                    </div>
                </div>

                {/* Secondary Offer */}
                <div className="bg-slate-50 border-4 border-white rounded-[32px] p-12 flex flex-col justify-center space-y-8 relative overflow-hidden group shadow-xl">
                    <div className="absolute -top-10 -right-10 p-12 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                        <img src="/assets/product_1.png" alt="Glasses" className="w-64 h-64 object-contain" />
                    </div>
                    <div className="space-y-3 relative z-10">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-[10px] font-black uppercase tracking-widest">Limited Edition</div>
                        <h3 className="text-4xl font-black text-primary leading-tight tracking-tighter">UV Protection <br />Pro-Series</h3>
                        <p className="text-slate-500 font-bold text-lg">Superior clarity. Starting from ₹899</p>
                    </div>
                    <div className="flex items-baseline gap-3 relative z-10">
                        <span className="text-5xl font-black text-cta-highlight tracking-tighter">₹899</span>
                        <span className="text-slate-300 line-through text-xl font-bold">₹1,999</span>
                    </div>
                    <button className="btn-primary w-fit py-4 px-10 flex items-center gap-3 relative z-10">
                        Shop UV Care <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;
