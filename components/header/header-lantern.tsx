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
      className="absolute top-0 flex items-center justify-center w-full z-10"
      ref={ref}
    >
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <div className="w-full flex flex-col items-center justify-center">
          <Image
            src="/parallex/lantern.png"
            alt="Lantern"
            width={130}
            height={100}
            
            style={{
              width: "60%",
              height: "auto",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
