import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import PricingSectionCards from "./pricing";
import { Separator } from "../ui/separator";

export const Services = () => {
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  }, [inView]);

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };
  return (
    <div className="h-full w-full flex items-center justify-center my-12">
      <div className="relative h-full w-full">
      <motion.div
        exit="hidden"
        animate={isInView ? "show" : "hidden"}
        viewport={{ once: true }}
        variants={{
          show: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.15,
            },
          },
        }}
        ref={ref}
        className="h-full w-full flex flex-col items-center justify-center"
      >
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
          <h2 className="text-4xl md:text-6xl font-bold">Our Services</h2>
        </motion.div>
        <Separator className="w-[60%] text-primary mb-12" />
        <PricingSectionCards />
      </motion.div>
      </div>
    </div>
  );
};
