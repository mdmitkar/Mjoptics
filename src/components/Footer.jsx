import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-light-gray pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <img src="/logo.png" alt="M J Optics" className="h-12 w-auto" />
                        <p className="text-slate-500 font-medium leading-relaxed">
                            Serving Kalyan for over 23 years with premium eyewear, expert eye testing, and the latest contact lens technology.
                        </p>
                        <div className="flex gap-4">
                            {['Facebook', 'Instagram', 'Twitter'].map(social => (
                                <div key={social} className="w-10 h-10 bg-soft-bg rounded-full flex items-center justify-center cursor-pointer hover:bg-accent hover:text-white transition-all">
                                    <span className="text-sm">📱</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-black text-primary">Quick Links</h4>
                        <ul className="space-y-4 text-slate-600 font-medium">
                            {['Home', 'Eyeglasses', 'Sunglasses', 'Contact Lenses', 'Store Locator'].map(link => (
                                <li key={link} className="hover:text-accent cursor-pointer transition-colors flex items-center gap-2">
                                    <span className="text-accent">›</span> {link}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-black text-primary">Contact Us</h4>
                        <div className="space-y-4 text-slate-600 font-medium text-sm">
                            <div className="flex gap-3">
                                <span className="text-xl">📍</span>
                                <p>Kalyan West, Maharashtra, India</p>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-xl">📞</span>
                                <p>09972414093</p>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-xl">✉️</span>
                                <p>contact@mjoptics.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Timings */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-black text-primary">Store Timings</h4>
                        <div className="bg-soft-bg p-5 rounded-premium space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="font-bold text-primary">Mon - Sat:</span>
                                <span className="text-slate-600">10:00 AM - 9:00 PM</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="font-bold text-primary">Sunday:</span>
                                <span className="text-slate-600 font-bold">Closed</span>
                            </div>
                            <button className="w-full btn-primary py-2 text-xs mt-2">Get Directions</button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-light-gray pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
                    <p>© 2024 M J Optics. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <span className="cursor-pointer hover:text-primary transition-colors">Privacy Policy</span>
                        <span className="cursor-pointer hover:text-primary transition-colors">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
