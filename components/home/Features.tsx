'use client';

import { IconType } from 'react-icons';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, scaleIn } from '@/lib/animations';

interface FeatureCardProps {
  title: string;
  description: string[];
  Icon: IconType;
}

const FeatureCard = ({ title, description, Icon }: FeatureCardProps) => (
  <motion.div
    variants={scaleIn}
    whileHover={{ scale: 1.05 }}
    className="flex flex-col gap-4 p-6 rounded-lg backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/20 hover:border-white/40 transition-all hover:shadow-lg"
  >
    <motion.div 
      className="flex items-center gap-4"
      whileHover={{ x: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Icon className="w-8 h-8 text-white" />
      <h3 className="text-xl font-bold serif text-white">{title}</h3>
    </motion.div>
    <ul className="space-y-2">
      {description.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-gray-100 dark:text-gray-200"
        >
          {item}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const Features = () => {
  const features = [
    {
      title: "Technical Excellence",
      Icon: FaLaptopCode,
      description: [
        "Microsoft Azure (AZ-900) Certification",
        "Azure AI (AI-900) Certification",
        "Hands-on Laboratory Sessions",
        "Expert-led Training"
      ]
    },
    {
      title: "Silicon Valley Experience", 
      Icon: FaGraduationCap,
      description: [
        "CMU Silicon Valley Campus",
        "Tech Company Visits",
        "Networking Events",
        "Industry Speaker Sessions"
      ]
    },
    {
      title: "Career Advancement",
      Icon: MdWork,
      description: [
        "LinkedIn Optimization",
        "Industry Connections", 
        "Alumni Network Access",
        "Career Guidance"
      ]
    }
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full max-w-7xl mx-auto px-4 py-16"
    >
      <motion.h2
        variants={fadeIn('down', 0.3)}
        className="text-4xl font-bold text-center mb-12 serif text-white"
      >
        Transform Your Tech Career in Two Weeks
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 0.2 * index)}
          >
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Features;