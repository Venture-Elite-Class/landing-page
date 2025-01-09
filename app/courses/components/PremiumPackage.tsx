'use client';

import { Badge } from "@/app/components/ui/badge";
import { motion } from "framer-motion";
import { commonFeatures } from "./features";
import { fadeInUp, staggerChildren } from "./utils";
import { FeatureCard } from "./FeatureCard";

export function PremiumPackage() {
  return (
    <motion.section 
      className="mb-24"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
    >
      <div className="relative">
        <div className="backdrop-blur-sm bg-gray-900 border border-gray-800 rounded-xl p-8 text-white shadow-xl">
          <div className="space-y-8">
            <div className="flex items-center space-x-3 flex-wrap gap-y-2">
              <Badge className="bg-blue-100 text-blue-900 px-4 py-1 font-medium">Premium Package</Badge>
              <span className="px-4 py-1 rounded-full bg-gray-800 text-gray-300 text-sm font-medium">2 Week Program</span>
            </div>
            <div>
              <h2 className="text-3xl font-serif text-white mb-3">Azure Cloud + AI Fundamentals</h2>
              <p className="text-lg text-gray-400">
                Master Microsoft Azure and AI with our most comprehensive certification package
              </p>
            </div>

            {/* Features Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
              variants={staggerChildren}
            >
              {[...Array(3)].map((_, colIndex) => (
                <motion.ul 
                  key={colIndex} 
                  className="space-y-6"
                  variants={fadeInUp}
                >
                  {commonFeatures.slice(colIndex * 2, colIndex * 2 + 2).map((feature, index) => (
                    <FeatureCard key={index} feature={feature} />
                  ))}
                </motion.ul>
              ))}
            </motion.div>

            <div className="mt-12 pt-8 border-t border-gray-800 flex items-center justify-between">
              <div>
                <span className="text-3xl font-serif text-white">$2,499 USD</span>
                <p className="text-gray-400 mt-2">Including 2 certifications exam fees</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                Enroll Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
} 