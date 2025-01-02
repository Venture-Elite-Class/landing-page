'use client';

import { FaCertificate, FaLaptopCode, FaUniversity, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';

const highlights = [
  {
    icon: FaCertificate,
    text: "2 Microsoft Certifications Guaranteed"
  },
  {
    icon: FaLaptopCode,
    text: "Silicon Valley Tech Exposure"
  },
  {
    icon: FaUniversity,
    text: "CMU Campus Experience"
  },
  {
    icon: FaUsers,
    text: "Limited to 40 Students/Batch"
  }
];

const Description = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center min-h-[50vh] w-full max-w-7xl mx-auto px-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 0.2 * index)}
            className="flex flex-col items-center text-center gap-4 p-6 hover:scale-105 transition-transform duration-300"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <item.icon className="w-12 h-12 text-gradient-1" />
            </motion.div>
            <p className="text-lg font-medium">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Description;