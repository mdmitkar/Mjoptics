import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export const products = [
  {
    "id": 1,
    "name": "Tom Ford Aviator",
    "brand": "Tom Ford",
    "category": "Sunglasses",
    "price": "$290",
    "tags": ["Premium", "Bestseller"],
    "baseImage": "/images/frame2.png",
    "colors": [
      { "name": "Classic Black", "hex": "#1e293b", "filter": "brightness(0.2)" },
      { "name": "Gold/Tortoise", "hex": "#d97706", "filter": "hue-rotate(30deg) saturate(1.5) brightness(1.1)" }
    ]
  },
  {
    "id": 2,
    "name": "Ray-Ban Wayfarer",
    "brand": "Ray-Ban",
    "category": "Sunglasses",
    "price": "$160",
    "tags": ["Polarized"],
    "baseImage": "/images/frame2.png",
    "colors": [
      { "name": "Classic Black", "hex": "#1e293b", "filter": "brightness(0.2)" },
      { "name": "Navy Blue", "hex": "#1d4ed8", "filter": "hue-rotate(210deg) saturate(1.5) brightness(0.7)" },
      { "name": "Forest Green", "hex": "#15803d", "filter": "hue-rotate(120deg) saturate(1.2) brightness(0.6)" }
    ]
  },
  {
    "id": 3,
    "name": "Oakley Sport Flex",
    "brand": "Oakley",
    "category": "Sunglasses",
    "price": "$140",
    "tags": ["Lightweight", "Polarized"],
    "baseImage": "/images/frame2.png",
    "colors": [
      { "name": "Crimson Red", "hex": "#be123c", "filter": "hue-rotate(330deg) saturate(2) brightness(0.8)" },
      { "name": "Silver Tone", "hex": "#94a3b8", "filter": "saturate(0) brightness(1.3)" }
    ]
  },
  {
    "id": 4,
    "name": "Titan Edge Minimal",
    "brand": "Titan",
    "category": "Eyeglasses",
    "price": "$120",
    "tags": ["Lightweight", "Essential"],
    "baseImage": "/images/frame1.png",
    "colors": [
      { "name": "Silver Tone", "hex": "#94a3b8", "filter": "saturate(0) brightness(1.3)" },
      { "name": "Rose Gold", "hex": "#fda4af", "filter": "hue-rotate(330deg) saturate(1.2) brightness(1.4)" }
    ]
  },
  {
    "id": 5,
    "name": "Silhouette Ultralight Rimless",
    "brand": "Silhouette",
    "category": "Eyeglasses",
    "price": "$250",
    "tags": ["Premium"],
    "baseImage": "/images/frame3.png",
    "colors": [
      { "name": "Silver Tone", "hex": "#94a3b8", "filter": "saturate(0) brightness(1.3)" },
      { "name": "Classic Black", "hex": "#1e293b", "filter": "brightness(0.2)" },
      { "name": "Rose Gold", "hex": "#fda4af", "filter": "hue-rotate(330deg) saturate(1.2) brightness(1.4)" }
    ]
  },
  {
    "id": 6,
    "name": "Persol Classic Round",
    "brand": "Persol",
    "category": "Eyeglasses",
    "price": "$210",
    "tags": ["Essential"],
    "baseImage": "/images/frame3.png",
    "colors": [
      { "name": "Gold/Tortoise", "hex": "#d97706", "filter": "hue-rotate(30deg) saturate(1.5) brightness(1.1)" },
      { "name": "Classic Black", "hex": "#1e293b", "filter": "brightness(0.2)" }
    ]
  },
  {
    "id": 7,
    "name": "MJ Optics Blue Block Pro",
    "brand": "MJ Optics",
    "category": "Computer Glasses",
    "price": "$90",
    "tags": ["New Arrival", "Bestseller"],
    "baseImage": "/images/frame1.png",
    "colors": [
      { "name": "Classic Black", "hex": "#1e293b", "filter": "brightness(0.2)" },
      { "name": "Navy Blue", "hex": "#1d4ed8", "filter": "hue-rotate(210deg) saturate(1.5) brightness(0.7)" }
    ]
  },
  {
    "id": 8,
    "name": "Tom Ford Square",
    "brand": "Tom Ford",
    "category": "Eyeglasses",
    "price": "$280",
    "tags": ["Premium"],
    "baseImage": "/images/frame1.png",
    "colors": [
      { "name": "Classic Black", "hex": "#1e293b", "filter": "brightness(0.2)" },
      { "name": "Crimson Red", "hex": "#be123c", "filter": "hue-rotate(330deg) saturate(2) brightness(0.8)" }
    ]
  },
  {
    "id": 9,
    "name": "Ray-Ban Clubmaster",
    "brand": "Ray-Ban",
    "category": "Sunglasses",
    "price": "$170",
    "tags": ["Bestseller", "Polarized"],
    "baseImage": "/images/frame2.png",
    "colors": [
      { "name": "Gold/Tortoise", "hex": "#d97706", "filter": "hue-rotate(30deg) saturate(1.5) brightness(1.1)" },
      { "name": "Classic Black", "hex": "#1e293b", "filter": "brightness(0.2)" }
    ]
  },
  {
    "id": 10,
    "name": "Oakley Holbrook",
    "brand": "Oakley",
    "category": "Sunglasses",
    "price": "$150",
    "tags": ["Polarized"],
    "baseImage": "/images/frame2.png",
    "colors": [
      { "name": "Classic Black", "hex": "#1e293b", "filter": "brightness(0.2)" },
      { "name": "Navy Blue", "hex": "#1d4ed8", "filter": "hue-rotate(210deg) saturate(1.5) brightness(0.7)" },
      { "name": "Forest Green", "hex": "#15803d", "filter": "hue-rotate(120deg) saturate(1.2) brightness(0.6)" }
    ]
  },
  {
    "id": 11,
    "name": "MJ Optics Cat Eye",
    "brand": "MJ Optics",
    "category": "Eyeglasses",
    "price": "$110",
    "tags": ["New Arrival"],
    "baseImage": "/images/frame1.png",
    "colors": [
      { "name": "Rose Gold", "hex": "#fda4af", "filter": "hue-rotate(330deg) saturate(1.2) brightness(1.4)" },
      { "name": "Crimson Red", "hex": "#be123c", "filter": "hue-rotate(330deg) saturate(2) brightness(0.8)" }
    ]
  },
  {
    "id": 12,
    "name": "Persol Acetate Square",
    "brand": "Persol",
    "category": "Sunglasses",
    "price": "$220",
    "tags": ["Premium", "Essential"],
    "baseImage": "/images/frame2.png",
    "colors": [
      { "name": "Gold/Tortoise", "hex": "#d97706", "filter": "hue-rotate(30deg) saturate(1.5) brightness(1.1)" },
      { "name": "Forest Green", "hex": "#15803d", "filter": "hue-rotate(120deg) saturate(1.2) brightness(0.6)" }
    ]
  },
  {
    "id": 13,
    "name": "Titan Work Pro",
    "brand": "Titan",
    "category": "Computer Glasses",
    "price": "$85",
    "tags": ["Essential"],
    "baseImage": "/images/frame1.png",
    "colors": [
      { "name": "Classic Black", "hex": "#1e293b", "filter": "brightness(0.2)" },
      { "name": "Silver Tone", "hex": "#94a3b8", "filter": "saturate(0) brightness(1.3)" }
    ]
  },
  {
    "id": 14,
    "name": "Silhouette TMA Icon",
    "brand": "Silhouette",
    "category": "Eyeglasses",
    "price": "$290",
    "tags": ["Premium", "Lightweight"],
    "baseImage": "/images/frame3.png",
    "colors": [
      { "name": "Silver Tone", "hex": "#94a3b8", "filter": "saturate(0) brightness(1.3)" },
      { "name": "Navy Blue", "hex": "#1d4ed8", "filter": "hue-rotate(210deg) saturate(1.5) brightness(0.7)" },
      { "name": "Rose Gold", "hex": "#fda4af", "filter": "hue-rotate(330deg) saturate(1.2) brightness(1.4)" }
    ]
  },
  {
    "id": 15,
    "name": "Ray-Ban Round Metal",
    "brand": "Ray-Ban",
    "category": "Sunglasses",
    "price": "$165",
    "tags": ["Bestseller"],
    "baseImage": "/images/frame3.png",
    "colors": [
      { "name": "Gold/Tortoise", "hex": "#d97706", "filter": "hue-rotate(30deg) saturate(1.5) brightness(1.1)" },
      { "name": "Silver Tone", "hex": "#94a3b8", "filter": "saturate(0) brightness(1.3)" }
    ]
  },
  {
    "id": 16,
    "name": "Oakley Wire Tap",
    "brand": "Oakley",
    "category": "Eyeglasses",
    "price": "$175",
    "tags": ["Lightweight"],
    "baseImage": "/images/frame1.png",
    "colors": [
      { "name": "Silver Tone", "hex": "#94a3b8", "filter": "saturate(0) brightness(1.3)" },
      { "name": "Classic Black", "hex": "#1e293b", "filter": "brightness(0.2)" }
    ]
  },
  {
    "id": 17,
    "name": "Tom Ford Blue Block",
    "brand": "Tom Ford",
    "category": "Computer Glasses",
    "price": "$310",
    "tags": ["Premium", "Bestseller"],
    "baseImage": "/images/frame1.png",
    "colors": [
      { "name": "Classic Black", "hex": "#1e293b", "filter": "brightness(0.2)" },
      { "name": "Gold/Tortoise", "hex": "#d97706", "filter": "hue-rotate(30deg) saturate(1.5) brightness(1.1)" }
    ]
  },
  {
    "id": 18,
    "name": "MJ Optics Reading +",
    "brand": "MJ Optics",
    "category": "Eyeglasses",
    "price": "$80",
    "tags": ["Essential"],
    "baseImage": "/images/frame1.png",
    "colors": [
      { "name": "Navy Blue", "hex": "#1d4ed8", "filter": "hue-rotate(210deg) saturate(1.5) brightness(0.7)" },
      { "name": "Crimson Red", "hex": "#be123c", "filter": "hue-rotate(330deg) saturate(2) brightness(0.8)" }
    ]
  },
  {
    "id": 19,
    "name": "Persol Foldable",
    "brand": "Persol",
    "category": "Sunglasses",
    "price": "$260",
    "tags": ["Premium"],
    "baseImage": "/images/frame2.png",
    "colors": [
      { "name": "Gold/Tortoise", "hex": "#d97706", "filter": "hue-rotate(30deg) saturate(1.5) brightness(1.1)" },
      { "name": "Classic Black", "hex": "#1e293b", "filter": "brightness(0.2)" }
    ]
  },
  {
    "id": 20,
    "name": "Titan Aviator Pro",
    "brand": "Titan",
    "category": "Sunglasses",
    "price": "$130",
    "tags": ["Polarized"],
    "baseImage": "/images/frame2.png",
    "colors": [
      { "name": "Silver Tone", "hex": "#94a3b8", "filter": "saturate(0) brightness(1.3)" },
      { "name": "Navy Blue", "hex": "#1d4ed8", "filter": "hue-rotate(210deg) saturate(1.5) brightness(0.7)" }
    ]
  }
];

const Collections = () => {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', 'Eyeglasses', 'Sunglasses', 'Computer Glasses'];

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
                className={`whitespace-nowrap px-6 py-2.5 rounded-full font-mono text-sm tracking-wider uppercase transition-all duration-300 ${
                  activeTab === category 
                    ? 'bg-primary text-secondary shadow-md' 
                    : 'bg-white text-primary border border-slate-200 hover:border-accent-light hover:text-accent'
                }`}
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
