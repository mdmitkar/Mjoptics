import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import LenskartProductCard from './LenskartProductCard';
import { spectaclesData } from '../data/spectaclesData';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { type: "spring", stiffness: 80, damping: 20 } 
    }
};

const ProductGrid = () => {
    // Select 4 premium items from standard data for the homepage
    const products = spectaclesData.slice(0, 4);

    return (
        <section className="py-24 bg-white relative">
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#EBE3E3] to-transparent"></div>
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
                    <div className="space-y-4 text-center md:text-left max-w-xl">
                        <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-xs font-black uppercase tracking-widest border border-accent/20">Trending Now</div>
                        <h2 className="text-3xl md:text-4xl font-serif font-black tracking-tight text-primary">Best Sellers.</h2>
                        <p className="text-slate-500 font-medium">Discover the frames that everyone is falling in love with this season.</p>
                    </div>
                    <button className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-3 group border-b border-primary/20 hover:border-accent pb-1 uppercase tracking-widest text-xs">
                        View Complete Collection
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10"
                >
                    {products.map((product) => (
                        <motion.div key={product.id} variants={cardVariants}>
                            <LenskartProductCard product={product} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProductGrid;
