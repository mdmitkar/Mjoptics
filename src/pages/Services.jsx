import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Glasses, Ruler, Wrench } from 'lucide-react';

const services = [
  { id: 1, title: "Comprehensive Eye Testing", icon: Eye, desc: "State-of-the-art diagnostic evaluations to ensure optical health and perfect prescription accuracy." },
  { id: 2, title: "Bespoke Frame Fitting", icon: Ruler, desc: "Personalized consultations to find frames that perfectly align with your facial architecture and lifestyle." },
  { id: 3, title: "Premium Lens Customization", icon: Glasses, desc: "Tailored lens crafting, from digital fatigue reduction to ultra-thin high-index materials." },
  { id: 4, title: "Repairs & Adjustments", icon: Wrench, desc: "Meticulous care and ultrasonic cleaning to keep your luxury frames pristine." }
];

const Services = () => {
  return (
    <main className="bg-white min-h-screen pt-40 pb-32 overflow-hidden selection:bg-accent/30 selection:text-primary">
      
      {/* Elegent Hero Gradient Background */}
      <div className="absolute top-0 left-0 right-0 h-[60vh] bg-linear-to-b from-secondary via-secondary/50 to-white -z-10" />

      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="text-accent tracking-widest text-[10px] uppercase font-bold mb-4 block">Our Expertise</span>
          <h1 className="text-5xl lg:text-7xl font-serif text-primary mb-6">Exceptional Eyecare</h1>
          <p className="text-primary/90 font-sans leading-relaxed text-sm">
            Experience beyond retail. We merge clinical precision with personalized styling to offer a truly tailored optical journey.
          </p>
        </motion.div>

        {/* Staggered Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
          
          {/* Decorative background blur element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`relative overflow-hidden group p-10 lg:p-14 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(183,110,121,0.1)] ${
                index % 2 !== 0 ? 'md:mt-16' : '' // Stagger effect
              }`}
            >
              {/* Soft glow on hover via pseudo-element equivalent */}
              <div className="absolute inset-0 bg-linear-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex items-start gap-6 relative z-10">
                <div className="p-4 bg-secondary/50 rounded-full text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <service.icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-primary mb-4">{service.title}</h3>
                  <p className="font-sans text-sm text-primary/80 leading-relaxed pr-6">
                    {service.desc}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
