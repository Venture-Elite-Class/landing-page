'use client';

import { CTAButton } from '@/components/ui/CTAButton';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';

export default function Hero() {
  return (
    <motion.main
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-8 items-center justify-center min-h-[calc(100vh-40px)] pointer-events-auto relative"
    >
      <motion.div 
        variants={fadeIn('down', 0.3)}
        className="flex flex-col gap-4 text-center"
      >
        <h1 className="text-6xl md:text-7xl font-bold serif text-center max-w-7xl">
          Silicon Valley Tech Excellence Program at <span className="text-gradient-1 serif">Carnegie Mellon University</span>
        </h1>
        <motion.p 
          variants={fadeIn('up', 0.5)}
          className="text-xl md:text-2xl max-w-3xl mx-auto"
        >
          2-Week Intensive Training & Certification Program at Carnegie Mellon University Silicon Valley Campus
        </motion.p>
      </motion.div>
      <motion.div 
        variants={fadeIn('up', 0.7)}
        className="flex content-center items-center gap-4"
      >
        <CTAButton>Apply Now</CTAButton>
        <CTAButton variant="outline">Learn More</CTAButton>
      </motion.div>
    </motion.main>
  );
} 