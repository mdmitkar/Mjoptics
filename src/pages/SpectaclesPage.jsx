import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LenskartProductCard from '../components/LenskartProductCard';
import { spectaclesData } from '../data/spectaclesData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PRODUCTS_PER_PAGE = 12;

import SplitTextReveal from '../components/SplitTextReveal';


// Stagger layouts
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
};

const SpectaclesPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    
    // Scroll to top when page changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    // Pagination Calculation
    const totalPages = Math.ceil(spectaclesData.length / PRODUCTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const currentProducts = spectaclesData.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

    return (
        <div className="min-h-screen bg-slate-50/30 overflow-hidden">
            <main className="pt-28 pb-24">
                
                {/* Hero Section */}
                <div className="container-custom py-16 text-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="inline-block px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-black uppercase tracking-widest mb-6"
                    >
                        2024 Collection
                    </motion.div>
                    
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 relative">
                        <SplitTextReveal text="Elevate Your" />
                        <br />
                        <SplitTextReveal text="Perspective." className="text-transparent bg-clip-text bg-linear-to-r from-teal-600 to-emerald-400" />
                    </h1>
                    
                    <motion.p 
                        className="max-w-2xl mx-auto text-lg text-slate-500 font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        Discover our exclusively curated spectacles collection. Featuring over 40 distinct, precision-engineered designs built for the modern individual.
                    </motion.p>
                </div>

                {/* Grid Area */}
                <div className="container-custom">
                    
                    {/* Results count & Filter Mock */}
                    <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-10 sticky top-24 z-30 backdrop-blur-md">
                        <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                            Showing <span className="text-slate-900">{startIndex + 1} - {Math.min(startIndex + PRODUCTS_PER_PAGE, spectaclesData.length)}</span> of {spectaclesData.length} Models
                        </div>
                        <div className="flex gap-4">
                            <select className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm font-bold outline-none cursor-pointer hover:border-teal-500 transition-colors">
                                <option>Sort: Latest Releases</option>
                                <option>Price: Low High</option>
                                <option>Price: High Low</option>
                            </select>
                        </div>
                    </div>

                    {/* Animated Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={currentPage} // Forces re-animation when page changes
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
                        >
                            {currentProducts.map((product) => (
                                <motion.div key={product.id} variants={cardVariants} layout>
                                    <LenskartProductCard product={product} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <motion.div 
                            className="flex justify-center items-center gap-4 mt-20"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <button 
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className={`p-3 rounded-full flex items-center justify-center transition-all ${currentPage === 1 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-700 shadow-md hover:shadow-lg hover:text-teal-600 hover:-translate-x-1 border border-slate-100'}`}
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            
                            <div className="flex gap-2">
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(i + 1)}
                                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-black transition-all ${currentPage === i + 1 ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30 scale-110' : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100'}`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>

                            <button 
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className={`p-3 rounded-full flex items-center justify-center transition-all ${currentPage === totalPages ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-700 shadow-md hover:shadow-lg hover:text-teal-600 hover:translate-x-1 border border-slate-100'}`}
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </motion.div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default SpectaclesPage;
