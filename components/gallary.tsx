"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "framer-motion";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

function ParallaxImages({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(4, -200, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <div className="overflow-hidden flex-nowrap w-full h-full flex">
      <motion.div className="flex w-full flex-nowrap " style={{ x }}>
        <span className="flex w-full h-full mr-[30px]">{children} </span>
      </motion.div>
    </div>
  );
}

export const Gallery = () => {
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
    hidden: { opacity: 1, y: -500 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  const imageSources = [
    "/interior.jpg",
    "/ext1.jpg",
    "/ext2.jpg",
    "/intro1.jpg",
    "/test1.jpg",
    "/test2.jpg",
    "/interior.jpg",
    "/ext1.jpg",
    "/ext2.jpg",
    "/intro1.jpg",
    "/test1.jpg",
    "/test2.jpg",
    "/interior.jpg",
    "/ext1.jpg",
    "/ext2.jpg",
    "/intro1.jpg",
    "/test1.jpg",
    "/test2.jpg",
  ];
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
    <div className="overflow-x-hidden overflow-y-hidden container">
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="mb-8"
        ref={ref}
      >
        <motion.h1
          className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          Intersted?
        </motion.h1>
      </motion.div>

      <div className="flex-1 flex flex-col h-full justify-center">
        <div className="border border-dashed border-zinc-400 dark:border-zinc-700 relative ">
          <Icon className="-top-3 -left-3" />
          <Icon className="-top-3 -right-3" />
          <Icon className="-bottom-3 -left-3" />
          <Icon className="-bottom-3 -right-3" />
          <ParallaxImages baseVelocity={5}>
            {imageSources.map((gallery, i) => (
              <Image
                key={i}
                src={gallery}
                width="400"
                height="200"
                className="w-full object-cover h-[400px] rounded-md"
                alt={`Random ${gallery}`}
                loading="lazy"
              />
            ))}
          </ParallaxImages>
          <ParallaxImages baseVelocity={-5}>
            {imageSources.map((gallery, i) => (
              <Image
                key={i}
                src={gallery}
                width="400"
                height="200"
                className="w-full object-cover h-[400px] rounded-md"
                alt={`Random ${gallery}`}
                loading="lazy"
              />
            ))}
          </ParallaxImages>
          <ParallaxImages baseVelocity={5}>
            {imageSources.map((gallery, i) => (
              <Image
                key={i}
                src={gallery}
                width="400"
                height="200"
                className="w-full object-cover h-[400px] rounded-md"
                alt={`Random ${gallery}`}
                loading="lazy"
              />
            ))}
          </ParallaxImages>
        </div>
      </div>
    </div>
  );
};
