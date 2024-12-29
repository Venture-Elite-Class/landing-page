import WavyBackground from "../three/WavyBackground";
import Image from "next/image";

interface SectionLayoutProps {
  children: React.ReactNode;
  background?: {
    type: "wavy" | "image" | "none";
    image?: string;
    alt?: string;
  };
  className?: string;
}

export default function SectionLayout({ 
  children, 
  background = { type: "none" },
  className = ""
}: SectionLayoutProps) {
  return (
    <div className="relative w-full min-h-screen max-w-full">
      {/* Background Layer */}
      {background.type === "wavy" && <WavyBackground />}
      {background.type === "image" && background.image && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={background.image}
            alt={background.alt || "Background"}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Content Layer */}
      <div className={`relative z-10 grid grid-rows-1 items-center justify-items-center min-h-screen pb-20 pointer-events-none ${className}`}>
        <div className="pointer-events-auto w-full relative">
          {children}
        </div>
      </div>
    </div>
  );
} 