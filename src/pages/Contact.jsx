import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <main className="min-h-screen bg-linear-to-b from-secondary to-white pt-40 pb-32 selection:bg-accent/30 selection:text-primary">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent tracking-[0.2em] text-[10px] uppercase font-bold mb-4 block">Get In Touch</span>
          <h1 className="text-5xl lg:text-7xl font-serif text-primary mb-6">Visit Our Boutique</h1>
          <p className="text-primary/90 font-sans leading-relaxed text-sm max-w-xl mx-auto">
            Experience the art of fine eyewear in person. Our expert stylists and optometrists look forward to welcoming you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-6xl mx-auto relative">
            
          {/* Left Column: Contact Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8"
          >
            {/* Address */}
            <div className="bg-white p-8 lg:p-10 border border-primary/5 shadow-sm hover:shadow-[0_20px_40px_-20px_rgba(183,110,121,0.15)] transition-shadow duration-500">
                <MapPin className="w-6 h-6 text-accent mb-6" />
                <h3 className="font-serif text-2xl text-primary mb-3">Our Location</h3>
                <p className="font-sans text-sm text-primary/90 leading-relaxed">
                    Shop No. 5, Kalyan West,<br />
                    Maharashtra 421301,<br />
                    India
                </p>
            </div>

            {/* Reach Us */}
            <div className="bg-white p-8 lg:p-10 border border-primary/5 shadow-sm hover:shadow-[0_20px_40px_-20px_rgba(183,110,121,0.15)] transition-shadow duration-500">
                <div className="flex gap-4 mb-6">
                    <Phone className="w-6 h-6 text-accent" />
                    <Mail className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-2xl text-primary mb-3">Direct Contact</h3>
                <p className="font-sans text-sm text-primary/90 leading-relaxed mb-4">
                    Call: +91 9972414093<br />
                    Email: care@mjoptics.com
                </p>
                <a 
                  href="https://wa.me/919972414093" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#25D366] hover:text-[#128C7E] transition-colors"
                >
                    <MessageCircle className="w-4 h-4" /> Message on WhatsApp
                </a>
            </div>

            {/* Hours */}
            <div className="bg-white p-8 lg:p-10 border border-primary/5 shadow-sm hover:shadow-[0_20px_40px_-20px_rgba(183,110,121,0.15)] transition-shadow duration-500 md:col-span-2 lg:col-span-1">
                <Clock className="w-6 h-6 text-accent mb-6" />
                <h3 className="font-serif text-2xl text-primary mb-3">Boutique Hours</h3>
                <ul className="font-sans text-sm text-primary/70 leading-relaxed space-y-2">
                    <li className="flex justify-between border-b border-primary/5 pb-2"><span>Monday - Saturday</span> <span>10:30 AM - 9:00 PM</span></li>
                    <li className="flex justify-between pt-2"><span>Sunday</span> <span>By Prior Appointment</span></li>
                </ul>
            </div>
          </motion.div>

          {/* Right Column: Embedded Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="sticky top-32 sticky-map-container"
          >
            <div className="aspect-square lg:aspect-[4/5] w-full rounded-[16px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] grayscale hover:grayscale-0 transition-all duration-1000 border border-white/50 ring-4 ring-white">
              {/* Note: Replacing placeholder with actual Kalyan embed coordinates */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120613.62340333333!2d73.0699276!3d19.2435423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79673ccfb29b5%3A0xe5cd6eb161109961!2sKalyan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="MJ Optics Location"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
};

export default Contact;
