import { motion } from "framer-motion";
import { useState } from "react";

function ServiceAnimateCard({ image, title }) {
  const [over, setOver] = useState(false);

  const handleMouseEnter = () => {
    setOver(true);
  };

  const handleMouseLeave = () => {
    setOver(false);
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex items-center relative text-center py-4 bg-[#000] h-48 justify-center flex-col gap-2 cursor-pointer"
      initial={{ opacity: 0.9 }}
      animate={{ opacity: over ? 1 : 0.9 }}
      whileHover={{
        scale: 1.05,
        backgroundColor: "#4a4949",
        transition: { type: "spring", stiffness: 200 },
      }}
    >
      {/* Main image */}
      <motion.img
        src={image}
        alt=""
        className="w-12 md:w-28"
        initial={{ opacity: 0.5 }}
        animate={{
          opacity: over ? 0.8 : 0.5,
          rotate: over ? 10 : 0,
          scale: over ? 1.2 : 1,
          transition: { duration: 0.3 },
        }}
      />
      
      {/* Title */}
      <motion.h1
        className="text-lg text-white"
        initial={{ y: 0 }}
        animate={{
          y: over ? -5 : 0,
          color: over ? "#fffcf5" : "#ffffff",
          transition: { duration: 0.2 },
        }}
      >
        {title}
      </motion.h1>

      {/* Hover overlay animation */}
      {over && (
        <motion.div
          initial={{ width: 0, height: 0, opacity: 0 }}
          animate={{
            width: "100%",
            height: "100%",
            opacity: 0.9,
            rotate: 5,
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          exit={{ width: 0, height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute top-0 left-0 bg-[#11111167] z-10"
        />
      )}
    </motion.div>
  );
}

export default ServiceAnimateCard;
