'use client';

import { Badge } from "@/app/components/ui/badge";
import { motion } from "framer-motion";
import { CheckCircle2 } from 'lucide-react';
import { expertFeatures } from "./features";
import { fadeInUp } from "./utils";
import { FeatureCard } from "./FeatureCard";
import { CoursePackage, certificationDescriptions, certificationCodes } from "./types";

const expertPackages: CoursePackage[] = [
  { title: "Azure + AI + Data + Power Platform", certs: ["Cloud", "AI", "DP", "PL"] },
  { title: "Azure + AI + Microsoft 365 + Security", certs: ["Cloud", "AI", "MS", "SC"] }
];

export function ExpertPackages() {
  return (
    <motion.section 
      className="mb-24"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif text-white mb-4">
          Expert Microsoft Certification Packages
        </h2>
        <p className="text-gray-400 text-lg">
          Advanced certifications with exclusive Microsoft benefits
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {expertPackages.map((package_, index) => (
          <motion.div
            key={index}
            className="relative"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="backdrop-blur-sm bg-gray-900 border border-gray-800 rounded-xl p-8 text-white shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 flex-wrap gap-y-2">
                  <Badge className="bg-gray-100 text-gray-900 px-4 py-1 font-medium">
                    Expert Package
                  </Badge>
                  <span className="px-4 py-1 rounded-full bg-gray-800 text-gray-300 text-sm font-medium">4 Week Program</span>
                </div>

                <h3 className="text-2xl font-serif text-white">
                  {package_.title}
                </h3>

                <ul className="space-y-3">
                  {package_.certs.map((cert) => (
                    <li key={cert} className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                      <span>{certificationDescriptions[cert]}<span className="text-blue-400">{certificationCodes[cert]}</span></span>
                    </li>
                  ))}
                </ul>

                {/* Expert Features */}
                <div className="mt-8 space-y-6">
                  <h4 className="font-serif text-lg text-white">Expert Exclusive Benefits:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {expertFeatures.map((feature, index) => (
                      <FeatureCard key={index} feature={feature} variant="expert" />
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-serif text-white">
                      $4,499 USD
                    </span>
                    <p className="text-gray-400 mt-2">Including 4 certifications exam fees</p>
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
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 