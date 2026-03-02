import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ProductCard = ({ product, index }) => {
  const [activeColor, setActiveColor] = useState(product.colors[0]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
      className="group relative bg-white rounded-premium overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-accent-light transition-all duration-500 ease-out flex flex-col h-full"
    >
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-mono font-bold bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-primary shadow-sm">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="aspect-4/3 overflow-hidden bg-slate-50 relative p-8 flex items-center justify-center">
        {/* Simulated product shadow */}
        <div className="absolute bottom-12 w-3/4 h-8 bg-black/5 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-500" />
        <img 
          src={product.baseImage} 
          alt={product.name} 
          style={{ filter: activeColor.filter }}
          className="w-full h-full object-contain mix-blend-multiply transform group-hover:scale-105 transition-all duration-700 ease-out z-10"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-mono text-accent uppercase tracking-wider mb-1 block">
              {product.brand}
            </span>
            <h3 className="text-xl font-medium text-primary m-0">{product.name}</h3>
          </div>
          <span className="font-mono text-primary font-semibold">{product.price}</span>
        </div>

        {/* Color Swatches */}
        <div className="flex gap-2 mb-6 mt-auto pt-2">
          {product.colors.map((color, i) => (
            <button
              key={i}
              onClick={() => setActiveColor(color)}
              className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${activeColor.name === color.name ? 'border-accent scale-110' : 'border-transparent hover:scale-110'}`}
              style={{ backgroundColor: color.hex, boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)' }}
              title={color.name}
              aria-label={`Select color ${color.name}`}
            />
          ))}
          <span className="ml-2 text-xs text-slate-400 font-sans self-center">{activeColor.name}</span>
        </div>
        
        <div className="mt-2 flex justify-between items-center border-t border-slate-100 pt-4">
          <span className="text-sm font-medium text-primary cursor-pointer hover:text-accent transition-colors">
            View Details
          </span>
          <button className="w-8 h-8 rounded-full bg-slate-100 text-primary flex items-center justify-center hover:bg-accent hover:text-white hover:scale-110 transition-all">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
