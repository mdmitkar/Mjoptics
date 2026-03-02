import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutUs = () => {
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <main className="bg-secondary min-h-screen pt-24 pb-20 overflow-hidden">
      
      {/* 1. Header Section */}
      <section className="container-custom py-16 text-center">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
         >
           <h1 className="mb-6">The Legacy</h1>
           <p className="subheading max-w-2xl mx-auto">
             For over two decades, MJ Optics has been the cornerstone of precision eye care in Kalyan West, dedicated to accuracy in every millimeter.
           </p>
         </motion.div>
      </section>

      {/* 2. Editorial Hero (The Story) */}
      <section className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 lg:order-1 relative aspect-[4/5] overflow-hidden rounded-[16px] shadow-lg border border-accent-light"
          >
            <img 
              src="https://images.unsplash.com/photo-1574259392081-dbe3c19cd15e?q=80&w=1489&auto=format&fit=crop" 
              alt="Optical Store Interior" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 pl-0 lg:pl-10 relative"
          >
            <div className="hidden lg:block absolute left-0 top-10 bottom-10 w-[2px] bg-accent/30 rounded-full" />
            <h2 className="mb-8 leading-tight">
              A Vision <br/> Crafted <br/> With Care.
            </h2>
            
            <div className="max-w-md space-y-6 body-text">
              <p>
                What began as a passion project in Kalyan over 20 years ago has blossomed into MJ Optics—a sanctuary where high fashion meets precise ocular science.
              </p>
              <p>
                Located near Khadakpada, our mission is "Accuracy in every millimeter." We believe eyewear is the most intimate accessory you can own. It rests on your face, framing the windows to your soul.
              </p>
              <p>
                That's why every piece in our boutique is hand-selected, and every eye test is conducted with state-of-the-art equipment. Welcome to our vision.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Parallax Showroom section */}
      <section ref={parallaxRef} className="py-32 relative overflow-hidden h-[500px] flex items-center justify-center my-20">
         <motion.div style={{ y }} className="absolute inset-0 z-0">
             <img 
                 src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=2070&auto=format&fit=crop" 
                 alt="Premium Showroom" 
                 className="w-full h-[150%] object-cover object-center -top-[25%] relative filter blur-[2px] brightness-75"
             />
         </motion.div>
         
         <div className="relative z-10 w-full text-center px-4">
             <div className="bg-white/90 backdrop-blur-md max-w-2xl mx-auto p-12 rounded-[16px] border border-accent-light shadow-xl">
                 <h2 className="text-3xl md:text-4xl mb-6">15,000+ Prescriptions</h2>
                 <p className="subheading font-mono text-accent font-semibold tracking-widest uppercase text-sm mb-0">Delivered with unmatched accuracy.</p>
             </div>
         </div>
      </section>

      {/* 4. Horizontal Scroll Timeline */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom mb-16 text-center md:text-left">
          <h2 className="">Milestones</h2>
          <div className="w-16 h-[2px] bg-accent mt-4 mx-auto md:mx-0 rounded-full" />
        </div>

        <div className="relative">
            {/* Custom scrollbar indicator */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 z-10">
                <motion.div 
                   className="h-full bg-accent"
                   style={{ scaleX: scrollXProgress, transformOrigin: '0%' }}
                />
            </div>

            <div 
              ref={scrollRef}
              className="flex overflow-x-auto gap-8 px-4 md:px-8 pb-16 pt-12 snap-x scrollbar-hide"
            >
              {[
                { year: "2003", title: "The Inception", desc: "Established in the heart of Kalyan West, bringing quality eye care to the community." },
                { year: "2010", title: "Digital Precision", desc: "Upgraded to fully computerized eye testing facilities for exact measurements." },
                { year: "2015", title: "Global Collections", desc: "Partnered with international luxury brands to offer world-class frames locally." },
                { year: "2020", title: "Bhiwandi Branch", desc: "Expanded our operations to serve the growing needs of Bhiwandi residents." },
                { year: "Today", title: "The Boutique Experience", desc: "A continuing commitment to style, precision, and personalized ocular health." },
              ].map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  key={item.year} 
                  className="min-w-[280px] md:min-w-[320px] flex-shrink-0 snap-center group premium-card p-8 border-t-4 border-t-accent"
                >
                  <span className="font-mono text-5xl md:text-6xl text-slate-200 group-hover:text-accent-light transition-colors duration-500 select-none block mb-6 font-bold -mt-4 -ml-2">
                    {item.year}
                  </span>
                  <h3 className="text-2xl mb-4">{item.title}</h3>
                  <p className="body-text">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* 5. Team Section */}
      <section className="py-24 bg-secondary">
          <div className="container-custom">
              <div className="text-center mb-16">
                  <h2>Expert Care</h2>
                  <p className="subheading mt-4">Meet the professionals dedicated to your vision.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {[
                      { name: "Dr. A. Sharma", role: "Chief Optometrist", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop" },
                      { name: "Meera Patel", role: "B.Optom Specialist", img: "https://images.unsplash.com/photo-1594824436951-7f12bc4175de?q=80&w=800&auto=format&fit=crop" },
                  ].map((member, idx) => (
                      <div key={idx} className="premium-card group">
                          <div className="aspect-square overflow-hidden">
                              <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          </div>
                          <div className="p-6 text-center">
                              <h3 className="text-xl mb-2">{member.name}</h3>
                              <p className="font-mono text-sm text-accent font-semibold tracking-wider uppercase">{member.role}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

    </main>
  );
};

export default AboutUs;
