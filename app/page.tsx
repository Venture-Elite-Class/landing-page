import HomeLayout from '@/components/home/HomeLayout';
import Hero from '@/components/home/Hero';
import Description from '@/components/home/Description';

export default function Home() {
  return (
    <div>
      <HomeLayout showWavyBackground>
        <Hero />
      </HomeLayout>
      <HomeLayout>
        <Description />
      </HomeLayout>
    </div>
  );
}
