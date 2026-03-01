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
            className="group flex flex-col bg-white rounded-2xl border border-[#EBE3E3] overflow-hidden cursor-pointer relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ 
                scale: 1.02, 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(216,164,164,0.25)",
                borderColor: "#D8A4A4" // Rose Gold accent
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
        >
            {/* Shimmer Effect overlay on hover */}
            <motion.div 
                className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 mix-blend-overlay bg-linear-to-tr from-transparent via-white/60 to-transparent w-[200%] h-full"
                initial={{ x: "-100%" }}
                animate={isHovered ? { x: "100%" } : { x: "-100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
            />

            {/* Wishlist Icon */}
            <motion.button 
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-white/70 backdrop-blur-md border border-white/50 shadow-sm"
                whileHover={{ scale: 1.15, backgroundColor: "#fff" }}
                whileTap={{ scale: 0.95 }}
            >
                <Heart className={`w-4 h-4 transition-colors duration-400 ${isHovered ? 'text-accent fill-accent' : 'text-slate-400'}`} />
            </motion.button>

            {/* Image Container */}
            <div className="relative aspect-4/3 bg-soft-bg flex items-center justify-center p-8 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.img 
                        key={currentImage}
                        src={currentImage} 
                        alt={product.name} 
                        className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 1.05, filter: "blur(2px)" }}
                        transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                    />
                </AnimatePresence>
                
                {/* Rating Badge */}
                {product.rating && (
                    <motion.div 
                        className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-[#EBE3E3] flex items-center gap-1.5 text-[11px] font-bold text-primary z-10"
                        whileHover={{ scale: 1.05 }}
                    >
                        {product.rating} <Star className="w-3.5 h-3.5 text-accent fill-accent" /> <span className="text-slate-400 ml-1 font-medium">{product.ratingCount}</span>
                    </motion.div>
                )}
            </div>

            {/* Product Details */}
            <div className="p-6 flex flex-col gap-2.5 relative z-10 bg-white">
                <div className="flex justify-between items-start">
                    <h3 className="font-serif font-black text-primary text-xl line-clamp-1 group-hover:text-accent transition-colors">{product.name}</h3>
                </div>
                
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Size: {product.size || 'Medium'}</p>
                
                <div className="flex items-center gap-3 mt-3">
                    <span className="font-sans font-black text-primary text-xl tracking-tight">₹{product.price}</span>
                    <span className="text-sm text-slate-400 line-through decoration-slate-300">₹{product.originalPrice}</span>
                    <motion.span 
                        className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-accent/10 text-accent"
                        animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        {product.discount}% OFF
                    </motion.span>
                </div>
            </div>

            {/* Color Swatches */}
            <div className="px-6 pb-6 flex gap-2.5 relative z-10 bg-white">
                {product.swatches && product.swatches.map((swatch, index) => (
                    <motion.div 
                        key={index}
                        onMouseEnter={() => setCurrentImage(swatch.image)}
                        className={`w-6 h-6 rounded-full cursor-pointer flex items-center justify-center transition-all ${currentImage === swatch.image ? 'border-2 border-accent shadow-md shadow-accent/20' : 'border border-[#EBE3E3] hover:border-slate-300'}`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div 
                            className="w-4 h-4 rounded-full border border-black/10 shadow-inner"
                            style={{ backgroundColor: swatch.colorCode }}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default LenskartProductCard;
