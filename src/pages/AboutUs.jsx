import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutUs = () => {
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  return (
    <main className="bg-secondary min-h-screen pt-32 pb-20 selection:bg-accent/30 selection:text-primary overflow-hidden">
      
      {/* Editorial Hero */}
      <section className="container-custom py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 lg:order-1 relative aspect-[3/4] overflow-hidden rounded-[4px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1588514193575-dc8e1fb59c5d?q=80&w=1470&auto=format&fit=crop" 
              alt="Owner Portrait in Sunglasses" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 pl-0 lg:pl-10 relative"
          >
            <div className="hidden lg:block absolute left-0 top-10 bottom-10 w-[1px] bg-accent/30" />
            <h1 className="text-5xl lg:text-7xl font-serif text-primary mb-10 leading-tight">
              A Vision <br/> Crafted <br/> With Care.
            </h1>
            
            <div className="max-w-sm space-y-6 font-sans text-[15px] leading-relaxed text-primary/95">
              <p>
                What began as a small passion project in Kalyan over a decade ago has blossomed into MJ Optics—a sanctuary where high fashion meets precise ocular science.
              </p>
              <p>
                We believe eyewear is the most intimate accessory you can own. It rests on your face, framing the windows to your soul. That's why every piece in our boutique is hand-selected with architectural beauty and lasting comfort in mind.
              </p>
              <p>
                Our philosophy is simple: warmth, unhurried attention, and an unapologetic dedication to elegance. Welcome to our vision.
              </p>
              
              <div className="pt-8 block">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Signature_placeholder.svg" className="h-12 opacity-80 mix-blend-multiply" alt="Signature" />
                <span className="block mt-2 text-xs uppercase tracking-widest font-bold text-accent">Founder, MJ Optics</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Horizontal Scroll Timeline */}
      <section className="py-32 bg-white mt-16 overflow-hidden">
        <div className="container-custom mb-16">
          <h2 className="text-4xl font-serif text-primary">Our Journey</h2>
          <div className="w-16 h-[1px] bg-accent mt-6" />
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-12 px-8 lg:px-24 pb-16 snap-x scrollbar-hide"
        >
          {[
            { year: "2010", title: "The Inception", desc: "First opened our doors with a vision to redefine eyewear retail in Kalyan." },
            { year: "2015", title: "Expansion", desc: "Introduced international luxury brands and advanced eye-testing tech." },
            { year: "2018", title: "Bespoke Services", desc: "Launched personalized styling consultations for our loyal patrons." },
            { year: "2024", title: "The Next Era", desc: "A total brand transformation to reflect the sophisticated art of optics." },
            { year: "Future", title: "Continuum", desc: "Committed to delivering unparalleled clarity and timeless elegance." },
          ].map((item, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              key={item.year} 
              className="min-w-[300px] flex-shrink-0 snap-center group"
            >
              <span className="font-serif text-6xl lg:text-8xl text-secondary group-hover:text-accent/20 transition-colors duration-500 select-none block mb-6">
                {item.year}
              </span>
              <h3 className="font-serif text-2xl text-primary mb-3">{item.title}</h3>
              <p className="font-sans text-sm text-primary/80 leading-relaxed pr-8 border-l border-accent/40 pl-4 py-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
