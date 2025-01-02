import HomeLayout from '@/components/home/HomeLayout';
import SectionLayout from '@/components/ui/SectionLayout';
import Hero from '@/components/home/Hero';
import Description from '@/components/home/Description';
import Features from '@/components/home/Features';
import FAQ from '@/components/home/FAQ';

export default function Home() {
  return (
    <div>
      <HomeLayout showWavyBackground>
        <Hero />
      </HomeLayout>
      <SectionLayout>
        <Description />
      </SectionLayout>
      <SectionLayout
        background={{ 
          type: "image",
          image: "/images/GridBG.png",
          alt: "Home background"  
        }}>
        <Features />
      </SectionLayout>
      <SectionLayout>
        <FAQ />
      </SectionLayout>
    </div>
  );
}
