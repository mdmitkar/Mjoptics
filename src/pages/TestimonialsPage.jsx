import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  { id: 1, name: "Dr. Ananya Iyer", role: "Surgeon", text: "Finding frames that are both professional and uniquely stylish used to be a chore. MJ Optics transformed it into a delightful luxury experience. The attention to detail is remarkable." },
  { id: 2, name: "Rahul Deshmukh", role: "Architect", text: "As an architect, I appreciate clean lines and structural integrity. The curated collection here is nothing short of exceptional. Their experts truly understand facial geometry." },
  { id: 3, name: "Meera Kapoor", role: "Entrepreneur", text: "I have visited luxury boutiques across Europe, but the warmth and bespoke service I received at MJ Optics right here in Kalyan is unmatched. Simply brilliant." },
  { id: 4, name: "Vikram Malhotra", role: "Creative Director", text: "My eyeglasses are a core part of my identity. The styling session helped me discover a brand I had never considered, and the compliments haven't stopped since." },
  { id: 5, name: "Sunita Reddy", role: "Author", text: "Beyond the stunning collection, it's the meticulous eye-testing process that won my trust. I finally found lenses that banish screening fatigue completely." },
  { id: 6, name: "Karan Johar (Local Client)", role: "Designer", text: "A sanctuary for eyewear lovers. The ambiance, the coffee, the unhurried styling advice—every touchpoint screams premium luxury." }
];

const TestimonialsPage = () => {
  return (
    <main className="min-h-screen relative pt-40 pb-32 selection:bg-accent/30 selection:text-primary">
      {/* Background Image with warm overlay */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop" 
            alt="Boutique Atmosphere" 
            className="w-full h-full object-cover grayscale opacity-20"
        />
        <div className="absolute inset-0 bg-secondary/95 backdrop-blur-sm" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20 md:mb-32"
        >
          <span className="text-accent tracking-[0.2em] text-[10px] uppercase font-bold mb-4 block">Client Stories</span>
          <h1 className="text-5xl lg:text-7xl font-serif text-primary mb-6">Client Stories</h1>
          <p className="text-primary/95 font-sans leading-relaxed text-sm max-w-xl mx-auto">
            Don't just take our word for it. Discover what our patrons have to say about the MJ Optics boutique experience.
          </p>
        </motion.div>

        {/* Stacked Cards */}
        <div className="max-w-4xl mx-auto space-y-12 lg:space-y-24">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (idx % 2) * 0.1 }}
              className={`flex flex-col md:flex-row gap-8 lg:gap-16 items-start ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="hidden md:block w-32 shrink-0 relative">
                <Quote className="w-24 h-24 text-accent hover:rotate-12 transition-transform duration-500 opacity-20 absolute -top-8 -left-4" />
              </div>

              <div className="bg-white p-10 lg:p-14 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] border border-white/50 relative overflow-hidden group">
                {/* Subtle Hover Reveal */}
                <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                
                <p className="font-serif text-xl md:text-2xl text-primary leading-relaxed mb-8 relative z-10 italic">
                  "{testimonial.text}"
                </p>
                <div className="pt-6 border-t border-primary/10">
                  <h4 className="font-sans font-bold text-primary uppercase tracking-widest text-sm">{testimonial.name}</h4>
                  <span className="font-sans text-primary/80 font-bold text-xs tracking-widest uppercase">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TestimonialsPage;
