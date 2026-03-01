import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const itemVariants = {
    rest: { x: 0, opacity: 0.8 },
    hover: { x: 8, opacity: 1, scale: 1.02, transition: { type: "spring", stiffness: 300 } }
};

const MegaMenuColumn = ({ title, img, items }) => (
    <div className="flex flex-col flex-1">
        <motion.div 
            className="flex items-center justify-between bg-orange-50 rounded-xl pr-4 mb-5 overflow-hidden h-20 shadow-sm border border-orange-100"
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
        >
            <div className="flex flex-col justify-center px-5">
                <h3 className="text-xl font-black text-[#000042] tracking-tight">{title} <span className="font-light">Sunglasses</span></h3>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Polarized UV</p>
            </div>
            {img && <motion.img 
                src={img} 
                alt={title} 
                className="h-full object-cover origin-right" 
                whileHover={{ scale: 1.1, rotate: -3 }}
                transition={{ type: "spring", stiffness: 200 }}
            />}
        </motion.div>
        <div className="flex flex-col gap-1">
            {items.map((item, index) => (
                <motion.div key={index} variants={itemVariants} initial="rest" whileHover="hover">
                    <Link to="/sunglasses" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition-colors group">
                        <div className="flex items-center gap-4">
                            <motion.div 
                                className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center p-2 border border-slate-200 shadow-sm"
                                whileHover={{ rotate: 5, scale: 1.1 }}
                            >
                                {item.thumb ? (
                                    <img src={item.thumb} alt={item.brand} className="max-w-full max-h-full object-contain mix-blend-multiply drop-shadow-md" />
                                ) : (
                                    <div className="w-6 h-3 bg-slate-300 rounded-full" />
                                )}
                            </motion.div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-slate-700 group-hover:text-[#000042] transition-colors">{item.brand}</span>
                                <span className="text-xs font-black text-teal-600">Starts at ₹{item.price}</span>
                            </div>
                        </div>
                        <motion.div whileHover={{ scale: 1.5, x: 5 }}>
                            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-teal-500 transition-colors" />
                        </motion.div>
                    </Link>
                </motion.div>
            ))}
        </div>
        <motion.div 
            className="mt-auto pt-6 border-t border-slate-100 flex justify-end"
            whileHover={{ x: 5 }}
        >
           <Link to="/sunglasses" className="text-sm font-black text-teal-600 hover:text-primary transition-colors flex items-center gap-2">Explore All {title} <ChevronRight className="w-4 h-4" /></Link>
        </motion.div>
    </div>
);

const SunglassesMegaMenu = () => {
    const menItems = [
        { brand: 'John Jacobs | Meller', price: '3000', thumb: '/assets/product_1.png' },
        { brand: 'Vincent Chase | Lenskart Studio', price: '1000', thumb: '/assets/product_2.png' },
        { brand: 'Hustlr', price: '500', thumb: '/assets/product_3.png' },
        { brand: 'Essentials', price: '500', thumb: '/assets/product_4.png' },
        { brand: 'All Brands', price: '500', thumb: '/assets/product_1.png' }
    ];
    
    const womenItems = [
        { brand: 'John Jacobs | Meller', price: '3000', thumb: '/assets/product_3.png' },
        { brand: 'Vincent Chase | Lenskart Studio', price: '1000', thumb: '/assets/product_4.png' },
        { brand: 'Hustlr', price: '500', thumb: '/assets/product_1.png' },
        { brand: 'Essentials', price: '500', thumb: '/assets/product_2.png' },
        { brand: 'All Brands', price: '500', thumb: '/assets/product_3.png' }
    ];

    const kidsItems = [
        { brand: 'Juniors | 5 to 8 years', price: '600', thumb: '/assets/product_2.png' },
        { brand: 'Tweens | 8 to 12 years', price: '600', thumb: '/assets/product_1.png' },
        { brand: 'Teens | 12 to 17 years', price: '1000', thumb: '/assets/product_4.png' },
    ];

    return (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-6xl bg-white/95 backdrop-blur-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-2xl border border-slate-200 p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out z-50">
            {/* Pointer Triangle */}
            <div className="absolute -top-3 left-1/4 w-6 h-6 bg-white border-t border-l border-slate-200 rotate-45 transform -translate-x-1/2 shadow-[-5px_-5px_10px_-5px_rgba(0,0,0,0.1)]"></div>
            
            <div className="grid grid-cols-3 gap-12">
                <MegaMenuColumn title="MEN" items={menItems} />
                <MegaMenuColumn title="WOMEN" items={womenItems} />
                <MegaMenuColumn title="KIDS" items={kidsItems} />
            </div>
        </div>
    );
};

export default SunglassesMegaMenu;
