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
  Building2
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

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
    Building2
  };
  
  const IconComponent = icons[iconName];
  return IconComponent ? <IconComponent className={className} /> : null;
}

export default function CoursesPage() {
  return (
    <main className="min-h-screen py-12 px-6 md:px-12">
      {/* Premium Package */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 -z-10"></div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Badge className="bg-white text-blue-600">Premium Package</Badge>
              <span className="px-3 py-1 rounded-full bg-white/20 text-sm font-medium backdrop-blur-sm">2 Week Program</span>
            </div>
            <h2 className="text-3xl font-bold">Azure Cloud + AI Fundamentals</h2>
            <p className="text-lg opacity-90">
              Master Microsoft Azure and AI with certifications in {certificationDescriptions.Cloud}<span className="whitespace-nowrap">{certificationCodes.Cloud}</span> and {certificationDescriptions.AI}<span className="whitespace-nowrap">{certificationCodes.AI}</span>
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Features:</h3>
              <div className="grid grid-cols-3 gap-6">
                {/* Column 1: LinkedIn and Resume */}
                <ul className="space-y-3">
                  {commonFeatures.slice(0, 2).map((feature, index) => (
                    <li key={index} className="flex items-start min-h-[3rem]">
                      {getIcon(feature.icon, "w-4 h-4 mt-0.5")}
                      <span className="flex-1 ml-2 mr-0.5">{feature.title}</span>
                      <TooltipProvider>
                        <Tooltip delayDuration={200}>
                          <TooltipTrigger asChild>
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-help">
                              <Info className="w-3.5 h-3.5" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent 
                            side="bottom" 
                            align="center"
                            sideOffset={5}
                            className="backdrop-blur-md bg-white/80 text-gray-900 border border-white/20 shadow-lg p-3 max-w-[280px] rounded-lg"
                          >
                            <p className="text-sm leading-relaxed">{feature.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
                {/* Column 2: CMU Degree and Admissions */}
                <ul className="space-y-3">
                  {commonFeatures.slice(2, 4).map((feature, index) => (
                    <li key={index} className="flex items-start min-h-[3rem]">
                      {getIcon(feature.icon, "w-4 h-4 mt-0.5")}
                      <span className="flex-1 ml-2 mr-0.5">{feature.title}</span>
                      <TooltipProvider>
                        <Tooltip delayDuration={200}>
                          <TooltipTrigger asChild>
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-help">
                              <Info className="w-3.5 h-3.5" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent 
                            side="bottom" 
                            align="center"
                            sideOffset={5}
                            className="backdrop-blur-md bg-white/80 text-gray-900 border border-white/20 shadow-lg p-3 max-w-[280px] rounded-lg"
                          >
                            <p className="text-sm leading-relaxed">{feature.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
                {/* Column 3: Silicon Valley and Faculty */}
                <ul className="space-y-3">
                  {commonFeatures.slice(4, 6).map((feature, index) => (
                    <li key={index} className="flex items-start min-h-[3rem]">
                      {getIcon(feature.icon, "w-4 h-4 mt-0.5")}
                      <span className="flex-1 ml-2 mr-0.5">{feature.title}</span>
                      <TooltipProvider>
                        <Tooltip delayDuration={200}>
                          <TooltipTrigger asChild>
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-help">
                              <Info className="w-3.5 h-3.5" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent 
                            side="bottom" 
                            align="center"
                            sideOffset={5}
                            className="backdrop-blur-md bg-white/80 text-gray-900 border border-white/20 shadow-lg p-3 max-w-[280px] rounded-lg"
                          >
                            <p className="text-sm leading-relaxed">{feature.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/40">
              <span className="text-3xl font-bold">$2,499 USD</span>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Packages */}
      <section className="mb-16">
        <div className="inline-block backdrop-blur-md bg-gradient-to-r from-gray-200/30 via-gray-100/30 to-gray-200/30 border border-white/20 rounded-lg px-6 py-3 shadow-xl mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-600 to-gray-400 inline-block text-transparent bg-clip-text">Advanced Microsoft Certification Packages</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {([
            { title: "Azure + AI + Security", certs: ["Cloud", "AI", "SC"] },
            { title: "Azure + AI + Data", certs: ["Cloud", "AI", "DP"] },
            { title: "Azure + AI + Power Platform", certs: ["Cloud", "AI", "PL"] },
            { title: "Azure + AI + Microsoft 365", certs: ["Cloud", "AI", "MS"] }
          ] as CoursePackage[]).map((package_, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all relative overflow-hidden flex flex-col h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 -z-10"></div>
              <div className="flex-grow relative z-10">
                <div className="flex flex-wrap items-start gap-2">
                  <Badge className="bg-blue-100 text-blue-600 whitespace-nowrap">Advanced Package</Badge>
                  <span className="px-3 py-1 rounded-full bg-blue-100/80 text-blue-600 text-sm font-medium backdrop-blur-sm whitespace-nowrap">3 Week Program</span>
                </div>
                <h3 className="text-xl font-bold mt-4">{package_.title}</h3>
                <div className="mt-4 space-y-2">
                  {package_.certs.map((cert) => (
                    <p key={cert} className="text-sm text-gray-800 flex">
                      <span className="mr-2 flex-shrink-0">•</span>
                      <span>{certificationDescriptions[cert]}<span className="whitespace-nowrap">{certificationCodes[cert]}</span></span>
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200/30">
                <span className="text-2xl font-bold text-gray-800 block">$3,499 USD</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {commonFeatures.map((feature, index) => (
            <div key={index} className="backdrop-blur-md bg-blue-50/90 border border-blue-200/50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium flex items-center group">
              {getIcon(feature.icon, "w-4 h-4")}
              <span className="mx-2">{feature.title}</span>
              <TooltipProvider>
                <Tooltip delayDuration={200}>
                  <TooltipTrigger asChild>
                    <div className="w-5 h-5 rounded-full bg-blue-100/80 backdrop-blur-sm flex items-center justify-center hover:bg-blue-200/80 transition-colors cursor-help">
                      <Info className="w-3.5 h-3.5" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent 
                    side="bottom" 
                    align="center"
                    sideOffset={5}
                    className="backdrop-blur-md bg-white/80 text-gray-900 border border-white/20 shadow-lg p-3 max-w-[280px] rounded-lg"
                  >
                    <p className="text-sm leading-relaxed">{feature.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>
      </section>

      {/* Expert Packages */}
      <section>
        <div className="inline-block backdrop-blur-md bg-gradient-to-r from-yellow-200/30 via-amber-100/30 to-yellow-200/30 border border-white/20 rounded-lg px-6 py-3 shadow-xl mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-500 inline-block text-transparent bg-clip-text">Expert Microsoft Certification Packages</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {([
            { title: "Azure + AI + Data + Power Platform", certs: ["Cloud", "AI", "DP", "PL"] },
            { title: "Azure + AI + Microsoft 365 + Security", certs: ["Cloud", "AI", "MS", "SC"] }
          ] as CoursePackage[]).map((package_, index) => (
            <div key={index} className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl shadow-xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-blue-600/90 -z-10"></div>
              <div className="flex-grow relative z-10">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-white text-purple-600">Expert Package</Badge>
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">4 Week Program</span>
                </div>
                <h3 className="text-2xl font-bold mt-4">{package_.title}</h3>
                <div className="mt-4 space-y-2">
                  {package_.certs.map((cert) => (
                    <p key={cert} className="text-sm opacity-90 flex">
                      <span className="mr-2 flex-shrink-0">•</span>
                      <span>{certificationDescriptions[cert]}<span className="whitespace-nowrap">{certificationCodes[cert]}</span></span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <h4 className="font-semibold mb-2">All Features Included:</h4>
                <ul className="grid grid-cols-2 gap-y-6 gap-x-4 backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
                  {commonFeatures.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start min-h-[3rem]">
                      {getIcon(feature.icon, "w-4 h-4 mt-0.5")}
                      <span className="flex-1 ml-2 mr-0.5">{feature.title}</span>
                      <TooltipProvider>
                        <Tooltip delayDuration={200}>
                          <TooltipTrigger asChild>
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-help">
                              <Info className="w-3.5 h-3.5" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent 
                            side="bottom" 
                            align="center"
                            sideOffset={5}
                            className="backdrop-blur-md bg-white/80 text-gray-900 border border-white/20 shadow-lg p-3 max-w-[280px] rounded-lg"
                          >
                            <p className="text-sm leading-relaxed">{feature.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                  {commonFeatures.slice(3).map((feature, index) => (
                    <li key={index + 3} className="flex items-start min-h-[3rem]">
                      {getIcon(feature.icon, "w-4 h-4 mt-0.5")}
                      <span className="flex-1 ml-2 mr-0.5">{feature.title}</span>
                      <TooltipProvider>
                        <Tooltip delayDuration={200}>
                          <TooltipTrigger asChild>
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-help">
                              <Info className="w-3.5 h-3.5" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent 
                            side="bottom" 
                            align="center"
                            sideOffset={5}
                            className="backdrop-blur-md bg-white/80 text-gray-900 border border-white/20 shadow-lg p-3 max-w-[280px] rounded-lg"
                          >
                            <p className="text-sm leading-relaxed">{feature.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <h4 className="font-semibold mb-2">Expert Exclusive Benefits:</h4>
                <ul className="grid grid-cols-2 gap-y-6 gap-x-4 backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
                  {expertFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start min-h-[3rem]">
                      {getIcon(feature.icon, "w-4 h-4 mt-0.5")}
                      <span className="flex-1 ml-2 mr-0.5">{feature.title}</span>
                      <TooltipProvider>
                        <Tooltip delayDuration={200}>
                          <TooltipTrigger asChild>
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-help">
                              <Info className="w-3.5 h-3.5" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent 
                            side="bottom" 
                            align="center"
                            sideOffset={5}
                            className="backdrop-blur-md bg-white/80 text-gray-900 border border-white/20 shadow-lg p-3 max-w-[280px] rounded-lg"
                          >
                            <p className="text-sm leading-relaxed">{feature.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <span className="text-3xl font-bold">$4,499 USD</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
