import Card from "../../../../Component/Utils/Card";
import img1 from "../../../../assets/image/service/1.webp";
import img2 from "../../../../assets/image/service/2.webp";
import img3 from "../../../../assets/image/service/3.webp";
import img4 from "../../../../assets/image/service/4.webp";
const cardContent = [
  { _id: 1, image: img1, title: "Search Engine Optimization(SEO)" },
  { _id: 2, image: img2, title: "Digital Marketing Strategy Development" },
  { _id: 3, image: img3, title: "Marketing Consultancy" },
  { _id: 4, image: img4, title: "SEO & Digital Marketing Training" },
];

function ServicesSection() {
  return (
    <div
      id="services"
      className="grid grid-cols-2 md:grid-cols-4 gap-2 text-white py-28"
    >
      {cardContent.map((card) => (
        <Card key={card._id} image={card.image} title={card.title}></Card>
      ))}
    </div>
  );
}

export default ServicesSection;
