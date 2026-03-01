import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="premium-card group p-5 flex flex-col gap-4">
            <div className="relative aspect-square rounded-premium bg-soft-bg overflow-hidden">
                <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 px-2 py-1 bg-white/90 backdrop-blur rounded-lg text-[10px] font-black text-accent shadow-sm">
                    {product.rating} ★
                </div>
            </div>

            <div className="space-y-2">
                <p className="text-xs font-black text-accent uppercase tracking-tighter">Premium Collection</p>
                <h3 className="font-bold text-dark-text group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
                <div className="flex justify-between items-center pt-2">
                    <span className="text-xl font-black text-primary">₹{product.price}</span>
                    <button className="text-xs font-black text-primary border-b-2 border-accent hover:border-primary transition-all pb-1">
                        ADD TO CART
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
        <section className="section-padding bg-soft-bg/50">
            <div className="flex justify-between items-end mb-12">
                <div className="space-y-4">
                    <h2 className="text-4xl font-black">Best Sellers</h2>
                    <div className="w-20 h-1.5 bg-accent rounded-full"></div>
                </div>
                <button className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2">
                    View All Products <span>→</span>
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;
