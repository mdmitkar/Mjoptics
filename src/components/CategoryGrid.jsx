import React from 'react';
import { Eye, Shield, User, Monitor, Sun, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
    { name: 'Eyeglasses', img: '/assets/category_eyeglasses.png', path: '/eyeglasses', icon: Eye },
    { name: 'Sunglasses', img: '/assets/category_sunglasses.png', path: '/sunglasses', icon: Sun },
    { name: 'Contact Lenses', img: '/assets/category_contact_lenses.png', path: '/contact-lenses', icon: Shield },
    { name: 'Kids Glasses', img: '/assets/category_kids_glasses.png', path: '/eyeglasses', icon: User },
    { name: 'Computer Glasses', img: '/assets/category_computer_glasses.png', path: '/eyeglasses', icon: Monitor },
    { name: 'Power Sunglasses', img: '/assets/category_power_sunglasses.png', path: '/sunglasses', icon: Zap },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
};

const CategoryGrid = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16 space-y-4"
                >
                    <div className="inline-block px-4 py-1.5 bg-accent/10 text-primary rounded-full text-xs font-black uppercase tracking-widest">Explore Collections</div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Shop by Category</h2>
                    <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8"
                >
                    {categories.map((cat, idx) => (
                        <motion.a
                            href={cat.path}
                            key={cat.name}
                            variants={itemVariants}
                            className="premium-card group cursor-pointer text-center p-6 flex flex-col items-center justify-center gap-5 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="w-full aspect-square relative overflow-hidden rounded-premium bg-slate-50 flex items-center justify-center border border-slate-100/50">
                                <img
                                    src={cat.img}
                                    alt={cat.name}
                                    className="w-4/5 h-4/5 object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <h3 className="text-sm font-black tracking-widest uppercase transition-colors group-hover:text-accent">
                                    {cat.name}
                                </h3>
                                <div className="h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-300"></div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CategoryGrid;
