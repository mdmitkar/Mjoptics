import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, Heart, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from './Collections';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 12, stiffness: 200 },
  },
};

const Home = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation between -10 and 10 degrees
    const rX = -((y - rect.height / 2) / rect.height) * 20;
    const rY = ((x - rect.width / 2) / rect.width) * 20;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const heroHeadline = "Precision Vision for Kalyan & Bhiwandi.".split("");

  return (
    <main className="bg-secondary min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden pt-24 pb-16">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Text Content */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left z-10 w-full xl:pl-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-accent/10 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-flex mb-8"
              >
                MJ Optics : Where Style Meets Clarity
              </motion.div>

              <motion.h1 
                variants={sentence}
                initial="hidden"
                animate="visible"
                className="text-4xl md:text-5xl lg:text-6xl text-primary font-bold leading-tight mb-8"
              >
                {heroHeadline.map((char, index) => {
                  return (
                    <motion.span key={char + "-" + index} variants={letter}>
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="subheading max-w-lg mb-10"
              >
                Serving the community with cutting-edge optical technology and high-end frames since 2003.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Link to="/book-appointment" className="btn-primary">
                  Book Eye Test
                </Link>
                <Link to="/collections" className="btn-outline">
                  Browse Collections
                </Link>
              </motion.div>
            </div>

            {/* 3D Visual Element */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.6 }}
               className="relative perspective-1000 w-full max-w-[500px] mx-auto h-[400px] md:h-[500px]"
            >
               <motion.div
                 className="w-full h-full relative preserve-3d cursor-pointer"
                 onMouseMove={handleMouseMove}
                 onMouseLeave={handleMouseLeave}
                 animate={{
                   rotateX: rotateX,
                   rotateY: rotateY,
                 }}
                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
               >
                  {/* The Glassmorphism Card */}
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-xl border-2 border-accent-light rounded-[24px] shadow-xl overflow-hidden preserve-3d">
                    
                    {/* Floating elements inside the 3D card */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 translate-z-30">
                       <motion.div 
                          animate={{ y: [0, -10, 0] }}
                          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                          className="w-48 h-24 mb-6 relative translate-z-50"
                       >
                         {/* Actual 3D glasses Graphic */}
                         <img src="/images/frame1.png" alt="Premium Eyewear" className="w-full h-full object-contain mix-blend-multiply drop-shadow-xl" />
                       </motion.div>

                       <h3 className="font-mono text-xl md:text-2xl text-primary font-bold tracking-tight text-center translate-z-20">
                          Handcrafted Precision
                       </h3>
                       <p className="font-mono mt-2 text-accent bg-accent/10 px-3 py-1 rounded-sm text-sm font-semibold tracking-wider translate-z-30">
                          99.9% UV PROTECTION
                       </p>
                    </div>

                    {/* Decorative blobs inside card but behind content */}
                    <div className="absolute top-[-20%] left-[-10%] w-40 h-40 bg-accent/20 rounded-full blur-3xl translate-z-10" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-32 h-32 bg-accent/30 rounded-full blur-2xl translate-z-10" />
                  </div>
               </motion.div>
            </motion.div>

          </div>
        </div>

        {/* Global Partner Banner */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-white/80 backdrop-blur-md border-t border-slate-200 py-6">
           <div className="flex animate-marquee whitespace-nowrap opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {[...Array(2)].map((_, i) => (
                   <div key={i} className="flex space-x-16 mx-8 items-center">
                       <span className="font-mono font-bold text-xl text-slate-800 tracking-wider">RAY-BAN</span>
                       <span className="font-mono font-bold text-xl text-slate-800 tracking-wider">ZEISS</span>
                       <span className="font-mono font-bold text-xl text-slate-800 tracking-wider">CRIZAL</span>
                       <span className="font-mono font-bold text-xl text-slate-800 tracking-wider">OAKLEY</span>
                       <span className="font-mono font-bold text-xl text-slate-800 tracking-wider">ESSILOR</span>
                       <span className="font-mono font-bold text-xl text-slate-800 tracking-wider">TITAN</span>
                   </div>
               ))}
           </div>
        </div>
      </section>

      {/* 2. Trust Bar / Stats */}
      <section className="py-20 bg-white">
        <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-accent-light">
                <div className="p-4 py-8 md:py-0">
                    <h3 className="text-4xl lg:text-5xl font-bold text-accent mb-2">2003</h3>
                    <p className="font-semibold text-slate-700">Serving Kalyan Since</p>
                </div>
                <div className="p-4 py-8 md:py-0">
                    <h3 className="text-4xl lg:text-5xl font-bold text-accent mb-2">10k+</h3>
                    <p className="font-semibold text-slate-700">Happy Eyes</p>
                </div>
                <div className="p-4 py-8 md:py-0">
                    <h3 className="text-4xl lg:text-5xl font-bold text-accent mb-2">4.8★</h3>
                    <p className="font-semibold text-slate-700">Top Rated Service</p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. About Us Preview */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">A Legacy of <br/><span className="text-accent">Clear Vision</span></h2>
              <p className="font-sans text-slate-600 mb-6 text-lg leading-relaxed">
                Founded in 2003, MJ Optics has been the cornerstone of eye care in Kalyan and Bhiwandi. We combine clinical excellence with premium fashion to redefine how you see the world.
              </p>
              <div className="flex gap-4 mb-8">
                <div className="flex items-center gap-2 font-mono text-sm text-slate-500 font-semibold"><Heart className="w-4 h-4 text-accent"/> Family Owned</div>
                <div className="flex items-center gap-2 font-mono text-sm text-slate-500 font-semibold"><Shield className="w-4 h-4 text-accent"/> Certified Pros</div>
              </div>
              <Link to="/about-us" className="btn-outline">Discover Our History</Link>
            </motion.div>
            
            <div className="relative aspect-square lg:aspect-[4/3] rounded-premium overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop" alt="Optician at work" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Collections Preview */}
      <section className="py-24 bg-secondary">
          <div className="container-custom">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                  <div className="max-w-xl">
                      <h2 className="mb-4 text-primary">Featured <span className="text-accent">Collections</span></h2>
                      <p className="subheading m-0">Explore our premium selection curated for the discerning eye. From timeless classics to bold modern designs.</p>
                  </div>
                  <Link to="/collections" className="btn-primary whitespace-nowrap hidden md:inline-flex">View All Styles</Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.slice(0, 3).map((product, index) => (
                      <ProductCard key={product.id} product={product} index={index} />
                  ))}
              </div>
              
              <div className="mt-12 text-center md:hidden">
                 <Link to="/collections" className="btn-primary">View All Styles</Link>
              </div>
          </div>
      </section>

      {/* 5. Precision Lenses Preview */}
      <section className="py-24 bg-primary text-secondary relative">
        <div className="absolute inset-0 opacity-5">
           <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
               <polygon fill="currentColor" points="0,0 100,100 0,100"/>
           </svg>
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Sparkles className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="mb-6 text-secondary">Advanced <span className="text-accent">Lens Technology</span></h2>
            <p className="font-sans text-secondary/80 text-lg">We partner with global leaders like Essilor and Zeiss to provide lenses that offer unparalleled clarity, protection, and durability.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Anti-Reflective', 'Blue Light Filter', 'Progressive Lenses'].map((tech, i) => (
              <div key={i} className="border border-secondary/20 p-8 rounded-2xl hover:bg-white/5 transition-colors text-center">
                <h3 className="font-mono text-xl text-accent mb-3">{tech}</h3>
                <p className="text-sm font-sans text-secondary/60">Experience crystal-clear vision tailored to your daily digital and active lifestyle.</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/precision-lenses" className="btn-primary bg-secondary text-primary hover:bg-white">Explore Lenses</Link>
          </div>
        </div>
      </section>

      {/* 6. Services Preview */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
               {['Comprehensive Eye Exam', 'Pediatric Vision', 'Contact Lens Fitting', 'Glaucoma Screening'].map((service, i) => (
                 <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-accent hover:shadow-md transition-all">
                   <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                     <Shield className="w-5 h-5" />
                   </div>
                   <h4 className="font-bold text-primary text-sm font-mono">{service}</h4>
                 </div>
               ))}
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-primary mb-6">Expert <span className="text-accent">Clinical Care</span></h2>
              <p className="subheading mb-8">Our state-of-the-art clinic is equipped with the latest diagnostic technology. Our experienced optometrists ensure your eyes are healthy and your vision is perfect.</p>
              <Link to="/eye-care-services" className="btn-outline flex items-center gap-2 w-max">
                Learn About Our Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
