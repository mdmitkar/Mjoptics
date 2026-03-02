import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Beaker, CheckCircle2, Monitor, Stethoscope } from 'lucide-react';

const EyeCareServices = () => {
  return (
    <main className="bg-secondary min-h-screen pt-24 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="bg-primary text-secondary py-20 lg:py-32 relative">
         <div className="absolute inset-0 z-0">
             <img 
                 src="https://images.unsplash.com/photo-1549488344-c79af9088514?q=80&w=2070&auto=format&fit=crop" 
                 alt="Clinical Eye Care" 
                 className="w-full h-full object-cover blur-sm opacity-20 mix-blend-overlay"
             />
         </div>
         <div className="container-custom relative z-10 text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
            >
               <h1 className="text-secondary mb-6 leading-tight">Clinical <br/><span className="text-accent">Excellence.</span></h1>
               <p className="font-sans text-secondary/80 max-w-2xl mx-auto text-lg mb-10">
                 Beyond fashion, we are healthcare professionals dedicated to the long-term health of your eyes. Experience comprehensive eye tests with state-of-the-art diagnostic equipment.
               </p>
               <button className="btn-primary">Book an Eye Test</button>
            </motion.div>
         </div>
      </section>

      {/* Services Grid */}
      <section className="container-custom py-24">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Service 1 */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="premium-card p-10 flex flex-col items-start border-t-4 border-t-accent hover:shadow-xl transition-all duration-300 group"
            >
               <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                  <Monitor className="w-8 h-8 text-accent" />
               </div>
               <h3 className="text-2xl mb-4">Computerized Eye Testing</h3>
               <p className="body-text mb-6">
                 Utilizing advanced auto-refractometers, we provide highly accurate, frictionless digital eye examinations to determine your precise prescription.
               </p>
               <ul className="space-y-3 font-sans text-primary/80 text-sm mt-auto w-full">
                  {['Objective refraction', 'Corneal curvature measurement', 'Instant digital results'].map((item, i) => (
                     <li key={i} className="flex gap-3 items-center border-b border-slate-100 pb-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" /> {item}
                     </li>
                  ))}
               </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="premium-card p-10 flex flex-col items-start border-t-4 border-t-accent hover:shadow-xl transition-all duration-300 group"
            >
               <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                  <Activity className="w-8 h-8 text-accent" />
               </div>
               <h3 className="text-2xl mb-4">Comprehensive Optometry</h3>
               <p className="body-text mb-6">
                 A full-spectrum vision and eye health evaluation conducted by certified professionals to detect early warning signs of common conditions.
               </p>
               <ul className="space-y-3 font-sans text-primary/80 text-sm mt-auto w-full">
                  {['Slit-lamp examination', 'Intraocular pressure check', 'Retinal analysis'].map((item, i) => (
                     <li key={i} className="flex gap-3 items-center border-b border-slate-100 pb-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" /> {item}
                     </li>
                  ))}
               </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="premium-card p-10 flex flex-col items-start border-t-4 border-t-accent hover:shadow-xl transition-all duration-300 group"
            >
               <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                  <Beaker className="w-8 h-8 text-accent" />
               </div>
               <h3 className="text-2xl mb-4">Contact Lens Fitting</h3>
               <p className="body-text mb-6">
                 Specialized consultations to find the perfect contact lenses for your eyes, considering tear film, corneal topography, and lifestyle.
               </p>
               <ul className="space-y-3 font-sans text-primary/80 text-sm mt-auto w-full">
                  {['Soft & Rigid Gas Permeable', 'Toric lenses for astigmatism', 'Handling & care tutorials'].map((item, i) => (
                     <li key={i} className="flex gap-3 items-center border-b border-slate-100 pb-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" /> {item}
                     </li>
                  ))}
               </ul>
            </motion.div>

            {/* Service 4 */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="premium-card p-10 flex flex-col items-start border-t-4 border-t-accent hover:shadow-xl transition-all duration-300 group"
            >
               <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                  <Stethoscope className="w-8 h-8 text-accent" />
               </div>
               <h3 className="text-2xl mb-4">Pediatric Eye Care</h3>
               <p className="body-text mb-6">
                 Gentle, engaging, and specialized vision care tailored for children to ensure optimal visual development during their foundational years.
               </p>
               <ul className="space-y-3 font-sans text-primary/80 text-sm mt-auto w-full">
                  {['Myopia management', 'Binocular vision assessment', 'Durable kids eyewear options'].map((item, i) => (
                     <li key={i} className="flex gap-3 items-center border-b border-slate-100 pb-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" /> {item}
                     </li>
                  ))}
               </ul>
            </motion.div>

         </div>
      </section>

    </main>
  );
};

export default EyeCareServices;
