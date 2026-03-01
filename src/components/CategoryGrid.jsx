import React from 'react';

const categories = [
    { name: 'Eyeglasses', img: '/assets/category_eyeglasses.png' },
    { name: 'Sunglasses', img: '/assets/category_sunglasses.png' },
    { name: 'Contact Lenses', img: '/assets/category_contact_lenses.png' },
    { name: 'Kids Glasses', img: '/assets/category_kids_glasses.png' },
    { name: 'Computer Glasses', img: '/assets/category_computer_glasses.png' },
    { name: 'Power Sunglasses', img: '/assets/category_power_sunglasses.png' },
];

const CategoryGrid = () => {
    return (
        <section className="section-padding">
            <div className="text-center mb-12 space-y-4">
                <h2 className="text-4xl font-black">Shop by Category</h2>
                <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {categories.map((cat) => (
                    <div key={cat.name} className="premium-card group cursor-pointer text-center p-4 aspect-square flex flex-col items-center justify-center gap-4">
                        <div className="w-full aspect-square relative overflow-hidden rounded-premium bg-soft-bg">
                            <img
                                src={cat.img}
                                alt={cat.name}
                                className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <h3 className="text-sm font-bold tracking-wide uppercase transition-colors group-hover:text-accent">
                            {cat.name}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoryGrid;
