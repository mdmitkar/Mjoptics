import React from 'react';
import { motion } from 'framer-motion';

const SEOContent = () => {
    return (
        <section className="bg-soft-bg py-24">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-primary">
                            Premium Eye Care <br />In Kalyan West
                        </h2>
                        <div className="h-1 w-20 bg-accent"></div>
                        <p className="text-slate-600 font-medium leading-relaxed">
                            MJ Optics has been the cornerstone of vision care in Kalyan for over two decades. Our commitment to excellence goes beyond just selling frames; we provide comprehensive eye health solutions tailored to your unique lifestyle.
                        </p>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            From the latest digital lens technologies to internationally acclaimed luxury eyewear brands, we bring the world's best optical solutions to your doorstep. Experience the perfect blend of medical precision and high-fashion aesthetics at our flagship store.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-8"
                    >
                        <div className="space-y-2">
                            <h4 className="font-black text-primary uppercase text-xs tracking-widest">Our Specialties</h4>
                            <ul className="text-slate-500 text-xs font-bold space-y-2 uppercase">
                                <li>• Advanced Eye Testing</li>
                                <li>• Designer Sunglasses</li>
                                <li>• Contact Lens Clinic</li>
                                <li>• Blue-Cut Glasses</li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-black text-primary uppercase text-xs tracking-widest">Global Brands</h4>
                            <ul className="text-slate-500 text-xs font-bold space-y-2 uppercase">
                                <li>• Ray-Ban</li>
                                <li>• Oakley</li>
                                <li>• Vogue</li>
                                <li>• Carrera</li>
                            </ul>
                        </div>
                        <div className="col-span-2 pt-4">
                            <div className="p-6 bg-white rounded-2xl border border-light-gray shadow-sm">
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">Customer First</p>
                                <p className="text-sm font-medium italic text-slate-600">
                                    "Our goal is not just to help you see better, but to make you look incredible while doing it."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SEOContent;
