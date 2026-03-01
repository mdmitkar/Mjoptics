import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import LenskartProductCard from './LenskartProductCard';
import { spectaclesData } from '../data/spectaclesData';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
};

const ProductGrid = () => {
    // Select 4 premium items from standard data for the homepage
    const products = spectaclesData.slice(0, 4);

    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
                    <div className="space-y-4 text-center md:text-left">
                        <div className="inline-block px-4 py-1.5 bg-accent/10 text-primary rounded-full text-xs font-black uppercase tracking-widest">Trending Now</div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Best Sellers</h2>
                        <div className="w-20 h-1.5 bg-accent mx-auto md:mx-0 rounded-full"></div>
                    </div>
                    <button className="text-primary font-black hover:text-accent transition-all flex items-center gap-3 group border-b-2 border-accent pb-1 uppercase tracking-widest text-sm">
                        Discover More
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
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
