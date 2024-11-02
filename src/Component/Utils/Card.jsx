import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

function Card({ image, title, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 10% of the card is in view
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: index * 0.1 }, // Stagger based on index
    },
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center flex-col gap-2 p-4 bg-[#111] text-center overflow-hidden"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      <img src={image} alt="" className="w-12 md:w-28" />
      <h1 className="text-base text-white">{title}</h1>

      {isHovered && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-[#11111167] pointer-events-none"
        />
      )}
    </motion.div>
  );
}

export default Card;
