'use client';

import { Badge } from "@/app/components/ui/badge";
import { 
  Info, 
  Linkedin, 
  FileText, 
  GraduationCap, 
  Users, 
  Network,
  ClipboardCheck,
  Users2,
  Target,
  Building2,
  CheckCircle2
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";
import { motion } from "framer-motion";

type CertType = 'Cloud' | 'AI' | 'SC' | 'DP' | 'PL' | 'MS';

interface CoursePackage {
  title: string;
  certs: CertType[];
}

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const commonFeatures: Feature[] = [
  {
    title: "LinkedIn Profile",
    description: "Learn professional LinkedIn strategies and best practices to create an impactful profile that attracts recruiters and opportunities",
    icon: "Linkedin"
  },
  {
    title: "Resume Review",
    description: "Comprehensive resume review and optimization to align with industry standards",
    icon: "FileText"
  },
  {
    title: "CMU Degree Program Insights",
    description: "In-depth exploration of CMU's degree programs with detailed insights from Program Directors",
    icon: "GraduationCap"
  },
  {
    title: "CMU Admissions Guide",
    description: "Direct guidance from CMU admissions committee members on application strategy",
    icon: "ClipboardCheck"
  },
  {
    title: "Silicon Valley Networking Events",
    description: "Exclusive access to Silicon Valley tech meetups, conferences, and industry networking events",
    icon: "Network"
  },
  {
    title: "CMU Student and Faculty Connections",
    description: "Direct networking opportunities with current CMU students and distinguished faculty members",
    icon: "Users"
  }
];

const expertFeatures: Feature[] = [
  {
    title: "LORs from Microsoft Employees",
    description: "Receive personalized letters of recommendation for university admissions from Microsoft senior engineers and industry leaders, highlighting your potential for graduate studies",
    icon: "FileText"
  },
  {
    title: "1:1 Microsoft Executive Mentoring",
    description: "Exclusive access to three personalized 30-minute mentoring sessions with Microsoft employees from our mentorship network, focusing on career guidance, technical expertise, and professional development",
    icon: "Users2"
  },
  {
    title: "Microsoft Career Opportunity",
    description: "Receive a direct internal referral for a position at Microsoft through our professional network, enhancing your application for roles that match your skills and experience",
    icon: "Target"
  },
  {
    title: "Elite Interview Preparation Program",
    description: "Comprehensive interview preparation package including three mock interviews with Microsoft engineers, detailed feedback sessions, and personalized strategies for technical and behavioral questions",
    icon: "Building2"
  }
];

const certificationDescriptions: Record<CertType, string> = {
  Cloud: "Microsoft Azure Fundamentals ",
  AI: "Microsoft Azure AI Fundamentals ",
  SC: "Microsoft Security Fundamentals ",
  DP: "Microsoft Azure Data Fundamentals ",
  PL: "Microsoft Power Platform Fundamentals ",
  MS: "Microsoft 365 Fundamentals "
};

const certificationCodes: Record<CertType, string> = {
  Cloud: "(AZ-900)",
  AI: "(AI-900)",
  SC: "(SC-900)",
  DP: "(DP-900)",
  PL: "(PL-900)",
  MS: "(MS-900)"
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function getIcon(iconName: string, className: string = "w-5 h-5") {
  const icons: { [key: string]: React.ComponentType<{ className?: string }> } = {
    Linkedin,
    FileText,
    ClipboardCheck,
    GraduationCap,
    Network,
    Users,
    Users2,
    Target,
    Building2,
    CheckCircle2
  };
  
  const IconComponent = icons[iconName];
  return IconComponent ? <IconComponent className={className} /> : null;
}

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
          <h1 className="text-5xl font-serif text-white mb-4">
            Professional Certification Programs
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            Advance your career with industry-recognized Microsoft certifications. 
            Join our distinguished alumni network of technology leaders.
          </p>
        </motion.div>

        {/* Premium Package */}
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
                        <motion.li 
                          key={index}
                          className="flex items-start space-x-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700"
                        >
                          <div className="flex-shrink-0 p-2 rounded-lg bg-gray-700">
                            {getIcon(feature.icon, "w-5 h-5 text-blue-200")}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium text-white">
                                {feature.title}
                              </h3>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <Info className="w-4 h-4 text-gray-400" />
                                  </TooltipTrigger>
                                  <TooltipContent 
                                    side="bottom"
                                    className="max-w-xs bg-white border border-gray-200 text-gray-900 p-4 rounded-lg shadow-xl"
                                  >
                                    <p className="text-sm">{feature.description}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                          </div>
                        </motion.li>
                      ))}
                    </motion.ul>
                  ))}
                </motion.div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-serif text-white">$2,499 USD</span>
                    <p className="text-gray-400 mt-2">One-time payment • Lifetime access</p>
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

        {/* Expert Packages */}
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
            {([
              { title: "Azure + AI + Data + Power Platform", certs: ["Cloud", "AI", "DP", "PL"] },
              { title: "Azure + AI + Microsoft 365 + Security", certs: ["Cloud", "AI", "MS", "SC"] }
            ] as CoursePackage[]).map((package_, index) => (
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
                          <div 
                            key={index}
                            className="p-4 rounded-lg bg-gray-800/50 border border-gray-700"
                          >
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 p-2 rounded-lg bg-gray-700">
                                {getIcon(feature.icon, "w-5 h-5 text-blue-200")}
                              </div>
                              <div>
                                <h5 className="font-medium text-white">{feature.title}</h5>
                                <p className="text-sm text-gray-400 mt-1">{feature.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-800 flex items-center justify-between">
                      <div>
                        <span className="text-3xl font-serif text-white">
                          $4,499 USD
                        </span>
                        <p className="text-gray-400 mt-2">One-time payment • Lifetime access</p>
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

        {/* Advanced Packages */}
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
            {([
              { title: "Azure + AI + Security", certs: ["Cloud", "AI", "SC"] },
              { title: "Azure + AI + Data", certs: ["Cloud", "AI", "DP"] },
              { title: "Azure + AI + Power Platform", certs: ["Cloud", "AI", "PL"] },
              { title: "Azure + AI + Microsoft 365", certs: ["Cloud", "AI", "MS"] }
            ] as CoursePackage[]).map((package_, index) => (
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

          {/* Common Features */}
          <div className="flex flex-wrap gap-4 justify-center">
            {commonFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gray-900 border border-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2">
                  {getIcon(feature.icon, "w-4 h-4 text-blue-200")}
                  <span>{feature.title}</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="w-4 h-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent 
                        side="bottom"
                        className="max-w-xs bg-white border border-gray-200 text-gray-900 p-4 rounded-lg shadow-xl"
                      >
                        <p className="text-sm">{feature.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
