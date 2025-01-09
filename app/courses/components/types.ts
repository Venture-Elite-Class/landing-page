export type CertType = 'Cloud' | 'AI' | 'SC' | 'DP' | 'PL' | 'MS';

export interface CoursePackage {
  title: string;
  certs: CertType[];
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const certificationDescriptions: Record<CertType, string> = {
  Cloud: "Microsoft Azure Fundamentals ",
  AI: "Microsoft Azure AI Fundamentals ",
  SC: "Microsoft Security Fundamentals ",
  DP: "Microsoft Azure Data Fundamentals ",
  PL: "Microsoft Power Platform Fundamentals ",
  MS: "Microsoft 365 Fundamentals "
};

export const certificationCodes: Record<CertType, string> = {
  Cloud: "(AZ-900)",
  AI: "(AI-900)",
  SC: "(SC-900)",
  DP: "(DP-900)",
  PL: "(PL-900)",
  MS: "(MS-900)"
}; 