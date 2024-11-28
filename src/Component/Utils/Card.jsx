import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

function Card({ title, description, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
      transition: { duration: 0.4, delay: index * 0.1 },
    },
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center flex-col gap-2 p-6 border-2 rounded-lg border-[#fff] text-center overflow-hidden"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      <h1 className="text-lg font-bold text-white">{title}</h1>
      <p className="text-sm text-gray-300">{description}</p>

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
