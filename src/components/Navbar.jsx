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
        className={`transition-all duration-300 border-b border-slate-100 ${isScrolled ? "bg-white/95 shadow-lg py-2" : "bg-white/80 backdrop-blur-md py-3"}`}
      >
        <div className="container-custom flex justify-between items-center gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src="/logo.png"
              alt="M J Optics"
              className="h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`relative whitespace-nowrap ${link.name === "Sunglasses" ? "group" : ""}`}
              >
                <Link
                  to={link.path}
                  className={`nav-link text-[11px] xl:text-xs font-black tracking-widest py-1 flex items-center gap-1 ${isActive(link.path) ? "nav-link-active" : ""}`}
                >
                  {link.name}
                </Link>
                {link.name === "Sunglasses" && <SunglassesMegaMenu />}
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-3 xl:gap-5 shrink-0">
            {/* Slim Search */}
            <div className="hidden xl:flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 focus-within:border-accent/50 focus-within:bg-white transition-all">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-[11px] w-28 xl:w-36 placeholder:text-slate-400 font-bold"
              />
              <Search className="w-3.5 h-3.5 text-slate-400" />
            </div>

            <a
              href="https://wa.me/919972414093"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 bg-[#25D366] text-white px-4 py-2 rounded-lg text-[10px] font-black hover:bg-[#25D366]/90 transition-all shadow-sm active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WHATSAPP</span>
            </a>

            <div className="flex items-center gap-4 text-primary">
              <button className="hover:scale-110 transition-transform relative group p-1">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute top-0 right-0 bg-accent text-white text-[9px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-black shadow-sm">
                  0
                </span>
              </button>
              <button className="lg:hidden hover:text-accent transition-colors p-1">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
