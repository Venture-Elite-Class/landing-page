'use client';

import { motion } from "framer-motion";
import { PremiumPackage } from "./components/PremiumPackage";
import { ExpertPackages } from "./components/ExpertPackages";
import { AdvancedPackages } from "./components/AdvancedPackages";
import { CommonFeaturesList } from "./components/CommonFeaturesList";

export default function CoursesPage() {
  return (
    <main className="min-h-screen py-12 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col items-center justify-center mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif text-white my-4 mt-10">
            Professional Certification Programs
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            Advance your career with industry-recognized Microsoft certifications. 
            Join our distinguished alumni network of technology leaders.
          </p>
        </motion.div>

        <PremiumPackage />
        <ExpertPackages />
        <AdvancedPackages />
        <CommonFeaturesList />
      </div>
    </main>
  );
}
