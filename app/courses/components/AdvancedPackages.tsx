'use client';

import { Badge } from "@/app/components/ui/badge";
import { motion } from "framer-motion";
import { CheckCircle2 } from 'lucide-react';
import { fadeInUp } from "./utils";
import { CoursePackage, certificationDescriptions, certificationCodes } from "./types";

const advancedPackages: CoursePackage[] = [
  { title: "Azure + AI + Security", certs: ["Cloud", "AI", "SC"] },
  { title: "Azure + AI + Data", certs: ["Cloud", "AI", "DP"] },
  { title: "Azure + AI + Power Platform", certs: ["Cloud", "AI", "PL"] },
  { title: "Azure + AI + Microsoft 365", certs: ["Cloud", "AI", "MS"] }
];

export function AdvancedPackages() {
  return (
    <motion.section
      variants={fadeInUp}
      initial="initial"
      animate="animate"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif text-white mb-4">
          Advanced Certification Packages
        </h2>
        <p className="text-gray-400 text-lg">
          Specialized combinations for focused career paths
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {advancedPackages.map((package_, index) => (
          <motion.div
            key={index}
            className="relative"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="backdrop-blur-sm bg-gray-900 border border-gray-800 rounded-xl p-6 text-white shadow-lg h-full flex flex-col">
              <div className="flex-grow space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-100 text-gray-900 font-medium">
                    Advanced Package
                  </Badge>
                  <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm font-medium">3 Week Program</span>
                </div>
                
                <h3 className="text-xl font-serif text-white">{package_.title}</h3>
                
                <ul className="space-y-2">
                  {package_.certs.map((cert) => (
                    <li key={cert} className="flex items-center space-x-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      <span>{certificationDescriptions[cert]}<span className="text-blue-400">{certificationCodes[cert]}</span></span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-800">
                <span className="text-2xl font-serif text-white block mb-4">$3,499 USD</span>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors border border-gray-700"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 