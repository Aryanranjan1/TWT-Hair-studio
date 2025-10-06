
'use client';

import { motion } from 'framer-motion';

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
