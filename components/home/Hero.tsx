import { CTAButton } from '@/components/ui/CTAButton';

export default function Hero() {
  return (
    <main className="flex flex-col gap-8 items-center justify-center min-h-[calc(100vh-60px)] pointer-events-auto relative">
      <h1 className="text-7xl font-bold serif text-center max-w-7xl">
        Get Azure Certified in <span className="text-gradient-1 serif">Silicon Valley</span>
      </h1>
      <CTAButton>Learn More</CTAButton>
      <CTAButton variant="outline">View Programs</CTAButton>
    </main>
  );
} 