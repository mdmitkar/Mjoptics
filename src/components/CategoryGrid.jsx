import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
    { 
        name: 'Eyeglasses',
        desc: 'Everyday elegance and crystal clear vision.',
        img: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=1000', 
        path: '/eyeglasses',
        span: 'md:col-span-2 md:row-span-2 h-[400px] md:h-[600px]'
    },
    { 
        name: 'Sunglasses',
        desc: 'Chic protection for sunny days.',
        img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800', 
        path: '/sunglasses',
        span: 'md:col-span-1 md:row-span-1 h-[300px]'
    },
    { 
        name: 'Contact Lenses',
        desc: 'Invisible comfort all day long.',
        img: 'https://images.unsplash.com/photo-1577900232427-18219b9166a0?auto=format&fit=crop&q=80&w=800', 
        path: '/contact-lenses',
        span: 'md:col-span-1 md:row-span-1 h-[300px]'
    },
    { 
        name: 'Kids Glasses',
        desc: 'Durable & cute frames for little ones.',
        img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800', 
        path: '/eyeglasses',
        span: 'md:col-span-1 md:row-span-1 h-[300px]'
    },
    { 
        name: 'Computer Glasses',
        desc: 'Blue light defense for digital lovers.',
        img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800', 
        path: '/eyeglasses',
        span: 'md:col-span-2 md:row-span-1 h-[300px]'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    show: { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: { type: "spring", stiffness: 80, damping: 20 } 
    }
};

const CategoryGrid = () => {
    return (
        <section className="py-24 bg-soft-bg overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="container-custom relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16 space-y-4 max-w-2xl mx-auto"
                >
                    <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-xs font-black uppercase tracking-widest border border-accent/20">
                        Curated Collections
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tight text-primary">
                        Find Your Perfect Look.
                    </h2>
                    <p className="text-slate-500 font-medium">Explore our premium selection crafted for elegance and everyday comfort.</p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {categories.map((cat, idx) => (
                        <motion.a
                            href={cat.path}
                            key={cat.name}
                            variants={itemVariants}
                            className={`group cursor-pointer relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-accent/20 transition-all duration-700 ${cat.span}`}
                        >
                            <img
                                src={cat.img}
                                alt={cat.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                            />
                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                            
                            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end items-start text-white">
                                <motion.div 
                                    className="overflow-hidden"
                                >
                                    <h3 className="text-3xl md:text-4xl font-serif font-black tracking-tight mb-2 group-hover:-translate-y-2 transition-transform duration-500">
                                        {cat.name}
                                    </h3>
                                </motion.div>
                                <div className="overflow-hidden h-0 group-hover:h-12 transition-all duration-500 ease-out">
                                    <p className="text-sm md:text-base opacity-90 font-medium mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                        {cat.desc}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mt-2 group-hover:text-white transition-colors duration-300">
                                    <span>Explore</span>
                                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CategoryGrid;
