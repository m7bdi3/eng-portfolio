"use client";

import React from "react";
import { MotionServices } from "./motion-Service";
import { motion } from "framer-motion";
import { FormSubmitComponent } from "./form";

export const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mx-auto px-4 flex flex-col w-full h-full justify-center mb-20"
    >
      <section className="relative max-w-full mx-auto z-1 mt-20">
        <div className="z-10 mx-auto py-28 gap-12 md:px-8">
          <div className="space-y-5 max-w-4xl leading-0  lg:leading-5 mx-auto text-center">
            <h1 className="text-4xl font-medium tracking-tighter mx-auto md:text-6xl">
              Designing your projects faster with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-primary">
                the best archticutre solutions.
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-neutral-600">
            Welcome to Innovative Design Group! We specialize in a range of
          architectural and interior design services tailored to meet the unique
          needs of our clients.
            </p>
          </div>
          <div className="mt-20">
            <img
              src="/interior.jpg"
              className="w-full  shadow-lg rounded-lg border object-cover"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="max-w-4xl leading-0 space-y-8 lg:leading-5 mx-auto text-center mb-2">
        <h1 className="text-4xl font-medium tracking-tighter md:text-6xl text-primary ">
          Our Services
        </h1>
      </section>

      <MotionServices />
      <FormSubmitComponent />
    </motion.div>
  );
};
