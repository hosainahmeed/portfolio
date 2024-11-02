import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import blog from "../../../../assets/image/banner/skills.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PublicIcon from "@mui/icons-material/Public";
import XIcon from "@mui/icons-material/X";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import { useEffect } from "react";
import { Link } from "react-scroll";
import { Image } from "antd";
import { Button } from "@mui/material";
import Marquee from "react-fast-marquee";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function HeroSection() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <motion.div
      id="home"
      className="grid grid-cols-12 gap-2 mt-12 md:mb-28"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="border-2 p-8 rounded-2xl bg-[#fff] col-span-12 sm:col-span-4"
        variants={childVariants}
      >
        <div className="flex items-center flex-col lg:flex-row justify-between gap-2">
          <div className="rounded-tl-[30px] rounded-br-[30px] overflow-hidden">
            <Image.PreviewGroup>
              <Image
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/564x/f4/2d/38/f42d384ae3532aa99bbd561fded9423f.jpg"
                alt="Farzana Hoque"
              />
            </Image.PreviewGroup>
          </div>
          <div className="text-black text-center flex flex-col gap-2 md:text-start">
            <p className="text-sm">Meet</p>
            <h1 className="text-4xl font-bold">Farzana Hoque</h1>
            <p className="text-sm">
              Digital Marketer & SEO Expert In Bangladesh
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="border-2 p-8 rounded-2xl gap-2 bg-[#fff] flex flex-col col-span-12 sm:col-span-8"
        variants={childVariants}
      >
        <div className="w-full h-full text-white bg-[#111] flex items-center justify-center rounded-2xl px-6 py-2">
          <span className="text-base font-semibold w-full">
            <Marquee>
              <h1 className="text-xl tracking-wider">
                Take your business to new heights with expert digital
                strategies.
              </h1>
              <CheckCircleIcon sx={{margin:'0px 20px'}}></CheckCircleIcon>
            </Marquee>
          </span>
        </div>
        <div className="flex gap-2 flex-col text-white sm:flex-row h-full">
          <div className="w-full bg-[#111] rounded-2xl px-6 py-2 ">
            <span className="text-base font-semibold">
              Optimize your online presence to reach a wider audience.
            </span>
          </div>
          <div className="w-full bg-[#111] text-white rounded-2xl px-6 py-2 ">
            <span className="text-base font-semibold">
              Boost conversions with data-driven marketing campaigns.
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="border-2 px-5 py-5 rounded-2xl bg-[#fff] col-span-12 sm:col-span-6"
        variants={childVariants}
      >
        <ul className="text-black text-[12px] md:text-base">
          <li>
            <BusinessCenterIcon sx={{ fontSize: "18px", marginRight: "4px" }} />
            SEO Specialist - 3 years at XYZ Agency
          </li>
          <li>
            <PublicIcon sx={{ fontSize: "18px", marginRight: "4px" }} /> Social
            Media Manager - 1.5 years at ABC Corp
          </li>
          <li>
            <BusinessCenterIcon sx={{ fontSize: "18px", marginRight: "4px" }} />
            Content Strategist - Freelance
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="border-2 px-5 py-5 rounded-2xl text-[12px] md:text-base bg-[#fff] col-span-12 sm:col-span-6"
        variants={childVariants}
      >
        <h2 className="text-black text-xl md:text-2xl font-bold mb-4">
          Experience
        </h2>
        <p className="text-black text-sm mb-2">
          Over 5 years of expertise in digital marketing, helping brands grow
          with strategic online solutions.
        </p>
      </motion.div>

      <motion.div
        className="border-2 p-8 rounded-2xl gap-2 flex md:flex-row flex-col justify-between items-center bg-[#fff] col-span-12 sm:col-span-8"
        variants={childVariants}
      >
        <div>
          <h1>
            <EmailIcon sx={{ fontSize: "20px", marginRight: "8px" }} /> Email :
            example@gmail.com
          </h1>
          <h1>
            <PhoneIcon sx={{ fontSize: "20px", marginRight: "8px" }} /> Contact
            Number : +88 34 854 656
          </h1>
          <h1>
            <LocationOnIcon sx={{ fontSize: "20px", marginRight: "8px" }} />{" "}
            Location : Dhaka, Bangladesh
          </h1>
        </div>
        <div className="flex gap-2">
          <NavLink>
            <FacebookIcon sx={{ fontSize: "40px" }} />
          </NavLink>
          <NavLink>
            <LinkedInIcon sx={{ fontSize: "40px" }} />
          </NavLink>
          <NavLink>
            <XIcon sx={{ fontSize: "40px" }} />
          </NavLink>
          <Button>
            <a href="">Download CV</a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="border-2 p-8 rounded-2xl bg-[#fff] col-span-12 sm:col-span-4"
        variants={childVariants}
      >
        <Link smooth={true} duration={500} spy={true} offset={-70} to="contact">
          <h1 className="text-3xl font-semibold cursor-pointer">
            Let’s <br /> work <span className="text-blue-600">together.</span>
          </h1>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default HeroSection;
