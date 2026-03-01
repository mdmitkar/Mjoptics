import React, { useEffect, useRef } from 'react';
import { Eye, Shield, User, Monitor, Sun, Zap } from 'lucide-react';

const categories = [
    { name: 'Eyeglasses', img: '/assets/category_eyeglasses.png', path: '/eyeglasses', icon: Eye },
    { name: 'Sunglasses', img: '/assets/category_sunglasses.png', path: '/sunglasses', icon: Sun },
    { name: 'Contact Lenses', img: '/assets/category_contact_lenses.png', path: '/contact-lenses', icon: Shield },
    { name: 'Kids Glasses', img: '/assets/category_kids_glasses.png', path: '/eyeglasses', icon: User },
    { name: 'Computer Glasses', img: '/assets/category_computer_glasses.png', path: '/eyeglasses', icon: Monitor },
    { name: 'Power Sunglasses', img: '/assets/category_power_sunglasses.png', path: '/sunglasses', icon: Zap },
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
        <section ref={sectionRef} className="py-24 bg-white">
            <div className="container-custom">
                <div className="text-center mb-16 space-y-4 reveal">
                    <div className="inline-block px-4 py-1.5 bg-accent/10 text-primary rounded-full text-xs font-black uppercase tracking-widest">Explore Collections</div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Shop by Category</h2>
                    <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
                    {categories.map((cat, idx) => (
                        <a
                            href={cat.path}
                            key={cat.name}
                            className="premium-card group cursor-pointer text-center p-6 flex flex-col items-center justify-center gap-5 reveal bg-white"
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            <div className="w-full aspect-square relative overflow-hidden rounded-premium bg-slate-50 flex items-center justify-center">
                                <img
                                    src={cat.img}
                                    alt={cat.name}
                                    className="w-4/5 h-4/5 object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <h3 className="text-sm font-black tracking-widest uppercase transition-colors group-hover:text-accent">
                                    {cat.name}
                                </h3>
                                <div className="h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-300"></div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
