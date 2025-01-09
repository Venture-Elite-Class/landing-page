import { Badge } from "@/app/components/ui/badge";
import { 
  Info, 
  Linkedin, 
  FileText, 
  GraduationCap, 
  School, 
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
    title: "CMU Admissions Guide",
    description: "Direct guidance from CMU admissions committee members on application strategy",
    icon: "ClipboardCheck"
  },
  {
    title: "CMU Degree Program Insights",
    description: "In-depth exploration of CMU's degree programs with detailed insights from Program Directors",
    icon: "GraduationCap"
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
    title: "Pro References",
    description: "Personalized letters of recommendation from industry experts",
    icon: "FileText"
  },
  {
    title: "Microsoft Mentorship",
    description: "Three 30-minute 1:1 mentorship sessions with a Microsoft Employee of choice",
    icon: "Users2"
  },
  {
    title: "Direct Referral",
    description: "Guaranteed referral for a position at Microsoft",
    icon: "Target"
  },
  {
    title: "Interview Prep",
    description: "3 comprehensive mock interview practice sessions with feedback",
    icon: "Building2"
  }
];

const certificationDescriptions: Record<CertType, string> = {
  Cloud: "Microsoft Azure Fundamentals (AZ-900)",
  AI: "Microsoft Azure AI Fundamentals (AI-900)",
  SC: "Microsoft Security Fundamentals (SC-900)",
  DP: "Microsoft Azure Data Fundamentals (DP-900)",
  PL: "Microsoft Power Platform Fundamentals (PL-900)",
  MS: "Microsoft 365 Fundamentals (MS-900)"
};

function getIcon(iconName: string, className: string = "w-5 h-5") {
  const icons: { [key: string]: React.ComponentType<any> } = {
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
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all">
          <div className="space-y-4">
            <Badge className="bg-white text-blue-600">Premium Package</Badge>
            <h2 className="text-3xl font-bold">Azure Cloud + AI Fundamentals</h2>
            <p className="text-lg opacity-90">
              Master Microsoft Azure and AI with certifications in {certificationDescriptions.Cloud} and {certificationDescriptions.AI}
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Features:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {commonFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    {getIcon(feature.icon, "w-5 h-5")}
                    <span>{feature.title}</span>
                    <TooltipProvider>
                      <Tooltip delayDuration={200}>
                        <TooltipTrigger asChild>
                          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-help">
                            <Info className="w-3.5 h-3.5" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent 
                          side="right" 
                          align="start"
                          className="bg-white text-gray-900 border-none shadow-lg p-3 max-w-[280px] rounded-lg"
                        >
                          <p className="text-sm leading-relaxed">{feature.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <span className="text-3xl font-bold">$2,499 USD</span>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Packages */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Advanced Microsoft Certification Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {([
            { title: "Azure + AI + Security", certs: ["Cloud", "AI", "SC"] },
            { title: "Azure + AI + Data", certs: ["Cloud", "AI", "DP"] },
            { title: "Azure + AI + Power Platform", certs: ["Cloud", "AI", "PL"] },
            { title: "Azure + AI + Microsoft 365", certs: ["Cloud", "AI", "MS"] }
          ] as CoursePackage[]).map((package_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-gray-200 flex flex-col">
              <div className="flex-grow">
                <Badge className="bg-blue-100 text-blue-600">Advanced Package</Badge>
                <h3 className="text-xl font-bold mt-4">{package_.title}</h3>
                <div className="mt-4 space-y-2">
                  {package_.certs.map((cert) => (
                    <p key={cert} className="text-sm text-gray-600">
                      • {certificationDescriptions[cert]}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <span className="text-2xl font-bold">$3,499 USD</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {commonFeatures.map((feature, index) => (
            <div key={index} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 group">
              {getIcon(feature.icon, "w-4 h-4")}
              <span>{feature.title}</span>
              <TooltipProvider>
                <Tooltip delayDuration={200}>
                  <TooltipTrigger asChild>
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition-colors cursor-help">
                      <Info className="w-3.5 h-3.5" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent 
                    side="top" 
                    align="center"
                    className="bg-white text-gray-900 border-none shadow-lg p-3 max-w-[280px] rounded-lg"
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
        <h2 className="text-2xl font-bold mb-8">Expert Microsoft Certification Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {([
            { title: "Azure + AI + Data + Power Platform", certs: ["Cloud", "AI", "DP", "PL"] },
            { title: "Azure + AI + Microsoft 365 + Security", certs: ["Cloud", "AI", "MS", "SC"] }
          ] as CoursePackage[]).map((package_, index) => (
            <div key={index} className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-xl p-8 text-white flex flex-col">
              <div className="flex-grow">
                <Badge className="bg-white text-purple-600">Expert Package</Badge>
                <h3 className="text-2xl font-bold mt-4">{package_.title}</h3>
                <div className="mt-4 space-y-2">
                  {package_.certs.map((cert) => (
                    <p key={cert} className="text-sm opacity-90">
                      • {certificationDescriptions[cert]}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <h4 className="font-semibold mb-2">All Features Included:</h4>
                <ul className="grid grid-cols-2 gap-y-6 gap-x-4">
                  {commonFeatures.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm min-h-[3rem]">
                      {getIcon(feature.icon, "w-4 h-4 mt-0.5")}
                      <span className="flex-1">{feature.title}</span>
                      <TooltipProvider>
                        <Tooltip delayDuration={200}>
                          <TooltipTrigger asChild>
                            <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-help">
                              <Info className="w-3.5 h-3.5" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent 
                            side="right" 
                            align="start"
                            className="bg-white text-gray-900 border-none shadow-lg p-3 max-w-[280px] rounded-lg"
                          >
                            <p className="text-sm leading-relaxed">{feature.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                  {commonFeatures.slice(3).map((feature, index) => (
                    <li key={index + 3} className="flex items-start space-x-2 text-sm min-h-[3rem]">
                      {getIcon(feature.icon, "w-4 h-4 mt-0.5")}
                      <span className="flex-1">{feature.title}</span>
                      <TooltipProvider>
                        <Tooltip delayDuration={200}>
                          <TooltipTrigger asChild>
                            <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-help">
                              <Info className="w-3.5 h-3.5" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent 
                            side="right" 
                            align="start"
                            className="bg-white text-gray-900 border-none shadow-lg p-3 max-w-[280px] rounded-lg"
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
                <ul className="grid grid-cols-2 gap-2">
                  {expertFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm">
                      {getIcon(feature.icon, "w-4 h-4")}
                      <span>{feature.title}</span>
                      <TooltipProvider>
                        <Tooltip delayDuration={200}>
                          <TooltipTrigger asChild>
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-help">
                              <Info className="w-3.5 h-3.5" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent 
                            side="right" 
                            align="start"
                            className="bg-white text-gray-900 border-none shadow-lg p-3 max-w-[280px] rounded-lg"
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
