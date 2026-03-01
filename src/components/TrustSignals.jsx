import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, RotateCcw, Clock } from 'lucide-react';

const TrustSignals = () => {
    const signals = [
        {
            icon: ShieldCheck,
            title: "100% Authentic",
            desc: "Direct from brands with dual quality check."
        },
        {
            icon: Truck,
            title: "Free Delivery",
            desc: "Zero shipping cost on all orders above ₹999."
        },
        {
            icon: RotateCcw,
            title: "Easy Returns",
            desc: "14-day hassle-free return policy."
        },
        {
            icon: Clock,
            title: "23 Years Trust",
            desc: "Serving Kalyan with precision since 2003."
        }
    ];

    return (
        <section className="bg-white py-16 border-t border-slate-100">
            <div className="container-custom">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {signals.map((signal, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="flex items-center gap-5 p-6 rounded-2xl bg-soft-bg/50 border border-transparent hover:border-accent/20 hover:bg-white hover:shadow-xl transition-all group"
                        >
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                                <signal.icon className="w-7 h-7" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-lg font-black text-primary uppercase tracking-tight">{signal.title}</h3>
                                <p className="text-sm text-slate-500 font-medium leading-tight">{signal.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSignals;
