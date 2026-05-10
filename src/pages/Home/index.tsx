import Hero from '../../components/sections/Hero';
import TrustedPartners from '../../components/sections/TrustedPartners';
import ServicesPreview from '../../components/sections/ServicesPreview';
import WhyChooseUs from '../../components/sections/WhyChooseUs';
import IndustriesServed from '../../components/sections/IndustriesServed';
import FeaturedProjects from '../../components/sections/FeaturedProjects';
import CtaBanner from '../../components/sections/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedPartners />
      <ServicesPreview />
      <WhyChooseUs />
      <IndustriesServed />
      <FeaturedProjects />
      <CtaBanner />
    </>
  );
}
