import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
    { name: 'About Us', path: '/about' },
    { name: 'Collection', path: '/collection' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const headerTextClass = !isScrolled && isHome ? 'text-secondary' : 'text-primary';
  const linkTextClass = (path) => {
    const isActive = location.pathname === path;
    if (!isScrolled && isHome) {
        return isActive ? 'text-secondary font-black' : 'text-secondary/80 hover:text-secondary';
    }
    return isActive ? 'text-accent font-black' : 'text-primary/70 hover:text-primary';
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-secondary/95 backdrop-blur-md py-4 border-primary/10 shadow-[0_4px_30px_rgba(0,0,0,0.03)]'
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="relative z-50">
            <h2 className={`font-serif text-2xl tracking-widest font-black transition-colors duration-500 ${isMobileMenuOpen ? 'text-primary' : headerTextClass}`}>
              MJ OPTICS
            </h2>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`nav-link text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 relative group ${linkTextClass(link.path)}`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 w-full h-[1px] transition-transform duration-300 origin-left ${!isScrolled && isHome ? 'bg-secondary' : 'bg-accent'} ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/book-appointment"
              className={`px-6 py-2.5 text-[10px] uppercase tracking-widest font-bold inline-flex items-center border transition-all duration-500 shadow-sm ${
                  !isScrolled && isHome 
                  ? 'bg-secondary text-primary border-secondary hover:bg-transparent hover:text-secondary' 
                  : 'bg-primary text-secondary border-primary hover:bg-transparent hover:text-primary'
              }`}
            >
              Book Appt.
            </Link>

            <a
              href="https://wa.me/919972414093"
              target="_blank"
              rel="noopener noreferrer"
              className={`${!isScrolled && isHome ? 'text-[#25D366] hover:text-white' : 'text-[#25D366] hover:text-[#128C7E]'} transition-colors p-2`}
              aria-label="Contact on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden relative z-50 p-2 ${isMobileMenuOpen ? 'text-primary' : headerTextClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-secondary z-40 transition-transform duration-700 ease-in-out lg:hidden flex flex-col justify-center items-center ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 grayscale" />
        <ul className="flex flex-col items-center gap-8 relative z-10 w-full px-6">
          {navLinks.map((link) => (
            <li key={link.name} className="overflow-hidden w-full text-center">
              <Link
                to={link.path}
                className={`font-serif text-4xl block transition-transform duration-500 delay-100 ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                } ${location.pathname === link.path ? 'text-accent' : 'text-primary'}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="mt-8 overflow-hidden w-full flex justify-center">
              <Link
                to="/book-appointment"
                className={`px-8 py-4 bg-primary text-secondary text-[12px] uppercase tracking-widest font-bold inline-flex items-center border border-primary transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-full opacity-0'}`}
              >
                Book Your Consultation
              </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
