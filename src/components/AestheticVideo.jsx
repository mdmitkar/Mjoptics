import React from 'react';
import { motion } from 'framer-motion';

const AestheticVideo = () => {
    return (
        <section className="bg-white py-24 overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Video Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full lg:w-1/2 relative group"
                    >
                        <div className="relative aspect-[9/16] md:aspect-video lg:aspect-[4/5] overflow-hidden rounded-[40px] shadow-2xl border-[12px] border-slate-50">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            >
                                <source src="/Spec-4.mp4" type="video/mp4" />
                            </video>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                    </motion.div>

                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <div className="space-y-4">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="inline-block px-4 py-1.5 bg-primary/5 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.3em]"
                            >
                                Digital Lookbook 2026
                            </motion.span>
                            <h2 className="text-5xl lg:text-7xl font-black text-primary leading-[0.9] tracking-tighter uppercase">
                                Crafting <br />
                                <span className="text-accent italic">Aesthetic</span> <br />
                                Perspectives.
                            </h2>
                        </div>

                        <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-md">
                            Experience the intersection of luxury craftsmanship and modern digital precision. Our latest collection is more than eyewear—it's a statement of clarity.
                        </p>

                        <div className="pt-6">
                            <button className="group flex items-center gap-4 text-primary font-black uppercase tracking-widest text-sm hover:text-accent transition-colors">
                                <span className="w-12 h-px bg-primary/20 group-hover:bg-accent group-hover:w-16 transition-all duration-500"></span>
                                Explore Styles
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AestheticVideo;
