import Card from "../../../../Component/Utils/Card";
import SectionHeader from "../../../../Component/Utils/SectionHeader";

const cardContent = [
  {
    _id: 1,
    title: "Frontend Development",
    description:
      "Creating modern, user-friendly interfaces using the latest web technologies, ensuring seamless interaction and visually appealing designs.",
  },
  {
    _id: 2,
    title: "Responsive Design",
    description:
      "Building layouts that adapt to all devices, ensuring optimal user experiences across mobile, tablet, and desktop screens.",
  },
  {
    _id: 3,
    title: "Backend Development",
    description:
      "Developing robust server-side logic, APIs, and database management to power applications efficiently and securely.",
  },
];

function ServicesSection() {
  return (
    <div id="services">
      <SectionHeader subHead={"Services"} head={"Quality Services"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 gap-4 text-white">
        {cardContent.map((card, index) => (
          <Card
            key={card._id}
            title={card.title}
            description={card.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
