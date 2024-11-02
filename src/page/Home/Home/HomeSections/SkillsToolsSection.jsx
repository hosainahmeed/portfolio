import SectionHeader from "../../../../Component/Utils/SectionHeader";
import ServiceAnimateCard from "../../../../Component/Utils/ServiceAnimateCard";
import img1 from "../../../../assets/image/service/1.jpg";
import img2 from "../../../../assets/image/service/2.jpg";
import img3 from "../../../../assets/image/service/3.jpg";
import img4 from "../../../../assets/image/service/4.png";

const SkillsToolsSection = () => {
  const skills = [
    { _id: 1, image: img1, title: "website Audit" },
    { _id: 2, image: img2, title: "Keyword Research" },
    { _id: 3, image: img3, title: "Image SEO" },
    { _id: 4, image: img4, title: "Facebook Ad run" },
    { _id: 4, image: img4, title: "YouTube SEO " },
    { _id: 4, image: img4, title: "Facebook Page SEO" },
    { _id: 4, image: img4, title: "On Page SEO" },
  ];

  return (
    <section id="skills" className="md:pb-28 md:mt-28">
      <div className="max-w-screen-xl mx-auto">
        <div id="services">
          <SectionHeader head={"Skills"}></SectionHeader>
          <div className="grid grid-cols-2 lg:grid-cols-4 px-2 gap-2 text-white">
            {skills.map((skill) => (
              <ServiceAnimateCard
                key={skill._id}
                image={skill.image}
                title={skill.title}
              ></ServiceAnimateCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsToolsSection;
