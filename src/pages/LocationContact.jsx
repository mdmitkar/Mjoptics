import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationContact = () => {
  return (
    <main className="bg-secondary min-h-screen pt-24 pb-20">
      
      {/* Header */}
      <section className="container-custom py-16 text-center">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
         >
           <h1 className="mb-6">Find Your <span className="text-accent">Vision.</span></h1>
           <p className="subheading max-w-2xl mx-auto">
             Visit our boutique in Kalyan or our new branch in Bhiwandi. Experience premium eye care and discover our exclusive eyewear collections in person.
           </p>
         </motion.div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-8 mb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="premium-card p-8 lg:p-12 relative overflow-hidden"
          >
            {/* Decorative element */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
            
            <h2 className="text-3xl mb-8">Get in Touch</h2>

            <div className="space-y-8 relative z-10">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-mono text-sm tracking-widest text-slate-400 uppercase font-bold mb-2">Kalyan Flagship</h4>
                  <p className="text-primary/90 font-sans leading-relaxed">
                    Shop No. 4, Vasant Vihar<br/>
                    Near Khadakpada Circle<br/>
                    Kalyan (West), Maharashtra 421301
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-mono text-sm tracking-widest text-slate-400 uppercase font-bold mb-2">Bhiwandi Branch</h4>
                  <p className="text-primary/90 font-sans leading-relaxed">
                    Shop No. 2, Arihant Plaza<br/>
                    Bhiwandi-Kalyan Road<br/>
                    Bhiwandi, Maharashtra 421302
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-mono text-sm tracking-widest text-slate-400 uppercase font-bold mb-2">Hours</h4>
                  <p className="text-primary/90 font-sans leading-relaxed">
                    Monday – Saturday: 10:00 AM – 9:00 PM<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start border-t border-slate-100 pt-8 mt-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                   <a href="tel:+919876543210" className="text-xl font-medium text-primary hover:text-accent transition-colors block mb-1">+91 98765 43210</a>
                   <a href="mailto:hello@mjoptics.com" className="font-sans text-primary/70 hover:text-accent transition-colors">hello@mjoptics.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form / Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            {/* Map Placeholder */}
            <div className="premium-card overflow-hidden h-64 lg:h-80 w-full relative group">
               {/* Embed Google Maps iframe here in production */}
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1474&auto=format&fit=crop" 
                 className="w-full h-full object-cover filter grayscale contrast-125 opacity-80 group-hover:grayscale-0 transition-all duration-700"
                 alt="Map view of Kalyan" 
               />
               <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-700" />
               <div className="absolute bottom-6 left-6 right-6">
                 <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-primary w-full shadow-lg text-center inline-block">
                    Get Directions
                 </a>
               </div>
            </div>

            {/* Quick Enquiry */}
            <div className="premium-card p-8">
               <h3 className="text-2xl mb-6">Quick Enquiry</h3>
               <form className="space-y-4 font-sans">
                  <div>
                     <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-slate-200 rounded-[8px] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all bg-slate-50" />
                  </div>
                  <div>
                     <input type="email" placeholder="Your Email or Phone" className="w-full px-4 py-3 border border-slate-200 rounded-[8px] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all bg-slate-50" />
                  </div>
                  <div>
                     <textarea rows="3" placeholder="How can we help you?" className="w-full px-4 py-3 border border-slate-200 rounded-[8px] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all bg-slate-50 resize-none"></textarea>
                  </div>
                  <button type="submit" className="btn-outline w-full pt-4">Send Message</button>
               </form>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
};

export default LocationContact;
