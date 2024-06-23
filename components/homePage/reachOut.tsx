import React from "react";
import { cn } from "@/lib/utils";
import IconSection from "./icon-section";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const ReachOut = () => {
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

  const words = "Make you dreams come true";
  const letters = words.split("");

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  const Icon = ({ className, ...rest }: any) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        strokeWidth="1"
        stroke="currentColor"
        className={cn("dark:text-white text-black size-6 absolute", className)}
        {...rest}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    );
  };
  return (
    <div className="h-full flex flex-col items-center justify-center w-full my-12">
      <div className="border border-dashed border-primary relative ">
        <Icon className="-top-3 -left-3" />
        <Icon className="-top-3 -right-3" />
        <Icon className="-bottom-3 -left-3" />
        <Icon className="-bottom-3 -right-3" />
        <div className="flex justify-center p-4 w-full ">
          {letters.map((letter, i) => (
            <motion.h1
              key={i}
              animate={isInView ? "animate" : "initial"}
              variants={pullupVariant}
              initial="initial"
              custom={i}
              className="text-center text-2xl font-bold  drop-shadow-sm md:text-5xl md:leading-[3rem] "
            >
              {letter === " " ? <span>&nbsp;</span> : letter}
            </motion.h1>
          ))}
        </div>
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            show: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", delay: 0.8 },
              scale: 1,
            },
          }}
          className="overflow-y-hidden"
          ref={ref}
        >
          <IconSection />
        </motion.div>
      </div>
    </div>
  );
};
