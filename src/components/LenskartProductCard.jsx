import React, { useState } from 'react';
import { Heart, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LenskartProductCard = ({ product }) => {
    // Determine initial image (from first swatch or default image)
    const initialImage = product.swatches && product.swatches.length > 0 ? product.swatches[0].image : product.img;
    const [currentImage, setCurrentImage] = useState(initialImage);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div 
            className="group flex flex-col bg-white rounded-lg border border-slate-200 overflow-hidden cursor-pointer relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ 
                scale: 1.03, 
                y: -8, 
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)",
                borderColor: "#0E5E6F" // Primary color
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
        >
            {/* Shimmer Effect overlay on hover */}
            <motion.div 
                className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 mix-blend-overlay bg-gradient-to-tr from-transparent via-white to-transparent w-[200%] h-full"
                initial={{ x: "-100%" }}
                animate={isHovered ? { x: "100%" } : { x: "-100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />

            {/* Wishlist Icon */}
            <motion.button 
                className="absolute top-3 right-3 z-30 p-2 rounded-full bg-white/50 backdrop-blur-sm"
                whileHover={{ scale: 1.2, backgroundColor: "#fff" }}
                whileTap={{ scale: 0.9 }}
            >
                <Heart className={`w-5 h-5 transition-colors duration-300 ${isHovered ? 'text-red-500 fill-red-500' : 'text-slate-400'}`} />
            </motion.button>

            {/* Image Container */}
            <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.img 
                        key={currentImage}
                        src={currentImage} 
                        alt={product.name} 
                        className="w-full h-full object-contain mix-blend-multiply"
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(4px)" }}
                        transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
                    />
                </AnimatePresence>
                
                {/* Rating Badge */}
                {product.rating && (
                    <motion.div 
                        className="absolute bottom-3 left-3 bg-white px-2.5 py-1 rounded-full shadow-lg border border-slate-100 flex items-center gap-1 text-[11px] font-bold text-slate-700 z-10"
                        whileHover={{ scale: 1.1 }}
                    >
                        {product.rating} <Star className="w-3 h-3 text-teal-500 fill-teal-500" /> <span className="text-slate-400 opacity-70 ml-0.5">{product.ratingCount}</span>
                    </motion.div>
                )}
            </div>

            {/* Product Details */}
            <div className="p-5 flex flex-col gap-2 relative z-10 bg-white">
                <div className="flex justify-between items-start">
                    <h3 className="font-bold text-slate-800 text-sm line-clamp-1 group-hover:text-primary transition-colors">{product.name}</h3>
                </div>
                
                <p className="text-xs text-slate-500 font-medium">Size: {product.size || 'Medium'}</p>
                
                <div className="flex items-center gap-2 mt-2">
                    <span className="font-black text-slate-800 text-lg tracking-tight">₹{product.price}</span>
                    <span className="text-sm text-slate-400 line-through decoration-slate-300">₹{product.originalPrice}</span>
                    <motion.span 
                        className="text-xs font-black px-2 py-0.5 rounded bg-teal-50 text-teal-600"
                        animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        {product.discount}% OFF
                    </motion.span>
                </div>
            </div>

            {/* Color Swatches */}
            <div className="px-5 pb-5 flex gap-2 relative z-10 bg-white">
                {product.swatches && product.swatches.map((swatch, index) => (
                    <motion.div 
                        key={index}
                        onMouseEnter={() => setCurrentImage(swatch.image)}
                        className={`w-5 h-5 rounded-full cursor-pointer flex items-center justify-center transition-all ${currentImage === swatch.image ? 'border-2 border-teal-500 shadow-sm' : 'border border-transparent hover:border-slate-300'}`}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div 
                            className="w-3.5 h-3.5 rounded-full border border-slate-200 shadow-inner"
                            style={{ backgroundColor: swatch.colorCode }}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default LenskartProductCard;
