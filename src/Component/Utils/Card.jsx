import { motion } from "framer-motion";
import { useState } from "react";

function Card({ image, title }) {
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
      className="flex items-center relative text-center py-4 bg-[#3d3c3c] justify-center flex-col gap-2"
      initial={{ opacity:90 }}
      whileHover={{ opacity: 1, backgroundColor: "#4a4949" }}
    >
      <img src={image} alt="" className="w-12 md:w-28" />
      <h1 className="text-lg text-white">{title}</h1>
      {over && (
        <motion.div
          initial={{ width: 0 ,height:0}}
          animate={{ width: "100%" ,height:"100%" }}
          transition={{ duration: 0.2 }}
          className="h-1 absolute bg-[#11111167]"
        />
      )}
    </motion.div>
  );
}

export default Card;
