import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "../../../../Component/Utils/SectionHeader";
import ServiceAnimateCard from "../../../../Component/Utils/ServiceAnimateCard";
import img1 from "../../../../assets/image/service/1.jpg";
import img2 from "../../../../assets/image/service/2.jpg";
import img3 from "../../../../assets/image/service/3.jpg";
import img4 from "../../../../assets/image/service/4.png";

const SkillsToolsSection = () => {
  const skills = [
    { _id: 1, image: img1, title: "Website Audit" },
    { _id: 2, image: img2, title: "Keyword Research" },
    { _id: 3, image: img3, title: "Image SEO" },
    { _id: 4, image: img4, title: "Facebook Ad Run" },
    { _id: 5, image: img4, title: "YouTube SEO" },
    { _id: 6, image: img4, title: "Facebook Page SEO" },
    { _id: 7, image: img4, title: "On-Page SEO" },
  ];

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });

  if (inView) {
    controls.start("visible");
  }


  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="skills"
      className="md:pb-28 md:mt-28"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      <div className="max-w-screen-xl mx-auto">
        <div id="services">
          <SectionHeader head={"Skills"} />
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 px-2 gap-2 text-white"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            {skills.map((skill) => (
              <motion.div key={skill._id} variants={cardVariants}>
                <ServiceAnimateCard image={skill.image} title={skill.title} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsToolsSection;
