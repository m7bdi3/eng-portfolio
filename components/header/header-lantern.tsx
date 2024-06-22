import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export function HeaderLantern() {
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
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
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
            delayChildren: 0.25,
          },
        },
      }}
      className="absolute top-0 flex items-center justify-center w-full"
      ref={ref}
    >
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <Image
          src="/parallex/lantern.png"
          alt="Lantern"
          width={200}
          height={100}
          className="z-10"
        />
      </motion.div>
    </motion.div>
  );
}
