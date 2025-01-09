import { 
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

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function getIcon(iconName: string, className: string = "w-5 h-5") {
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