import React from 'react';

const stats = [
    { icon: '📅', label: '23 Years Experience', desc: 'Serving Kalyan since 2003' },
    { icon: '👨‍⚕️', label: 'Certified Opticians', desc: 'Expert eye examinations' },
    { icon: '❤️', label: '1000+ Happy Customers', desc: '4.7 Star Service Rating' },
    { icon: '🕶️', label: 'Premium Brands', desc: 'Authroized retail partner' },
];

const TrustSection = () => {
    return (
        <section className="bg-white py-16 border-y border-light-gray">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="text-center space-y-3 group">
                        <div className="text-4xl bg-soft-bg w-16 h-16 flex items-center justify-center mx-auto rounded-2xl group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                            {stat.icon}
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-black text-primary text-lg">{stat.label}</h4>
                            <p className="text-slate-500 text-sm font-medium">{stat.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrustSection;
