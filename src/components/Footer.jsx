import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white pt-24 pb-12 overflow-hidden border-t border-slate-100">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link to="/">
                            <h2 className="font-mono text-2xl tracking-tight font-semibold text-slate-900">
                                MJ Optics
                            </h2>
                        </Link>
                        <p className="text-slate-600 leading-relaxed text-[15px] pr-4">
                            Precision Vision for Kalyan & Bhiwandi. <br />
                            Where Style Meets Clarity.
                        </p>
                        <div className="flex gap-3 pt-2">
                            {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                                <a key={idx} href="#" aria-label="Social Link" className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:border-accent hover:text-accent transition-all hover:-translate-y-1 shadow-sm">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-mono font-semibold text-slate-900 tracking-tight">Explore</h4>
                        <ul className="space-y-3 text-slate-600 text-[15px]">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about-us' },
                                { name: 'Precision Lenses', path: '/precision-lenses' },
                                { name: 'Collections', path: '/collections' },
                                { name: 'Eye Care Services', path: '/eye-care-services' },
                            ].map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="hover:text-accent transition-colors flex items-center gap-2 group">
                                        <span className="w-4 h-[1px] bg-slate-300 group-hover:bg-accent transition-colors"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-mono font-semibold text-slate-900 tracking-tight">Visit Us</h4>
                        <div className="space-y-4 text-slate-600 text-[15px]">
                            <div className="flex gap-3 group items-start">
                                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <Link to="/location-contact" className="group-hover:text-accent transition-colors">
                                    Triveni Park, Wayale Nagar,<br />Kalyan West, Maharashtra
                                </Link>
                            </div>
                            <div className="flex gap-3 group items-center">
                                <Phone className="w-5 h-5 text-accent shrink-0" />
                                <a href="tel:09972414093" className="group-hover:text-accent font-mono transition-colors">
                                    09972414093
                                </a>
                            </div>
                            <div className="flex gap-3 group items-center">
                                <Mail className="w-5 h-5 text-accent shrink-0" />
                                <a href="mailto:care@mjoptics.com" className="group-hover:text-accent transition-colors">
                                    care@mjoptics.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-mono font-semibold text-slate-900 tracking-tight">Stay Updated</h4>
                        <p className="text-slate-600 text-[15px] leading-relaxed">Subscribe for exclusive collections and eye care tips.</p>
                        <form className="relative flex" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="w-full bg-slate-50 border border-slate-200 rounded-l-[8px] py-2.5 px-4 text-[15px] outline-none focus:border-accent transition-colors" 
                                required
                            />
                            <button 
                                type="submit"
                                className="bg-slate-900 text-white px-5 rounded-r-[8px] font-medium text-[14px] hover:bg-accent transition-colors"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                    <p className="font-mono text-xs text-slate-400">© {new Date().getFullYear()} MJ OPTICS. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-6 text-xs font-medium">
                        <Link to="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-accent transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
