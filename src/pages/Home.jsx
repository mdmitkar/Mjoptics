import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, Heart, ArrowRight, Quote } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Home = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <main className="bg-white overflow-hidden selection:bg-accent/30 selection:text-primary">
      
      {/* 1. Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1529336953128-a85760f58cb5?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Eyewear Lifestyle" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40 md:bg-primary/50" />
        </motion.div>

        <div className="relative z-10 container-custom text-center text-secondary">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8"
          >
            Where Vision <br/> Meets Elegance.
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link 
              to="/collection" 
              className="inline-flex items-center gap-4 border border-secondary/50 px-8 py-4 font-sans uppercase tracking-[0.2em] text-xs hover:bg-secondary hover:text-primary transition-all duration-500"
            >
              Explore Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Collection (Editorial Layout) */}
      <section className="py-32 bg-secondary relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative aspect-[4/5] overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1470&auto=format&fit=crop" 
                alt="Editorial Eyewear" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative pl-8 lg:pl-16 border-l border-accent/30"
            >
              <span className="text-accent tracking-[0.2em] text-xs uppercase font-bold mb-4 block">Signature Frames</span>
              <h2 className="font-serif text-4xl lg:text-5xl text-primary mb-8 leading-tight">
                Curated for the <br/> Discerning Eye.
              </h2>
              <p className="text-primary/90 font-sans leading-relaxed mb-10 text-base max-w-md">
                Discover our handpicked collection of luxury eyewear. From timeless classics to modern avant-garde silhouettes, each frame is a testament to extraordinary craftsmanship and uncompromised quality.
              </p>
              <Link to="/collection" className="group inline-flex items-center gap-3 text-primary font-bold tracking-widest text-xs uppercase">
                <span>View The Lookbook</span>
                <span className="w-8 h-[1px] bg-primary group-hover:w-16 transition-all duration-500" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Why MJ Optics */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-24"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">The MJ Optics Experience</h2>
            <p className="font-sans text-primary/80 max-w-xl mx-auto">Beyond mere vision correction, we offer an elegant transformation. Discover the boutique difference.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          >
            {[
              { icon: Shield, title: "Curated Excellence", desc: "Expertly selected frames from the world's most prestigious luxury houses.", offset: "lg:mt-0" },
              { icon: Sparkles, title: "Precision Vision", desc: "State-of-the-art diagnostic technology for uncompromising clarity.", offset: "lg:mt-16" },
              { icon: Heart, title: "Personal Styling", desc: "Bespoke frame fitting to complement your unique facial architecture.", offset: "lg:mt-32" }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className={`p-10 transition-all duration-500 hover:shadow-[0_20px_40px_-20px_rgba(183,110,121,0.15)] bg-secondary/30 group ${feature.offset}`}
              >
                <feature.icon className="w-8 h-8 text-accent mb-8 stroke-[1.5] group-hover:scale-110 transition-transform duration-500" />
                <h3 className="font-serif text-2xl text-primary mb-4">{feature.title}</h3>
                <p className="font-sans text-primary/80 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Testimonials Preview */}
      <section className="py-32 bg-secondary relative overflow-hidden">
        <div className="absolute top-10 left-10 text-primary opacity-5">
          <Quote className="w-64 h-64" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-end mb-16"
          >
            <h2 className="font-serif text-4xl lg:text-5xl text-primary">Words from <br/> Our Patrons.</h2>
            <Link to="/testimonials" className="hidden md:inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-bold hover:text-primary transition-colors">
              Read All Stories <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Sliding Cards */}
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide">
            {[
              { name: "Priya Sharma", text: "An absolute masterclass in luxury retail. The attention to detail in helping me find the perfect frames was unparalleled. I truly felt understood." },
              { name: "Anil Desai", text: "The collection here rivals boutiques in Milan or Paris. Exquisite frames and a wonderfully warm, unhurried consultation experience." },
              { name: "Kavita Rao", text: "Not just an optical shop—a sanctuary for style. The owner has a brilliant eye for what suits your face perfectly. I won't go anywhere else." }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="min-w-[300px] md:min-w-[400px] bg-white p-10 snap-center shadow-sm"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Quote key={i} className="w-3 h-3 text-accent fill-accent" />)}
                </div>
                <p className="font-serif text-lg text-primary/80 leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>
                <span className="block font-sans uppercase tracking-widest text-xs font-bold text-primary">
                  — {testimonial.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Banner */}
      <section className="py-32 relative overflow-hidden bg-primary text-secondary">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--color-accent)_0%,transparent_70%)]" />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="container-custom relative z-10 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8">Ready to elevate your vision?</h2>
          <p className="font-sans max-w-lg mx-auto text-secondary/70 mb-12">
            Schedule a private consultation for bespoke frame styling and comprehensive eye care.
          </p>
          <Link 
            to="/book-appointment" 
            className="inline-block bg-accent text-white px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-white hover:text-primary transition-colors duration-500"
          >
            Book An Appointment
          </Link>
        </motion.div>
      </section>

    </main>
  );
};

export default Home;
