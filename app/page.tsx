import { HeroSlider } from '@/components/sections/HeroSlider';
import { CompanyIntro } from '@/components/sections/CompanyIntro';
import { Capabilities } from '@/components/sections/Capabilities';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { Industries } from '@/components/sections/Industries';
import { ManufacturingSection } from '@/components/sections/ManufacturingSection';
import { AviationSection } from '@/components/sections/AviationSection';
import { WhySriSai } from '@/components/sections/WhySriSai';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { ClientMarquee } from '@/components/sections/ClientMarquee';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { ParallaxHeroSection } from '@/components/animations/ParallaxHeroSection';
import ImageSchocaseSection from './sections/ImageSchocaseSection';
import ImageSchocaseSection2 from './sections/ImageSchocaseSection2';
import Leadership from '@/components/sections/Leadership';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <CompanyIntro />
      <Capabilities />
      <SelectedWork />
      <ImageSchocaseSection/>
      <ImageSchocaseSection2/>
      {/* <ParallaxHeroSection
  firstImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  secondImage="https://images.unsplash.com/photo-1640357960494-9242650846d3?q=80&w=743&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  titleImage="/images/title-bg.jpg"
  title="Sri Sai Realtors"
  subtitle="Integrated Interior Fit-Out & Furniture Solutions"
/> */}
      <Industries />
      <ManufacturingSection />
      <AviationSection />
      <Leadership/>
      <WhySriSai />
      <ProcessTimeline />
      <ClientMarquee />
      <FinalCTA />
    </>
  );
}
