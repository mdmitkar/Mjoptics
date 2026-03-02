import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Lenses', path: '/precision-lenses' },
    { name: 'Collections', path: '/collections', hasMegaMenu: true },
    { name: 'Services', path: '/eye-care-services' },
    { name: 'Contact', path: '/location-contact' },
  ];

  const megaMenuLinks = [
    { name: 'Eyeglasses', path: '/collections?category=Eyeglasses', img: '/images/frame1.png', desc: 'Premium frames for daily clear vision' },
    { name: 'Sunglasses', path: '/collections?category=Sunglasses', img: '/images/frame2.png', desc: 'Stylish UV protection' },
    { name: 'Contact Lenses', path: '/collections?category=Contact Lenses', img: '/images/frame3.png', desc: 'Daily & monthly clear sight' },
    { name: 'Computer Glasses', path: '/collections?category=Computer Glasses', img: '/images/frame1.png', desc: 'Blue light blocking wellness' },
  ];

  const isHome = location.pathname === '/';
  // Simplified color logic based on material design (slate-900 text on white/slate-50 base)
  const headerTextClass = 'text-slate-900';
  
  const linkTextClass = (path) => {
    const isActive = location.pathname === path;
    return isActive ? 'text-accent font-semibold' : 'text-slate-600 hover:text-accent font-medium';
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-custom flex justify-between items-center relative">
          {/* Logo */}
          <Link to="/" className="relative z-50">
            <Logo 
              className="w-auto h-10 md:h-12" 
              color={isMobileMenuOpen ? "#ab2330" : "#ab2330"} 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8 h-full">
              {navLinks.map((link) => (
                <li key={link.name} className={`h-full flex items-center ${link.hasMegaMenu ? "group relative" : "relative"}`}>
                  <Link
                    to={link.path}
                    className={`nav-link text-[15px] transition-colors duration-300 relative group py-6 ${linkTextClass(link.path)}`}
                  >
                    {link.name}
                    <span className={`absolute bottom-4 left-0 w-full h-[2px] rounded-full transition-transform duration-300 origin-left bg-accent ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                  </Link>
                  
                  {link.hasMegaMenu && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[800px] bg-white rounded-premium shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="p-8 grid grid-cols-4 gap-6">
                        {megaMenuLinks.map((item, idx) => (
                          <Link key={idx} to={item.path} className="group/item block rounded-xl p-4 hover:bg-slate-50 transition-colors">
                            <div className="aspect-[4/3] rounded-lg bg-slate-100 mb-4 overflow-hidden flex items-center justify-center p-2">
                              <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500 mix-blend-multiply" />
                            </div>
                            <h4 className="font-mono font-bold text-primary mb-1 text-sm group-hover/item:text-accent transition-colors">{item.name}</h4>
                            <p className="text-xs text-slate-500 font-sans leading-relaxed">{item.desc}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <Link
              to="/book-appointment"
              className="btn-primary py-2.5 px-6"
            >
              Book Appt
            </Link>

            <a
              href="https://wa.me/919972414093"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-[#128C7E] transition-colors p-2"
              aria-label="Contact on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden relative z-50 p-2 ${isMobileMenuOpen ? 'text-slate-900' : headerTextClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-secondary z-40 transition-transform duration-500 ease-in-out lg:hidden flex flex-col justify-center items-center ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ul className="flex flex-col items-center gap-8 relative z-10 w-full px-6">
          {navLinks.map((link) => (
            <li key={link.name} className="overflow-hidden w-full text-center">
              <Link
                to={link.path}
                className={`font-mono text-3xl font-semibold block transition-transform duration-300 delay-100 ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                } ${location.pathname === link.path ? 'text-accent' : 'text-slate-900'}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="mt-8 overflow-hidden w-full flex justify-center">
              <Link
                to="/book-appointment"
                className={`btn-primary w-full max-w-xs transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-full opacity-0'}`}
              >
                Book Appointment
              </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
