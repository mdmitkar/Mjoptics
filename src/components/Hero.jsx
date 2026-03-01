import React from 'react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-8 relative z-10 animate-in fade-in slide-in-from-left duration-1000">
                    <div className="inline-block px-4 py-1.5 bg-accent/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
                        Premium Eyewear Expert
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black leading-tight text-primary">
                        Clear Vision. <br />
                        <span className="text-accent underline decoration-4 underline-offset-8">Trusted</span> for 23 Years.
                    </h1>
                    <p className="text-xl text-slate-600 font-medium max-w-lg leading-relaxed">
                        M J Optics brings you the finest collection of eyewear and contact lenses in Kalyan West. Quality you can see, service you can trust.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="btn-primary flex items-center gap-2">
                            Explore Collection <span>→</span>
                        </button>
                        <button className="btn-accent border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-white transition-all">
                            Book Eye Test
                        </button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative animate-in fade-in zoom-in duration-1000 delay-200">
                    <div className="absolute -inset-4 bg-accent/5 rounded-[40px] blur-3xl"></div>
                    <div className="relative rounded-[40px] border-4 border-white shadow-2xl overflow-hidden animate-float">
                        <img
                            src="/banner1.png"
                            alt="Premium Eyewear"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
        </section>
    );
};

export default Hero;
