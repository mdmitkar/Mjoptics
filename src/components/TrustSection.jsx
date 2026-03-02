import React from 'react';
import { Award, ShieldCheck, Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
    { icon: Award, label: '23 Years Legacy', desc: 'Verified Expertise', color: 'text-primary' },
    { icon: ShieldCheck, label: 'Certified Care', desc: 'Eye Testing', color: 'text-accent' },
    { icon: Heart, label: '1000+ Happy Eyes', desc: 'Trust of Kalyan', color: 'text-primary' },
    { icon: Star, label: 'Luxury Brands', desc: 'Premium Frames', color: 'text-accent' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
        opacity: 1, 
        y: 0,
        transition: { type: "spring", stiffness: 80, damping: 20 } 
    }
};

const TrustSection = () => {
    return (
        <section className="bg-white py-24 border-y border-[#EBE3E3] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10"
            >
                {stats.map((stat) => (
                    <motion.div variants={itemVariants} key={stat.label} className="text-center space-y-6 group">
                        <div className="w-20 h-20 flex items-center justify-center mx-auto rounded-full bg-soft-bg shadow-sm transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_15px_30px_-5px_rgba(216,164,164,0.3)] border border-[#EBE3E3] cursor-default">
                            <stat.icon className={`w-8 h-8 ${stat.color} transition-transform duration-700 group-hover:scale-110`} strokeWidth={1.5} />
                        </div>
                        <div className="space-y-3">
                            <h4 className="font-serif font-black text-primary text-xl tracking-tight group-hover:text-accent transition-colors">{stat.label}</h4>
                            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.2em]">{stat.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default TrustSection;
