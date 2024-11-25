import AboutMeSection from "./HomeSections/AboutMeSection";
import ContactSection from "./HomeSections/ContactSection";
import HeroSection from "./HomeSections/HeroSection";
import Projects from "./HomeSections/Projects";
import ServicesSection from "./HomeSections/ServicesSection";
import SkillsToolsSection from "./HomeSections/SkillsToolsSection";


const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutMeSection/>
      <Projects></Projects>
      <ServicesSection />
      <SkillsToolsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
