import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            {/* Top Bar */}
            <div className="bg-light-gray py-2 px-6 border-b border-slate-200">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-[13px] font-medium text-slate-600">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2">
                            <span className="text-primary">📞</span> 09972414093
                        </span>
                        <span className="hidden md:flex items-center gap-2">
                            <span className="text-accent">⭐</span> 23 Years in Business | 4.7 Rating
                        </span>
                    </div>
                    <button className="bg-[#25D366] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-opacity-90 transition-all">
                        <span>WhatsApp</span>
                    </button>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src="/logo.png" alt="M J Optics" className="h-10 md:h-12 w-auto object-contain" />
                    </div>

                    {/* Navigation Links */}
                    <ul className="hidden lg:flex items-center gap-8 text-[14px] font-bold tracking-wide text-dark-text">
                        {['EYEGLASSES', 'SUNGLASSES', 'CONTACT LENSES', 'SPECIAL POWER', 'STORE', 'OFFERS'].map((item) => (
                            <li key={item} className="cursor-pointer hover:text-primary transition-colors relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>

                    {/* Right Actions */}
                    <div className="flex items-center gap-6">
                        <div className="hidden sm:flex items-center bg-soft-bg border border-light-gray rounded-full px-4 py-1.5 focus-within:border-primary transition-all">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="bg-transparent border-none outline-none text-sm w-48 placeholder:text-slate-400"
                            />
                            <span className="text-slate-400">🔍</span>
                        </div>
                        <div className="flex items-center gap-4 text-primary text-xl">
                            <button className="hover:scale-110 transition-transform">🛒</button>
                            <button className="md:hidden">☰</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
