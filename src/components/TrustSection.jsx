import React from 'react';
import { CheckCircle, Award, Users, ShieldCheck } from 'lucide-react';

const stats = [
    { icon: Award, label: '23 Years Experience', desc: 'Serving Kalyan since 2003', color: 'text-primary' },
    { icon: CheckCircle, label: 'Certified Opticians', desc: 'Expert eye examinations', color: 'text-accent' },
    { icon: Users, label: '1000+ Happy Customers', desc: '4.7 Star Service Rating', color: 'text-cta-highlight' },
    { icon: ShieldCheck, label: 'Premium Brands', desc: 'Authorized retail partner', color: 'text-primary' },
];

const TrustSection = () => {
    return (
        <section className="bg-soft-bg py-24 border-y border-light-gray relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                {stats.map((stat) => (
                    <div key={stat.label} className="text-center space-y-5 group animate-in fade-in slide-in-from-bottom duration-1000">
                        <div className={`w-20 h-20 flex items-center justify-center mx-auto rounded-[24px] bg-white shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl`}>
                            <stat.icon className={`w-10 h-10 ${stat.color}`} />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-black text-primary text-xl uppercase tracking-tighter">{stat.label}</h4>
                            <p className="text-slate-500 text-sm font-bold opacity-80">{stat.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrustSection;
