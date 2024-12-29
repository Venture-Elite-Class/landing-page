import WavyBackground from "../three/WavyBackground";

interface HomeLayoutProps {
  children: React.ReactNode;
  showWavyBackground?: boolean;
}

export default function HomeLayout({ children, showWavyBackground = false }: HomeLayoutProps) {
  return (
    <div className="relative w-full min-h-screen max-w-full">
      <div className="relative z-10 grid grid-rows-1 items-center justify-items-center min-h-screen pb-20 pointer-events-none">
        <div className="pointer-events-auto w-full relative">
          {showWavyBackground && <WavyBackground />}
          {children}
        </div>
      </div>
    </div>
  );
} 