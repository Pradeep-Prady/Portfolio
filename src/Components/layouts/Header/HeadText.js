import { useAnimationControls } from "framer-motion";
import React, { Children, useState } from "react";
import { motion } from "framer-motion";
export default function HeadText({children}) {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const band = () => {
    controls.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(1.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
      },
    });
    setIsPlaying(true);
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) {
          band();
        }
      }}
      onAnimationComplete={() => setIsPlaying(false)}
      className="text-3xl cursor-pointer inline-block"
    >
      {children}
    </motion.span>
  );
}
