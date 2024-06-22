"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export const Introduction = () => {
  const word1 = "About";
  const word2 = "us";

  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.6, // Trigger when 10% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  }, [inView]);

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
    <div className="relative h-screen flex items-center justify-center container" ref={ref}>
      <div className="flex flex-col gap-4 h-full justify-center mx-auto">
        <motion.div
          whileHover={{ scale: [null, 1, 1.2] }}
          transition={{ duration: 0.3 }}
        >
          <div className="border border-dashed border-primary relative bg-white p-4">
            <Icon className="-top-3 -left-3" />
            <Icon className="-top-3 -right-3" />
            <Icon className="-bottom-3 -left-3" />
            <Icon className="-bottom-3 -right-3" />

            <div className="flex space-x-1 gap-x-2 justify-center">
              <AnimatePresence>
                <motion.h1
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ duration: 1 }}
                  variants={variants1}
                  className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
                >
                  About us
                </motion.h1>
              </AnimatePresence>
            </div>
            <p className="text-gray-700 text-lg dark:text-gray-300">
              Innovative Design Group is a premier architectural firm committed
              to transforming visions into reality. With a legacy of excellence
              in design and construction, we specialize in creating
              cutting-edge, sustainable, and aesthetically pleasing
              environments. Our dedicated team of architects, designers, and
              planners collaborates closely with clients to deliver projects
              that not only meet their needs but also exceed their expectations.
              Whether it&apos;s residential, commercial, or interior design, we
              bring innovation and expertise to every project, ensuring high
              quality and attention to detail. At Innovative Design Group, we
              believe in creating spaces that inspire and endure.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="absolute right-0 -z-10 items-end py-20 mx-auto">
        <Image
          src={"/intro1.jpg"}
          alt="intro"
          className="object-cover rounded-tr-3xl rounded-bl-3xl rounded-tl-[4rem] rounded-br-[4rem]"
          width={1920}
          height={1275}
        />
      </div>
    </div>
  );
};
