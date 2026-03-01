import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const BookAppointment = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
        setIsSubmitted(false);
    }, 4000);
  };

  return (
    <main className="min-h-screen relative flex items-center justify-center pt-32 pb-20 selection:bg-accent/30 selection:text-primary">
      {/* Background Image with blur */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
            src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1587&auto=format&fit=crop" 
            alt="Optical Store Background" 
            className="w-full h-full object-cover origin-center scale-105"
        />
        <div className="absolute inset-0 bg-secondary/80 backdrop-blur-[6px]" />
      </div>

      <div className="container-custom relative z-10 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-2xl bg-white/70 backdrop-blur-2xl rounded-[16px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/50 p-10 lg:p-16 relative overflow-hidden"
        >
          {isSubmitted ? (
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent">
                <Check className="w-10 h-10 stroke-[3]" />
              </div>
              <h2 className="font-serif text-3xl text-primary mb-4">Request Received</h2>
              <p className="font-sans text-primary/60 text-sm max-w-xs mx-auto">
                Our team will contact you shortly to confirm your private consultation.
              </p>
            </motion.div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h1 className="font-serif text-4xl lg:text-5xl text-primary mb-4">Reserve a Time.</h1>
                <p className="font-sans text-primary/60 text-sm">Experience personalized frame styling and expert eyecare.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                        <input type="text" id="name" required className="w-full bg-transparent border-b border-primary/20 py-3 text-sm text-primary outline-none focus:border-accent transition-colors peer placeholder:text-transparent" placeholder="Full Name" />
                        <label htmlFor="name" className="absolute left-0 top-3 text-[11px] font-bold uppercase tracking-widest text-primary/40 transition-all duration-300 peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-accent peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-accent">Full Name</label>
                    </div>
                    
                    <div className="relative group">
                        <input type="tel" id="phone" required className="w-full bg-transparent border-b border-primary/20 py-3 text-sm text-primary outline-none focus:border-accent transition-colors peer placeholder:text-transparent" placeholder="Phone Number" />
                        <label htmlFor="phone" className="absolute left-0 top-3 text-[11px] font-bold uppercase tracking-widest text-primary/40 transition-all duration-300 peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-accent peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-accent">Phone Number</label>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                        <input type="email" id="email" required className="w-full bg-transparent border-b border-primary/20 py-3 text-sm text-primary outline-none focus:border-accent transition-colors peer placeholder:text-transparent" placeholder="Email Address" />
                        <label htmlFor="email" className="absolute left-0 top-3 text-[11px] font-bold uppercase tracking-widest text-primary/40 transition-all duration-300 peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-accent peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-accent">Email Address</label>
                    </div>
                    
                    <div className="relative group">
                        <select id="service" required className="w-full bg-transparent border-b border-primary/20 py-3 text-sm text-primary outline-none focus:border-accent transition-colors peer appearance-none cursor-pointer">
                            <option value="" disabled selected hidden></option>
                            <option value="eye-test">Comprehensive Eye Test</option>
                            <option value="frame-fitting">Frame Styling & Fitting</option>
                            <option value="lens-consult">Lens Customization</option>
                            <option value="general">General Visit</option>
                        </select>
                        <label htmlFor="service" className="absolute left-0 top-3 text-[11px] font-bold uppercase tracking-widest text-primary/40 transition-all duration-300 peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-accent peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-accent pointer-events-none">Service Type</label>
                    </div>
                </div>

                <div className="relative group pt-4">
                    <textarea id="message" rows="3" className="w-full bg-transparent border-b border-primary/20 py-3 text-sm text-primary outline-none focus:border-accent transition-colors peer placeholder:text-transparent resize-none" placeholder="Any specific requirements?"></textarea>
                    <label htmlFor="message" className="absolute left-0 top-7 text-[11px] font-bold uppercase tracking-widest text-primary/40 transition-all duration-300 peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-accent peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-accent">Additional Notes (Optional)</label>
                </div>

                <div className="pt-4 text-center">
                    <button type="submit" className="w-full md:w-auto px-12 py-4 bg-accent text-white uppercase text-[10px] tracking-widest font-bold border border-transparent hover:bg-white hover:text-accent hover:border-accent transition-colors duration-500 shadow-sm rounded-sm">
                        Confirm Request
                    </button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </main>
  );
};

export default BookAppointment;
