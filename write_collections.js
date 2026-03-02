import fs from 'fs';

const brands = ['Ray-Ban', 'Oakley', 'Tom Ford', 'Persol', 'Titan', 'Silhouette', 'MJ Optics'];
const styles = ['Aviator', 'Wayfarer', 'Round', 'Square', 'Cat Eye', 'Rimless', 'Clubmaster'];
const types = ['Sunglasses', 'Eyeglasses', 'Computer Glasses'];
const tagsOptions = ['Bestseller', 'New Arrival', 'Premium', 'Polarized', 'Essential', 'Lightweight'];
const bases = ['/images/frame1.png', '/images/frame2.png', '/images/frame3.png'];

const baseColors = [
  { name: 'Classic Black', hex: '#1e293b', filter: 'brightness(0.2)' },
  { name: 'Crimson Red', hex: '#be123c', filter: 'hue-rotate(330deg) saturate(2) brightness(0.8)' },
  { name: 'Navy Blue', hex: '#1d4ed8', filter: 'hue-rotate(210deg) saturate(1.5) brightness(0.7)' },
  { name: 'Forest Green', hex: '#15803d', filter: 'hue-rotate(120deg) saturate(1.2) brightness(0.6)' },
  { name: 'Gold/Tortoise', hex: '#d97706', filter: 'hue-rotate(30deg) saturate(1.5) brightness(1.1)' },
  { name: 'Silver Tone', hex: '#94a3b8', filter: 'saturate(0) brightness(1.3)' },
  { name: 'Rose Gold', hex: '#fda4af', filter: 'hue-rotate(330deg) saturate(1.2) brightness(1.4)' }
];

const generateProducts = () => {
  const prods = [];
  for(let i = 1; i <= 20; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const style = styles[Math.floor(Math.random() * styles.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const isSunglasses = type === 'Sunglasses';
    const tagCount = Math.floor(Math.random() * 2) + 1;
    const itemTags = [...tagsOptions].sort(() => 0.5 - Math.random()).slice(0, tagCount);
    const colorCount = Math.floor(Math.random() * 3) + 2; 
    const colors = [...baseColors].sort(() => 0.5 - Math.random()).slice(0, colorCount);
    
    let base = bases[0];
    if (style === 'Wayfarer' || isSunglasses) base = bases[1];
    if (style === 'Rimless' || style === 'Round') base = bases[2];

    prods.push({
      id: i,
      name: `${brand} ${style}`,
      brand: brand,
      category: type,
      price: '$' + (Math.floor(Math.random() * 25) * 10 + 90),
      tags: itemTags,
      baseImage: base,
      colors: colors
    });
  }
  return prods;
};

const file = 'z:/Client 2/Mjoptics/src/pages/Collections.jsx';

const content = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export const products = ${JSON.stringify(generateProducts(), null, 2)};

const Collections = () => {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', 'Eyeglasses', 'Sunglasses', 'Computer Glasses', 'Kids'];

  const filteredProducts = activeTab === 'All' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <main className="bg-secondary min-h-screen pt-24 pb-20">
      
      {/* Header */}
      <section className="bg-primary text-secondary py-20 relative overflow-hidden">
        {/* Abstract background element */}
        <div className="absolute inset-0 opacity-10">
           <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
               <polygon fill="currentColor" points="0,100 100,0 100,100"/>
           </svg>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-secondary mb-6 leading-tight">Curated <br/> <span className="text-accent">Collections.</span></h1>
            <p className="font-sans text-secondary/80 max-w-2xl mx-auto text-lg">
              Discover our hand-picked selection of premium frames. From timeless classics to bold modern designs, find the perfect pair that reflects your personal style.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-custom py-16">
        
        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 w-full md:w-auto scrollbar-hide gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={\`whitespace-nowrap px-6 py-2.5 rounded-full font-mono text-sm tracking-wider uppercase transition-all duration-300 \${
                  activeTab === category 
                    ? 'bg-primary text-secondary shadow-md' 
                    : 'bg-white text-primary border border-slate-200 hover:border-accent-light hover:text-accent'
                }\`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:w-64">
              <input 
                type="text" 
                placeholder="Search styles..." 
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white text-primary font-sans transition-shadow shadow-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 w-4 h-4" />
            </div>
            <button className="p-2.5 rounded-full border border-slate-200 bg-white text-primary hover:border-accent hover:text-accent transition-colors shadow-sm hidden md:flex items-center justify-center">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="btn-outline border-slate-300 text-primary hover:border-accent hover:text-accent px-8">
            Load More Styles
          </button>
        </div>

      </section>
    </main>
  );
};

export default Collections;
\`;

fs.writeFileSync(file, content);
console.log('Collections page replaced cleanly!');
