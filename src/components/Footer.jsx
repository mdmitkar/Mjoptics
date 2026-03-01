import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-light-gray pt-32 pb-12">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand Info */}
                    <div className="space-y-8">
                        <Link to="/">
                            <img src="/logo.png" alt="M J Optics" className="h-14 w-auto grayscale brightness-50 hover:grayscale-0 transition-all duration-500" />
                        </Link>
                        <p className="text-slate-500 font-medium leading-relaxed text-base">
                            Precision. Style. Vision. <br />
                            Serving Kalyan West for over 23 years with a commitment to optical excellence and high-fashion eyewear.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-12 h-12 bg-slate-50 border border-light-gray rounded-2xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-black text-primary uppercase tracking-tighter">Collections</h4>
                        <ul className="space-y-5 text-slate-500 font-bold uppercase text-sm tracking-wide">
                            {['Eyeglasses', 'Sunglasses', 'Contact Lenses', 'Computer Glasses', 'Power Sunglasses'].map(link => (
                                <li key={link} className="hover:text-accent cursor-pointer transition-colors flex items-center gap-3 group">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full scale-0 group-hover:scale-100 transition-transform"></span>
                                    <Link to={`/${link.toLowerCase().replace(' ', '-')}`}>{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-black text-primary uppercase tracking-tighter">Reach Us</h4>
                        <div className="space-y-6 text-slate-500 font-bold text-sm tracking-wide">
                            <div className="flex gap-4 group cursor-pointer">
                                <MapPin className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                                <p className="group-hover:text-primary transition-colors">Shop No. 5, Kalyan West, <br />Maharashtra 421301</p>
                            </div>
                            <div className="flex gap-4 group cursor-pointer">
                                <Phone className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                                <p className="group-hover:text-primary transition-colors">09972414093</p>
                            </div>
                            <div className="flex gap-4 group cursor-pointer">
                                <Mail className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                                <p className="group-hover:text-primary transition-colors">care@mjoptics.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Timings */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-black text-primary uppercase tracking-tighter">Visit Store</h4>
                        <div className="bg-slate-50 border border-light-gray p-8 rounded-premium space-y-4 shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:bg-accent/10 transition-all"></div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="font-black text-primary">MON - SAT</span>
                                <span className="text-slate-500">10AM - 9PM</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border-t border-slate-200 pt-4">
                                <span className="font-black text-primary">SUNDAY</span>
                                <span className="text-accent font-black">CLOSED</span>
                            </div>
                            <button className="w-full btn-primary py-3 text-xs mt-4 flex items-center justify-center gap-2 group">
                                GET DIRECTIONS <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
