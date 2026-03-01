import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LenskartProductCard from '../components/LenskartProductCard';
import { motion } from 'framer-motion';

const dummyProducts = [
    {
        id: 1,
        name: 'Vincent Chase | Lenskart Studio',
        size: 'Extra Wide',
        rating: '4.9',
        ratingCount: '2859',
        price: '1000',
        originalPrice: '2000',
        discount: '40',
        swatches: [
            { colorCode: '#B8860B', image: '/assets/product_4.png' },
            { colorCode: '#000000', image: '/assets/product_1.png' }
        ],
    },
    {
        id: 2,
        name: 'John Jacobs | Meller',
        size: 'Medium',
        rating: '4.9',
        ratingCount: '528',
        price: '3000',
        originalPrice: '5000',
        discount: '40',
        swatches: [
            { colorCode: '#2F4F4F', image: '/assets/product_3.png' }
        ],
    },
    {
        id: 3,
        name: 'Hustlr',
        size: 'Wide • Tinted',
        rating: '4.7',
        ratingCount: '439',
        price: '500',
        originalPrice: '1000',
        discount: '50',
        swatches: [
            { colorCode: '#008080', image: '/assets/product_2.png' },
            { colorCode: '#4B0082', image: '/assets/product_1.png' }
        ],
    },
    {
        id: 4,
        name: 'Essentials',
        size: 'Medium',
        rating: '4.8',
        ratingCount: '1349',
        price: '500',
        originalPrice: '1000',
        discount: '50',
        swatches: [
            { colorCode: '#A0522D', image: '/assets/product_4.png' }
        ],
    },
    {
        id: 5,
        name: 'Juniors | 5 to 8 years',
        size: 'Small',
        rating: '4.6',
        ratingCount: '890',
        price: '600',
        originalPrice: '1200',
        discount: '50',
        swatches: [
            { colorCode: '#FFB6C1', image: '/assets/product_2.png' },
            { colorCode: '#C0C0C0', image: '/assets/product_3.png' }
        ],
    },
    {
        id: 6,
        name: 'All Brands',
        size: 'Medium',
        rating: '4.5',
        ratingCount: '420',
        price: '500',
        originalPrice: '1000',
        discount: '50',
        swatches: [
            { colorCode: '#E6E6FA', image: '/assets/product_1.png' }
        ],
    }
];

// Stagger variants array for Framer Motion
const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
};

const slideRightVariant = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } }
};

const SunglassesPage = () => {
    return (
        <div className="min-h-screen bg-slate-50/50">
            <main className="pt-28 pb-20">
                {/* Breadcrumb & Util Area */}
                <motion.div 
                    className="border-b border-slate-200 bg-white sticky top-20 z-30"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="container-custom py-3 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
                        <div className="flex items-center gap-2">
                            <span className="cursor-pointer hover:text-primary transition-colors">Eyewear</span>
                            <span>/</span>
                            <span className="font-bold text-slate-800 text-[13px]">Sunglasses</span>
                        </div>
                        <div className="text-slate-400">
                            Problem in placing order ? Give a missed call <span className="text-slate-800 font-bold ml-1">99998 99998</span>
                        </div>
                    </div>
                </motion.div>

                <div className="container-custom mt-8 flex flex-col lg:flex-row gap-10">
                    {/* Left Sidebar Filters */}
                    <motion.div 
                        className="w-full lg:w-64 shrink-0 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                    >
                        <div className="sticky top-40 space-y-8">
                            {/* Age Group */}
                            <motion.div variants={slideRightVariant}>
                                <h4 className="text-[13px] font-black text-slate-800 mb-4 uppercase tracking-widest">Age Group</h4>
                                <div className="space-y-3">
                                    {['2-5 yrs(2)', '5-8 yrs(9)', '8-12 yrs(77)'].map((label, i) => (
                                        <motion.label 
                                            key={i} 
                                            className="flex items-center gap-3 cursor-pointer group"
                                            whileHover={{ x: 5 }}
                                        >
                                            <div className="w-4 h-4 border-2 border-slate-300 rounded group-hover:border-teal-500 transition-all flex items-center justify-center">
                                                <div className="w-2 h-2 bg-teal-500 rounded-sm opacity-0 group-active:opacity-100 transition-opacity"></div>
                                            </div>
                                            <span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">{label}</span>
                                        </motion.label>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Frame Type */}
                            <motion.div variants={slideRightVariant} className="pt-6 border-t border-slate-100">
                                <h4 className="text-[13px] font-black text-slate-800 mb-4 uppercase tracking-widest">Frame Type</h4>
                                <div className="grid grid-cols-3 gap-3">
                                    {['Full Rim', 'Rimless', 'Half Rim'].map((type, i) => (
                                        <motion.div 
                                            key={i} 
                                            className="flex flex-col items-center justify-center p-3 border-2 border-slate-100 rounded-xl cursor-pointer hover:border-teal-500 hover:bg-teal-50/50 transition-all text-[11px] font-bold text-slate-600 text-center shadow-sm"
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <div className="w-8 h-3.5 bg-slate-200 mb-2 rounded-sm group-hover:bg-teal-200 transition-colors"></div>
                                            {type}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                            
                            {/* Fake sections to replicate look */}
                            {['Frame Shape', 'Frame Color', 'Brands'].map((title, i) => (
                                <motion.div variants={slideRightVariant} key={i} className="pt-6 border-t border-slate-100 group cursor-pointer overflow-hidden">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-[13px] font-black text-slate-800 uppercase tracking-widest group-hover:text-teal-600 transition-colors">{title}</h4>
                                        <motion.span 
                                            className="text-slate-400 text-xl font-light"
                                            whileHover={{ rotate: 180 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            +
                                        </motion.span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Content Area */}
                    <div className="flex-1">
                        {/* Control Bar */}
                        <motion.div 
                            className="flex flex-col xl:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-8 gap-4"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <motion.div 
                                className="text-[13px] font-black text-teal-700 bg-teal-50 px-5 py-2 rounded-lg shadow-sm border border-teal-100 tracking-wide"
                                whileHover={{ scale: 1.05 }}
                            >
                                BUY 1 GET 1 FREE
                            </motion.div>
                            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                                <div className="flex items-center gap-3 text-xs font-black text-slate-500 uppercase tracking-widest">
                                    <span className="text-slate-800">View Frames</span>
                                    <motion.div 
                                        className="w-12 h-6 bg-teal-500 rounded-full relative cursor-pointer shadow-inner"
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <motion.div 
                                            className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md"
                                        ></motion.div>
                                    </motion.div>
                                    <span>View 3D Try On</span>
                                </div>
                                <div className="h-6 w-px bg-slate-200 hidden md:block"></div>
                                <div className="flex items-center gap-2 text-xs font-black text-slate-800 uppercase tracking-widest">
                                    <span>Sort By</span>
                                    <select className="bg-slate-50 border-2 border-slate-100 rounded-lg px-3 py-1.5 outline-none focus:border-teal-500 transition-colors font-bold text-slate-600 cursor-pointer">
                                        <option>Best Sellers</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                    </select>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="text-center text-sm text-slate-500 font-bold mb-8 uppercase tracking-widest"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Showing {dummyProducts.length} of 676 Results
                        </motion.div>

                        {/* Product Grid */}
                        <motion.div 
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="show"
                        >
                            {dummyProducts.map((product) => (
                                <motion.div key={product.id} variants={fadeUpVariant}>
                                    <LenskartProductCard product={product} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SunglassesPage;
