import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const frames = [
  { id: 1, name: "The Aurelia", category: "Eyeglasses", price: "Visit Store", shape: "Round", imgFront: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1588&auto=format&fit=crop", imgModel: "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?q=80&w=1470&auto=format&fit=crop" },
  { id: 2, name: "Midnight Square", category: "Sunglasses", price: "Visit Store", shape: "Square", imgFront: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=1470&auto=format&fit=crop", imgModel: "https://images.unsplash.com/photo-1544256627-c37356262b9a?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, name: "Rose Gold Elegance", category: "Eyeglasses", price: "Visit Store", shape: "Cat Eye", imgFront: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1470&auto=format&fit=crop", imgModel: "https://images.unsplash.com/photo-1529336953128-a85760f58cb5?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, name: "Classic Aviator", category: "Sunglasses", price: "Visit Store", shape: "Aviator", imgFront: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2080&auto=format&fit=crop", imgModel: "https://images.unsplash.com/photo-1506822814884-6350320a40d5?q=80&w=1443&auto=format&fit=crop" },
  { id: 5, name: "Clear Vision Kids", category: "Kids Collection", price: "Visit Store", shape: "Rectangle", imgFront: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1372&auto=format&fit=crop", imgModel: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1372&auto=format&fit=crop" },
  { id: 6, name: "Tortoise Shell Core", category: "Eyeglasses", price: "Visit Store", shape: "Round", imgFront: "https://images.unsplash.com/photo-1588514193575-dc8e1fb59c5d?q=80&w=1470&auto=format&fit=crop", imgModel: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1588&auto=format&fit=crop" },
];

const Collection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Eyeglasses", "Sunglasses", "Kids Collection", "Contact Lenses"];

  const filteredFrames = activeFilter === "All" ? frames : frames.filter(f => f.category === activeFilter);

  return (
    <main className="bg-white min-h-screen pt-40 pb-32">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-serif text-primary mb-8">Discover Your Signature Frame</h1>
          
          {/* Pill Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === filter 
                  ? 'bg-primary text-secondary' 
                  : 'bg-secondary text-primary/60 hover:text-primary border border-transparent hover:border-accent/30'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          <AnimatePresence>
            {filteredFrames.map(frame => (
              <motion.div
                key={frame.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
              >
                {/* Image Swap Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-6 rounded-sm">
                  <img 
                    src={frame.imgFront} 
                    alt={frame.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                  />
                  <img 
                    src={frame.imgModel} 
                    alt={`${frame.name} on model`} 
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
                  />
                </div>
                
                <div className="flex justify-between items-start px-2">
                  <div>
                    <h3 className="font-serif text-xl text-primary mb-1">{frame.name}</h3>
                    <span className="font-sans text-[11px] uppercase tracking-widest text-primary/50">{frame.category}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-sans text-xs font-bold text-accent mb-2 uppercase tracking-widest flex items-center gap-1 group-hover:text-primary transition-colors">
                      {frame.price} <ArrowUpRight className="w-3 h-3 block group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredFrames.length === 0 && (
          <div className="text-center py-20 text-primary/50 font-serif text-2xl">
            New pieces arriving soon.
          </div>
        )}
      </div>
    </main>
  );
};

export default Collection;
