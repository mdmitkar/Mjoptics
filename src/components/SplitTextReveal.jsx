import React from 'react';
import { motion } from 'framer-motion';

const SplitTextReveal = ({ text, className }) => {
    return (
        <span className={`inline-block overflow-hidden ${className}`}>
            {text.split('').map((char, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                        duration: 0.8, 
                        ease: [0.33, 1, 0.68, 1], // Custom cubic-bezier for snappy, satisfying reveals
                        delay: i * 0.03 
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </span>
    );
};

export default SplitTextReveal;
