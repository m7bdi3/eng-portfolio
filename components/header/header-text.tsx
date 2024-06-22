import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export function HeaderFadeDown() {
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
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: 1,
          },
        },
      }}
      className="mt-8"
      ref={ref}
    >
      <motion.h1
        className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        Company Name
      </motion.h1>
      <motion.p
        className="mt-6 text-center md:text-2xl"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
         Preview
      </motion.p>
    </motion.div>
  );
}
