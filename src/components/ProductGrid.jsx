import React from 'react';
import { ArrowRight, ShoppingBag, Star } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <div className="premium-card group p-5 flex flex-col gap-5 bg-white border-transparent hover:border-slate-200">
            <div className="relative aspect-[4/3] rounded-2xl bg-slate-50 overflow-hidden flex items-center justify-center">
                <img
                    src={product.img}
                    alt={product.name}
                    className="w-4/5 h-4/5 object-contain transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-lg text-[10px] font-black text-primary shadow-lg border border-light-gray flex items-center gap-1">
                    <Star className="w-3 h-3 text-accent fill-accent" /> {product.rating}
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex justify-between items-start">
                    <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em] opacity-80">Premium Edition</p>
                    <p className="text-[10px] font-bold text-slate-400">#MJ-2026</p>
                </div>
                <h3 className="font-black text-primary text-lg transition-colors group-hover:text-accent line-clamp-1 uppercase tracking-tight">{product.name}</h3>
                <div className="flex justify-between items-center pt-2">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Pricing</span>
                        <span className="text-2xl font-black text-primary tracking-tighter">₹{product.price}</span>
                    </div>
                    <button className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center transition-all hover:bg-accent hover:-translate-y-1 shadow-lg shadow-primary/20">
                        <ShoppingBag className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProductGrid = () => {
    const products = [
        { id: 1, name: 'Urban Tortoise Frames', price: '2,499', rating: '4.8', img: '/assets/product_1.png' },
        { id: 2, name: 'Polarized Sport Aviators', price: '3,199', rating: '4.9', img: '/assets/product_2.png' },
        { id: 3, name: 'Rose Gold Cat-Eye', price: '2,850', rating: '4.7', img: '/assets/product_3.png' },
        { id: 4, name: 'Classic Silver Frames', price: '1,999', rating: '4.6', img: '/assets/product_4.png' },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
                    <div className="space-y-4 text-center md:text-left">
                        <div className="inline-block px-4 py-1.5 bg-accent/10 text-primary rounded-full text-xs font-black uppercase tracking-widest">Trending Now</div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Best Sellers</h2>
                        <div className="w-20 h-1.5 bg-accent mx-auto md:mx-0 rounded-full"></div>
                    </div>
                    <button className="text-primary font-black hover:text-accent transition-all flex items-center gap-3 group text-lg border-b-2 border-accent pb-1 uppercase tracking-widest text-sm">
                        Discover More
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
