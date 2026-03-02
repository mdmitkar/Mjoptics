import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, CheckCircle } from 'lucide-react';

const AppointmentBooking = () => {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({
    service: '',
    location: '',
    date: '',
    time: ''
  });

  const services = [
    { id: 'comprehensive', name: 'Comprehensive Eye Test', desc: 'Full vision & health assessment' },
    { id: 'contact_lens', name: 'Contact Lens Fitting', desc: 'Specialized fitting and trial' },
    { id: 'styling', name: 'Eyewear Styling', desc: 'Personalized frame consultation' },
    { id: 'pediatric', name: 'Pediatric Care', desc: 'Gentle exam for children' }
  ];

  const locations = [
    { id: 'kalyan', name: 'Kalyan Flagship', address: 'Shop 4, Vasant Vihar' },
    { id: 'bhiwandi', name: 'Bhiwandi Branch', address: 'Shop 2, Arihant Plaza' }
  ];

  const timeSlots = ['10:30 AM', '11:30 AM', '01:00 PM', '03:00 PM', '04:30 PM', '06:00 PM', '07:30 PM'];

  const handleSelect = (field, value) => {
    setSelection(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <main className="bg-secondary min-h-screen pt-24 pb-20 selection:bg-accent/30 selection:text-primary">
      
      {/* Header */}
      <section className="container-custom py-16 lg:py-24 text-center">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
         >
           <h1 className="mb-6 leading-tight">Book Your <br/><span className="text-secondary-dark relative">Appointment
              <span className="absolute bottom-1 left-0 w-full h-3 bg-accent/20 -z-10 transform -rotate-1 rounded-sm"></span>
             </span>
           </h1>
           <p className="subheading max-w-2xl mx-auto">
             Reserve your dedicated time with our specialists. We prioritize unhurried, comprehensive care for every patient.
           </p>
         </motion.div>
      </section>

      {/* Booking Widget */}
      <section className="container-custom max-w-4xl border-x-4 border-x-white ring ring-slate-100">
         <div className="premium-card p-8 lg:p-12 relative overflow-hidden bg-white shadow-2xl">
            
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
                <motion.div 
                   className="h-full bg-accent"
                   initial={{ width: "25%" }}
                   animate={{ width: `${(step / 4) * 100}%` }}
                   transition={{ duration: 0.5, ease: "easeInOut" }}
                />
            </div>

            {/* Step Indicators */}
            <div className="flex justify-between items-center mb-12 relative z-10 pt-4 px-2">
               {['Service', 'Location', 'Time', 'Details'].map((label, idx) => (
                  <div key={label} className="flex flex-col items-center gap-2">
                     <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-sm font-bold transition-colors duration-300 ${
                        step > idx + 1 ? 'bg-primary text-secondary' : 
                        step === idx + 1 ? 'bg-accent text-secondary' : 
                        'bg-slate-100 text-slate-400'
                     }`}>
                        {step > idx + 1 ? <CheckCircle className="w-4 h-4" /> : idx + 1}
                     </div>
                     <span className={`text-xs font-mono tracking-wider uppercase hidden md:block ${
                        step >= idx + 1 ? 'text-primary font-bold' : 'text-slate-400'
                     }`}>
                        {label}
                     </span>
                  </div>
               ))}
               <div className="absolute top-[26px] left-[5%] right-[5%] h-[1px] bg-slate-200 -z-10 hidden md:block" />
            </div>

            {/* Dynamic Step Content */}
            <div className="min-h-[400px]">
               <AnimatePresence mode="wait">
                  
                  {step === 1 && (
                     <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                     >
                        <h3 className="text-2xl mb-8">Select a Service</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           {services.map(s => (
                              <button
                                 key={s.id}
                                 onClick={() => handleSelect('service', s.id)}
                                 className={`text-left p-6 rounded-premium border transition-all duration-300 ${
                                    selection.service === s.id 
                                    ? 'border-accent bg-accent/5 ring-1 ring-accent' 
                                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                                 }`}
                              >
                                 <h4 className="text-lg font-medium text-primary mb-1">{s.name}</h4>
                                 <p className="font-sans text-sm text-slate-500">{s.desc}</p>
                              </button>
                           ))}
                        </div>
                     </motion.div>
                  )}

                  {step === 2 && (
                     <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                     >
                        <h3 className="text-2xl mb-8">Choose Location</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           {locations.map(l => (
                              <button
                                 key={l.id}
                                 onClick={() => handleSelect('location', l.id)}
                                 className={`text-left p-6 rounded-premium border transition-all duration-300 ${
                                    selection.location === l.id 
                                    ? 'border-accent bg-accent/5 ring-1 ring-accent' 
                                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                                 }`}
                              >
                                 <h4 className="text-lg font-medium text-primary mb-1">{l.name}</h4>
                                 <p className="font-sans text-sm text-slate-500">{l.address}</p>
                              </button>
                           ))}
                        </div>
                     </motion.div>
                  )}

                  {step === 3 && (
                     <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                     >
                        <h3 className="text-2xl mb-8">Date & Time</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div>
                              <label className="block font-mono text-sm tracking-widest text-slate-500 uppercase font-bold mb-4">Select Date</label>
                              <div className="relative">
                                 <input 
                                    type="date" 
                                    className="w-full pl-12 pr-4 py-4 rounded-premium border border-slate-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white text-primary font-sans cursor-pointer"
                                    onChange={(e) => handleSelect('date', e.target.value)}
                                    value={selection.date}
                                 />
                                 <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-accent w-5 h-5 pointer-events-none" />
                              </div>
                           </div>
                           
                           <div>
                              <label className="block font-mono text-sm tracking-widest text-slate-500 uppercase font-bold mb-4">Select Time</label>
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                 {timeSlots.map(time => (
                                    <button
                                       key={time}
                                       onClick={() => handleSelect('time', time)}
                                       className={`py-3 rounded-[8px] border font-sans text-sm transition-all duration-300 ${
                                          selection.time === time 
                                          ? 'border-accent bg-accent text-secondary font-medium shadow-md' 
                                          : 'border-slate-200 bg-white text-primary hover:border-slate-300 hover:bg-slate-50'
                                       }`}
                                    >
                                       {time}
                                    </button>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </motion.div>
                  )}

                  {step === 4 && (
                     <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                     >
                        <h3 className="text-2xl mb-8">Paitent Details</h3>
                        <div className="bg-slate-50 p-6 rounded-premium border border-slate-100 mb-8 border-l-4 border-l-accent">
                           <p className="font-sans text-sm text-primary/80 mb-2">
                              <strong>Service:</strong> {services.find(s => s.id === selection.service)?.name || 'Not selected'}
                           </p>
                           <p className="font-sans text-sm text-primary/80 mb-2">
                              <strong>Location:</strong> {locations.find(l => l.id === selection.location)?.name || 'Not selected'}
                           </p>
                           <p className="font-sans text-sm text-primary/80">
                              <strong>Date & Time:</strong> {selection.date || 'Not selected'} at {selection.time || 'Not selected'}
                           </p>
                        </div>

                        <form className="space-y-4 font-sans grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                           <div className="md:col-span-2">
                              <label className="block text-sm mb-2 text-slate-600">Full Name</label>
                              <div className="relative">
                                 <input type="text" placeholder="John Doe" className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-[8px] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all bg-white" />
                                 <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                              </div>
                           </div>
                           <div>
                              <label className="block text-sm mb-2 text-slate-600">Email Address</label>
                              <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 border border-slate-200 rounded-[8px] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all bg-white" />
                           </div>
                           <div>
                              <label className="block text-sm mb-2 text-slate-600">Phone Number</label>
                              <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 border border-slate-200 rounded-[8px] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all bg-white" />
                           </div>
                        </form>
                     </motion.div>
                  )}

               </AnimatePresence>
            </div>

            {/* Navigation Actions */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-slate-100">
               <button 
                 onClick={prevStep}
                 disabled={step === 1}
                 className={`btn-outline px-8 py-3 ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
               >
                 Back
               </button>
               
               {step < 4 ? (
                 <button 
                   onClick={nextStep}
                   className="btn-primary"
                   disabled={
                      (step === 1 && !selection.service) || 
                      (step === 2 && !selection.location) ||
                      (step === 3 && (!selection.date || !selection.time))
                   }
                 >
                   Continue
                 </button>
               ) : (
                 <button className="btn-primary flex items-center gap-2">
                   <Clock className="w-4 h-4" /> Confirm Booking
                 </button>
               )}
            </div>

         </div>
      </section>

    </main>
  );
};

export default AppointmentBooking;
