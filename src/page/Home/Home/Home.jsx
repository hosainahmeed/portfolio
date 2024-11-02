import AboutMeSection from "./HomeSections/AboutMeSection";
import BlogResourceSection from "./HomeSections/BlogResourceSection";
import ContactSection from "./HomeSections/ContactSection";
import HeroSection from "./HomeSections/HeroSection";
import SampleStrategiesSection from "./HomeSections/SampleStrategiesSection";
import SEOApproachSection from "./HomeSections/SEOApproachSection";
import ServicesSection from "./HomeSections/ServicesSection";
import SkillsToolsSection from "./HomeSections/SkillsToolsSection";
import TestimonialsSection from "./HomeSections/TestimonialsSection";


const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutMeSection/>
      <ServicesSection />
      <SkillsToolsSection />
      {/* <SEOApproachSection /> */}
      <SampleStrategiesSection />
      {/* <TestimonialsSection /> */}
      <BlogResourceSection />
      <ContactSection />
    </div>
  );
};

export default Home;
