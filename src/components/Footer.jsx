import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, ExternalLink, ShieldCheck, CreditCard, RefreshCw } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200">
            {/* Top Footer / Trust Bar */}
            <div className="border-b border-slate-200 py-8 bg-white">
                <div className="container-custom flex flex-wrap justify-center md:justify-between gap-8 items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-accent" /> Secure Payments
                    </div>
                    <div className="flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 text-accent" /> Easy Returns
                    </div>
                    <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-accent" /> No-Cost EMI
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" className="h-6 opacity-40" alt="MJ" /> Verified Store
                    </div>
                </div>
            </div>

            <div className="container-custom pt-24 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
                    {/* Brand Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <Link to="/">
                            <img src="/logo.png" alt="M J Optics" className="h-14 w-auto grayscale brightness-50 hover:grayscale-0 transition-all duration-500" />
                        </Link>
                        <p className="text-slate-500 font-medium leading-relaxed text-base max-w-sm">
                            Combining 23 years of medical precision with the world's finest eyewear trends. Kalyan West's premier destination for luxury eye care.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Shop */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-black text-primary uppercase tracking-widest border-b border-accent w-fit pb-1">Shop</h4>
                        <ul className="space-y-4 text-slate-500 font-bold uppercase text-[10px] tracking-widest">
                            {['Eyeglasses', 'Sunglasses', 'Computer Glasses', 'Contact Lenses', 'Reading Glasses'].map(link => (
                                <li key={link} className="hover:text-accent cursor-pointer transition-colors">
                                    <Link to={`/${link.toLowerCase().replace(' ', '-')}`}>{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Help */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-black text-primary uppercase tracking-widest border-b border-accent w-fit pb-1">Help</h4>
                        <ul className="space-y-4 text-slate-500 font-bold uppercase text-[10px] tracking-widest">
                            {['Track Order', 'Our Store', 'Booking', 'FAQ', 'Contact Us'].map(link => (
                                <li key={link} className="hover:text-accent cursor-pointer transition-colors">
                                    <Link to={`/${link.toLowerCase().replace(' ', '-')}`}>{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-black text-primary uppercase tracking-widest border-b border-accent w-fit pb-1">Visit Us</h4>
                        <div className="space-y-5 text-slate-500 font-bold text-[10px] tracking-widest leading-relaxed uppercase">
                            <div className="flex gap-3">
                                <MapPin className="w-4 h-4 text-accent shrink-0" />
                                <p>Shop No. 5, Kalyan West, <br />Maharashtra 421301</p>
                            </div>
                            <div className="flex gap-3">
                                <Phone className="w-4 h-4 text-accent shrink-0" />
                                <p>09972414093</p>
                            </div>
                            <div className="flex gap-3">
                                <Mail className="w-4 h-4 text-accent shrink-0" />
                                <p>care@mjoptics.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400 text-[9px] font-black uppercase tracking-[0.3em]">
                    <p>© 2024 M J OPTICS LUXURY EYEWEAR. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8">
                        <span className="cursor-pointer hover:text-primary transition-all">Privacy Policy</span>
                        <span className="cursor-pointer hover:text-primary transition-all">Terms</span>
                        <span className="cursor-pointer hover:text-primary transition-all">Sitemap</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;
