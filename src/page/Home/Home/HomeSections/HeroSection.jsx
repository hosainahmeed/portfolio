import { Link } from "react-scroll";
import { motion } from "framer-motion";
import lively1 from "../../../../assets/image/banner/1.webp";
import lively2 from "../../../../assets/image/banner/2.webp";
import lively3 from "../../../../assets/image/banner/3.webp";
function HeroSection() {
  return (
    <div
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-around p-4 sm:p-6 md:p-10 lg:p-12 space-y-6 md:space-y-0"
    >
      {/* Main content section with rotated and visible 'md:after' pseudo-element */}
      <img className="absolute top-20 w-12 h-12 animate-bounce z-[999] opacity-50" src={lively1} alt="" />
      <img className="absolute top-50 w-12 h-12 animate-bounce z-[999] opacity-50" src={lively2} alt="" />
      <img className="absolute top-30 left-10 w-12 h-12 animate-bounce z-[999] opacity-50" src={lively3} alt="" />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center md:text-left md:max-w-lg p-4 sm:p-6 bg-black text-white z-10
                    md:after:content-[''] md:after:absolute md:after:z-[-1] md:after:border-2
                    md:after:border-[#E61513] md:after:top-0 md:after:left-0
                    md:after:w-full md:after:h-full 
                    md:after:rotate-[30deg] md:after:scale-110
                    md:after:origin-bottom-right-left
                    md:after:animate-pulse"
      >
        <div className="bg-black px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight"
          >
            Hi, I'm Farzana Khatun, an SEO Specialist.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="mb-6 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed"
          >
            Get your business online, and skyrocket your visibility with the
            best Digital Marketer in Bangladesh.
          </motion.p>
          <Link
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            to="contact"
          >
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#E61513" }}
              className="text-white border-2 px-3 py-2 sm:px-4 sm:py-2 border-[#E61513] hover:bg-[#E61513] transition duration-300"
            >
              Contact
            </motion.button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-6 md:mt-0 md:ml-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      >
        <motion.img
          src="https://leverage-html.codings.dev/assets/images/hero-4.jpg"
          alt="SEO Specialist"
          className="w-full h-auto rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
}

export default HeroSection;
