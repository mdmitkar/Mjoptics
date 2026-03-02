import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Shield, Sun, CheckCircle } from 'lucide-react';

const PrecisionLenses = () => {
  const [thickness, setThickness] = useState(50); // 0 to 100

  const brands = [
    { name: 'Crizal', logo: 'Cz', desc: 'Clarity & Protection' },
    { name: 'Zeiss', logo: 'Z', desc: 'German Precision' },
    { name: 'Essilor', logo: 'Es', desc: 'Innovation in Vision' }
  ];

  return (
    <main className="bg-secondary min-h-screen pt-24 pb-20 overflow-hidden">
      
      {/* Hero */}
      <section className="container-custom py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 leading-tight">Clarity <br/><span className="text-slate-400">Engineered.</span></h1>
            <p className="subheading max-w-md">
              Your frames make a statement, but your lenses define your vision. We partner with the world's leading optical laboratories to bring you unparalleled clarity and protection.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="btn-primary">Consult an Expert</button>
            </div>
          </motion.div>

          {/* Interactive Lens Demo */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="premium-card p-8 lg:p-12 relative overflow-hidden flex flex-col items-center justify-center bg-white"
          >
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-light via-accent to-accent-light" />
             
             <h3 className="mb-8 text-xl">High-Index Lens Simulation</h3>
             
             {/* The Interactive Lens */}
             <div className="relative w-full max-w-[300px] h-[200px] flex items-center justify-center mb-8">
                {/* Regular Lens (Background) */}
                <div className="absolute w-[80%] h-full rounded-full border-4 border-slate-200 bg-blue-50/30 opacity-50 transition-all duration-300 pointer-events-none flex items-center justify-center">
                   <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 w-24">Regular (1.50)</div>
                </div>

                {/* High Index Lens (Foreground, dynamically resizing) */}
                <motion.div 
                   className="absolute h-[90%] rounded-full border border-accent bg-accent/5 backdrop-blur-sm flex items-center justify-center shadow-lg pointer-events-none"
                   style={{ width: `${50 + (thickness * 0.4)}%` }}
                >
                    <div className="absolute left-[-50px] top-1/2 -translate-y-1/2 text-xs font-mono text-accent font-bold w-24 text-right">Thin (1.74)</div>
                </motion.div>
             </div>

             <div className="w-full max-w-[300px]">
               <div className="flex justify-between text-xs font-mono text-slate-500 mb-2 font-bold uppercase tracking-wider">
                 <span>Ultra Thin</span>
                 <span>Standard</span>
               </div>
               <input 
                 type="range" 
                 min="0" 
                 max="100" 
                 value={thickness} 
                 onChange={(e) => setThickness(parseInt(e.target.value))}
                 className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-accent"
               />
               <p className="text-center mt-4 text-sm text-slate-500 body-text">Drag to compare lens thickness for high prescriptions.</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Lab Partners */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container-custom">
          <p className="text-center font-mono text-sm uppercase tracking-widest text-slate-400 mb-12 font-bold">Authorized dispensing partners for</p>
          <div className="flex justify-center gap-12 lg:gap-24 flex-wrap">
            {brands.map((brand, idx) => (
              <motion.div 
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:border-accent group-hover:shadow-md transition-all duration-300">
                  <span className="font-serif text-2xl text-primary group-hover:text-accent transition-colors">{brand.logo}</span>
                </div>
                <div>
                   <h4 className="text-xl font-medium m-0 group-hover:text-accent transition-colors">{brand.name}</h4>
                   <p className="text-sm text-slate-500 font-mono mt-1">{brand.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 container-custom">
        <div className="text-center mb-16">
           <h2 className="mb-4">Advanced Coatings</h2>
           <p className="subheading max-w-2xl mx-auto">Enhance your visual experience with specialized lens treatments designed for modern lifestyles.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { icon: <Sun className="w-6 h-6 text-accent" />, title: "Anti-Reflective", desc: "Eliminates glare from screens and headlights, making your lenses nearly invisible while reducing eye strain." },
             { icon: <Shield className="w-6 h-6 text-accent" />, title: "Scratch Resistant", desc: "A hard-coat layer that significantly extends the lifespan of your lenses against daily wear and tear." },
             { icon: <Eye className="w-6 h-6 text-accent" />, title: "Blue Light Block", desc: "Essential for digital warriors. Filters harmful blue-violet light emitted by digital screens." }
           ].map((tech, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="premium-card p-8 group hover:-translate-y-2 transition-transform duration-500"
             >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                   {tech.icon}
                </div>
                <h3 className="text-xl mb-4">{tech.title}</h3>
                <p className="body-text">{tech.desc}</p>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Lens Types */}
      <section className="py-24 bg-primary text-secondary">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-secondary mb-8 leading-tight">Solutions for <br/><span className="text-accent">Every Distance.</span></h2>
                  <div className="space-y-6">
                     {[
                        { title: "Single Vision", desc: "Optimized for one field of vision—either near, intermediate, or distance." },
                        { title: "Progressive Lenses", desc: "Seamless transition between near, intermediate, and distance vision without the visible line of bifocals." },
                        { title: "Office/Computer Lenses", desc: "Tailored specifically for intermediate and near vision, perfect for multi-screen workspaces." }
                     ].map((item, idx) => (
                        <div key={idx} className="flex gap-4">
                           <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                           <div>
                              <h4 className="text-xl text-secondary mb-2">{item.title}</h4>
                              <p className="text-secondary/70 font-sans leading-relaxed">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               
               <div className="relative aspect-square">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl" />
                  <img 
                     src="https://images.unsplash.com/photo-1555529733-0e67056058ab?q=80&w=1200&auto=format&fit=crop" 
                     alt="Lens checking" 
                     className="relative z-10 w-full h-full object-cover rounded-premium border border-white/10"
                  />
               </div>
            </div>
         </div>
      </section>

    </main>
  );
};

export default PrecisionLenses;
