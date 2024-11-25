import Card from "../../../../Component/Utils/Card";
import SectionHeader from "../../../../Component/Utils/SectionHeader";
import img1 from "../../../../assets/image/service/1.webp";
import img2 from "../../../../assets/image/service/2.webp";
import img3 from "../../../../assets/image/service/3.webp";
const cardContent = [
  { _id: 1, image: img1, title: "Frontend Development" },
  { _id: 2, image: img2, title: "Responsive Design" },
  { _id: 3, image: img3, title: "Backend Development" },
];

function ServicesSection() {
  return (
    <div id="services">
      <SectionHeader subHead={'Services'} head={"Quality Services"}></SectionHeader>
      <div className="grid grid-cols-2 lg:grid-cols-3 px-2 gap-2 text-white">
        {cardContent.map((card, index) => (
          <Card
            key={card._id}
            image={card.image}
            title={card.title}
            index={index}
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
