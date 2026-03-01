import React, { useEffect, useRef } from 'react';

const categories = [
    { name: 'Eyeglasses', img: '/assets/category_eyeglasses.png', path: '/eyeglasses' },
    { name: 'Sunglasses', img: '/assets/category_sunglasses.png', path: '/sunglasses' },
    { name: 'Contact Lenses', img: '/assets/category_contact_lenses.png', path: '/contact-lenses' },
    { name: 'Kids Glasses', img: '/assets/category_kids_glasses.png', path: '/eyeglasses' },
    { name: 'Computer Glasses', img: '/assets/category_computer_glasses.png', path: '/eyeglasses' },
    { name: 'Power Sunglasses', img: '/assets/category_power_sunglasses.png', path: '/sunglasses' },
];

const CategoryGrid = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const children = sectionRef.current.querySelectorAll('.reveal');
        children.forEach((child) => observer.observe(child));

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-24">
            <div className="text-center mb-16 space-y-4 reveal">
                <div className="inline-block px-4 py-1 bg-accent/10 text-primary rounded-full text-xs font-black uppercase tracking-widest">Explore Categories</div>
                <h2 className="text-5xl font-black">Shop by Essentials</h2>
                <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {categories.map((cat, idx) => (
                    <a
                        href={cat.path}
                        key={cat.name}
                        className="premium-card group cursor-pointer text-center p-6 aspect-square flex flex-col items-center justify-center gap-5 reveal"
                        style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                        <div className="w-full aspect-square relative overflow-hidden rounded-premium bg-slate-50">
                            <img
                                src={cat.img}
                                alt={cat.name}
                                className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                        </div>
                        <h3 className="text-sm font-black tracking-widest uppercase transition-colors group-hover:text-accent">
                            {cat.name}
                        </h3>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default CategoryGrid;
