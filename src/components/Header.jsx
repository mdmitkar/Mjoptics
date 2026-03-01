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
            {/* Main Navbar */}
            <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-dark-text">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src="/logo.png" alt="M J Optics" className="h-10 md:h-12 w-auto object-contain" />
                    </div>

                    {/* Navigation Links */}
                    <ul className="hidden lg:flex items-center gap-8 text-[14px] font-bold tracking-wide">
                        {['EYEGLASSES', 'SUNGLASSES', 'CONTACT LENSES', 'SPECIAL POWER', 'STORE', 'OFFERS'].map((item) => (
                            <li key={item} className="cursor-pointer hover:text-primary transition-colors relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center bg-soft-bg border border-light-gray rounded-full px-4 py-1.5 focus-within:border-primary transition-all">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent border-none outline-none text-sm w-32 xl:w-48 placeholder:text-slate-400"
                            />
                            <span className="text-slate-400">🔍</span>
                        </div>
                        <button className="bg-[#25D366] text-white px-4 py-2 rounded-full text-xs font-black flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-sm">
                            <span>WhatsApp</span>
                        </button>
                        <div className="flex items-center gap-3 text-primary text-xl ml-2">
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
