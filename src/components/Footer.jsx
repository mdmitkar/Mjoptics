import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-soft-bg pt-32 pb-12 overflow-hidden relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-[#D8A4A4]/30 to-transparent"></div>
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-24">
                    {/* Brand Info */}
                    <div className="space-y-8">
                        <Link to="/">
                            <img src="/logo.png" alt="M J Optics" className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity duration-500" />
                        </Link>
                        <p className="text-slate-500 font-medium leading-relaxed text-sm pr-4">
                            Precision. Style. Vision. <br />
                            A curated selection of the world's finest eyewear, right here in Kalyan West.
                        </p>
                        <div className="flex gap-3">
                            {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 bg-white border border-[#EBE3E3] rounded-full flex items-center justify-center text-primary hover:border-accent hover:text-accent transition-all transform hover:-translate-y-1 shadow-sm">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-8">
                        <h4 className="text-2xl font-serif font-black text-primary tracking-tight">Collections.</h4>
                        <ul className="space-y-4 text-slate-500 font-bold uppercase text-[11px] tracking-[0.2em]">
                            {['Eyeglasses', 'Sunglasses', 'Contact Lenses', 'Computer Glasses', 'Power Sunglasses'].map(link => (
                                <li key={link} className="hover:text-accent cursor-pointer transition-colors flex items-center gap-3 group">
                                    <span className="w-6 h-px bg-accent/0 group-hover:bg-accent transition-all duration-300"></span>
                                    <Link to={`/${link.toLowerCase().replace(' ', '-')}`}>{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h4 className="text-2xl font-serif font-black text-primary tracking-tight">Boutique.</h4>
                        <div className="space-y-6 text-slate-500 font-bold text-[11px] tracking-widest uppercase">
                            <div className="flex gap-4 group cursor-pointer items-start">
                                <MapPin className="w-4 h-4 text-accent mt-0.5 group-hover:-translate-y-1 transition-transform" />
                                <p className="group-hover:text-primary transition-colors leading-relaxed">Shop No. 5, Kalyan West, <br />Maharashtra 421301</p>
                            </div>
                            <div className="flex gap-4 group cursor-pointer items-center">
                                <Phone className="w-4 h-4 text-accent group-hover:-translate-y-1 transition-transform" />
                                <p className="group-hover:text-primary transition-colors">09972414093</p>
                            </div>
                            <div className="flex gap-4 group cursor-pointer items-center">
                                <Mail className="w-4 h-4 text-accent group-hover:-translate-y-1 transition-transform" />
                                <p className="group-hover:text-primary transition-colors">care@mjoptics.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter / Timings */}
                    <div className="space-y-8">
                        <h4 className="text-2xl font-serif font-black text-primary tracking-tight">Insider.</h4>
                        <p className="text-slate-500 font-medium text-sm leading-relaxed">Subscribe to receive updates on exclusive collections and private sales.</p>
                        <div className="relative group">
                            <input type="email" placeholder="Email Address" className="w-full bg-white border border-[#EBE3E3] rounded-none py-3 px-4 text-sm outline-none focus:border-accent transition-colors" />
                            <button className="absolute right-0 top-0 bottom-0 bg-transparent text-primary px-4 font-bold text-[10px] tracking-widest uppercase hover:text-accent transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-100 pt-12 flex flex-col md:row justify-between items-center gap-8 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
                    <p>© 2024 M J OPTICS LUXURY EYEWEAR. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-10">
                        <span className="cursor-pointer hover:text-primary transition-all">Privacy Policy</span>
                        <span className="cursor-pointer hover:text-primary transition-all">Terms of Service</span>
                        <span className="cursor-pointer hover:text-primary transition-all">Sitemap</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
