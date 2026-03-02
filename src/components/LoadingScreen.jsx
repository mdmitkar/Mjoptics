import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] bg-secondary flex flex-col items-center justify-center p-6"
        >
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Pulsing background glow */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute inset-0 bg-accent rounded-full blur-3xl"
            />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Vision Focus Ring */}
              <svg viewBox="0 0 100 100" className="w-48 h-48 mb-6">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#ab2330"
                  strokeWidth="0.5"
                  fill="none"
                  initial={{ pathLength: 0, rotate: -90 }}
                  animate={{ pathLength: 1, rotate: 270 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                
                {/* Focus brackets */}
                <motion.path
                  d="M30 20 H20 V30"
                  stroke="#ab2330"
                  strokeWidth="2"
                  fill="none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                />
                <motion.path
                  d="M70 20 H80 V30"
                  stroke="#ab2330"
                  strokeWidth="2"
                  fill="none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                />
                <motion.path
                  d="M30 80 H20 V70"
                  stroke="#ab2330"
                  strokeWidth="2"
                  fill="none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 }}
                />
                <motion.path
                  d="M70 80 H80 V70"
                  stroke="#ab2330"
                  strokeWidth="2"
                  fill="none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 }}
                />

                {/* Animated Glasses Drawing */}
                <motion.path
                  d="M35 50 C35 42 45 42 45 50 C45 58 35 58 35 50 M55 50 C55 42 65 42 65 50 C65 58 55 58 55 50 M45 50 Q50 45 55 50"
                  stroke="#ab2330"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                />
              </svg>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="flex flex-col items-center"
              >
                <h2 className="font-mono text-xl tracking-[0.3em] font-bold text-primary mb-1">
                  MJ <span className="text-accent">OPTICS</span>
                </h2>
                <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 1, 0.3]
                        }}
                        transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                        className="w-1 h-1 bg-accent rounded-full"
                      />
                    ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom vision text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.8 }}
            className="absolute bottom-12 font-mono text-[10px] tracking-widest text-primary uppercase"
          >
            Redefining your perspective
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
