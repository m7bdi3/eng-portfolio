import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export function HeaderF1() {
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
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      y: 350,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      exit="hidden"
      animate={isInView ? "show" : "hidden"}
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.15,
          },
        },
      }}
      className="absoulte bottom-0 flex items-center justify-center w-full h-full"
      ref={ref}
    >
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <Image
          src="/parallex/f1.png"
          alt="f1"
          width={1400}
          height={600}
          className="z-10"
          priority={true}
        />
      </motion.div>
    </motion.div>
  );
}
