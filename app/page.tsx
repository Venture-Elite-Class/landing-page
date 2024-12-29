import HomeLayout from '@/components/home/HomeLayout';
import SectionLayout from '@/components/ui/SectionLayout';
import Hero from '@/components/home/Hero';
import Description from '@/components/home/Description';

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
          image: "/images/home-bg.png",
          alt: "Home background"  
        }}>
        <Description />
      </SectionLayout>
    </div>
  );
}
