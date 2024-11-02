import SectionHeader from "../../../../Component/Utils/SectionHeader";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { Link } from "react-scroll";

function AboutMeSection() {
  return (
    <div id="about" className="container mx-auto px-4 py-8">
      <SectionHeader head="About Farzana Houqe" />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-1 mt-8 md:mb-28">
        {/* Image Section */}
        <div className="bg-[#111]  md:col-span-2 p-4 order-1 md:order-1 rounded-lg">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full rounded-lg overflow-hidden"
          >
            <img
              src="https://i.pinimg.com/564x/f4/2d/38/f42d384ae3532aa99bbd561fded9423f.jpg"
              alt="Farzana Houqe"
              className="rounded-lg w-full h-96 object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </motion.div>
        </div>

        {/* About Text Section */}
        <div className=" bg-[#111] flex items-start justify-around flex-col md:col-span-4 p-4 order-2 md:order-2 rounded-lg">
          <h1 className="text-2xl text-white md:text-3xl font-semibold mb-4">
            I am Farzana Hoque - Digital Marketer & SEO Expert in Bangladesh
          </h1>
          <p className="text-white mb-4 leading-relaxed">
            I am a San Francisco-based product designer with a focus on web
            design, illustration, and visual development. I have diverse
            experience across various fields and industries. Contrary to popular
            belief, Lorem Ipsum is not simply random text. It has roots in
            classical Latin literature from 45 BC, making it over 2000 years
            old. Richard McClintock, a Latin professor at Hampden-Sydney College
            in Virginia, discovered its source in classical literature.
          </p>
          <Link smooth={true} to="contact">
            <button className="mt-4 bg-white px-6 py-2 rounded-md">
              Contact me
            </button>
          </Link>
        </div>

        {/* Education Section */}
        <div className="bg-[#111] text-white  md:col-span-3 p-4 order-4 md:order-3 rounded-lg">
          <h1 className="text-xl font-semibold mb-4">Education</h1>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">2020 - Present</span>
              <p className="timeline-content">
                Bachelor's in Digital Marketing - XYZ University
              </p>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2016 - 2020</span>
              <p className="timeline-content">
                Diploma in Marketing - ABC College
              </p>
            </div>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="bg-[#111] text-white md:col-span-3 p-4 order-3 md:order-4 rounded-lg">
          <h1 className="text-xl font-semibold mb-4">Hobbies</h1>
          <ul className="list-disc list-inside ">
            <li>Photography</li>
            <li>Traveling and exploring new places</li>
            <li>Reading novels and non-fiction</li>
            <li>Painting and sketching</li>
            <li>Playing musical instruments</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
