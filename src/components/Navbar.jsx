import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShoppingCart,
  Search,
  Menu,
  Phone,
  MessageCircle,
  Star,
} from "lucide-react";
import SunglassesMegaMenu from "./SunglassesMegaMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Eyeglasses", path: "/eyeglasses" },
    { name: "Sunglasses", path: "/sunglasses" },
    { name: "Contact Lenses", path: "/contact-lenses" },
    { name: "Special Power", path: "/special-power" },
    { name: "Store", path: "/store" },
    { name: "Offers", path: "/offers" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        className={`transition-all duration-300 ${isScrolled ? "bg-white shadow-xl py-3" : "bg-white/90 backdrop-blur-md py-5"}`}
      >
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="M J Optics"
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li 
                key={link.name} 
                className={`relative ${link.name === "Sunglasses" ? "group" : ""}`}
              >
                <div className="py-6 flex items-center">
                  <Link
                    to={link.path}
                    className={`nav-link ${isActive(link.path) ? "nav-link-active" : ""}`}
                  >
                    {link.name}
                  </Link>
                </div>
                {link.name === "Sunglasses" && <SunglassesMegaMenu />}
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-5">
            <div className="hidden xl:flex items-center bg-light-gray border border-transparent rounded-full px-5 py-2 focus-within:border-accent transition-all">
              <input
                type="text"
                placeholder="Search premium eyewear..."
                className="bg-transparent border-none outline-none text-sm w-44 placeholder:text-slate-400 font-medium"
              />
              <Search className="w-4 h-4 text-slate-400" />
            </div>

            <a
              href="https://wa.me/919972414093"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-xs font-black hover:bg-[#25D366]/90 transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP</span>
            </a>

            <div className="flex items-center gap-5 text-primary">
              <button className="hover:scale-110 transition-transform relative group">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                  0
                </span>
              </button>
              <button className="lg:hidden hover:text-accent transition-colors">
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
