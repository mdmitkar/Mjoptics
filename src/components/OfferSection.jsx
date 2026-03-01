import React from 'react';

const OfferSection = () => {
    return (
        <section className="section-padding">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Main Offer */}
                <div className="relative rounded-premium overflow-hidden h-[300px] group shadow-xl">
                    <img
                        src="/assets/offer_banner.png"
                        alt="Special Offer"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent flex flex-col justify-center p-10 text-white space-y-4">
                        <span className="bg-cta-highlight px-3 py-1 rounded-full text-xs font-black uppercase w-fit">Limited Time Offer</span>
                        <h2 className="text-4xl font-black text-white leading-tight">
                            Buy 2 Specs & Get <br />
                            <span className="text-accent italic">Contact Lens FREE</span>
                        </h2>
                        <button className="btn-accent w-fit py-2 px-6">Claim Now</button>
                    </div>
                </div>

                {/* Secondary Offer */}
                <div className="bg-white border-2 border-dashed border-accent rounded-premium p-10 flex flex-col justify-center space-y-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-9xl rotate-12 block">👓</span>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-black text-primary">UV Protection Glass</h3>
                        <p className="text-slate-500 font-medium">Starting from just ₹899</p>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black text-cta-highlight">₹899</span>
                        <span className="text-slate-400 line-through text-lg">₹1999</span>
                    </div>
                    <button className="btn-primary w-fit py-2 px-6">Shop UV Care</button>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;
