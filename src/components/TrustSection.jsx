import React from 'react';
import { Award, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
    { icon: Award, label: '23 Years Legacy', desc: 'Verified Optical Expertise', color: 'text-primary' },
    { icon: ShieldCheck, label: 'Certified Care', desc: 'Professional Eye Testing', color: 'text-accent' },
    { icon: Heart, label: '1000+ Happy Eyes', desc: 'Trust of Kalyan West', color: 'text-cta-highlight' },
    { icon: Sparkles, label: 'Luxury Brands', desc: 'Curated Premium Frames', color: 'text-primary' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
        opacity: 1, 
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 20 } 
    }
};

const TrustSection = () => {
    return (
        <section className="bg-soft-bg py-24 border-y border-light-gray relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10"
            >
                {stats.map((stat) => (
                    <motion.div variants={itemVariants} key={stat.label} className="text-center space-y-5 group">
                        <div className="w-20 h-20 flex items-center justify-center mx-auto rounded-3xl bg-white shadow-md transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-xl group-hover:border-accent/20 border border-light-gray cursor-default">
                            <stat.icon className={`w-10 h-10 ${stat.color} transition-transform duration-500 group-hover:scale-110`} />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-black text-primary text-lg uppercase tracking-tight">{stat.label}</h4>
                            <p className="text-slate-500 text-sm font-medium opacity-80">{stat.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default TrustSection;
