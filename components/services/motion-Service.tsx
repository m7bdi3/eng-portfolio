import React from "react";
import { useRef } from "react";
import { useTransform, useScroll, motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  listItems: string[];
  link: string;
  i: number;
}

const ServiceSection = ({ title, description, listItems, link, i }: Props) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div className="sticky h-screen flex items-start w-full justify-center top-12 dark:bg-neutral-900 bg-white rounded-xl">
      <section className="flex flex-col items-center relative h-full w-full origin-top space-y-12 mt-12">
        <h2 className="text-center text-xl md:text-3xl lg:text-4xl font-bold">
          {title}
        </h2>
        <p className="mb-4 max-w-4xl text-lg text-center text-primary">
          {description}
        </p>
        <div className="flex w-full h-[500px] items-center justify-center relative overflow-hidden rounded-lg">
          <motion.div
            style={{ scale: imageScale }}
            className=" w-full h-full flex items-center justify-center"
          >
            <img
              src={link}
              alt="image"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
        <ul className="list-disc list-inside self-start flex w-full gap-4 justify-center">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Comprehensive Architectural Services",
    description:
      "At Innovative Design Group, we offer comprehensive architectural services that encompass all aspects of building design and planning.",
    listItems: [
      "Residential Design",
      "Commercial Design",
      "Sustainable Design",
      "Project Management",
    ],
    link: "/ext1.jpg",
  },
  {
    title: "Transformative Interior Design",
    description:
      "Our interior design services aim to create beautiful, functional spaces that reflect your personal style and needs.",
    listItems: [
      "Residential Interiors",
      "Commercial Interiors",
      "Space Planning",
      "Furniture and Decor",
    ],
    link: "/test2.jpg",
  },
  {
    title: "Expert Consultation Services",
    description:
      "We offer expert consultation services to guide you through the complexities of your project.",
    listItems: [
      "Design Consultation",
      "Feasibility Studies",
      "Budget Planning",
      "Regulatory Compliance",
    ],
    link: "/test1.jpg",
  },
];

export const MotionServices = () => {
  return (
    <div className="flex flex-col items-start w-full justify-center mt-6">
      {services.map((service, index) => (
        <ServiceSection
          i={index}
          key={index}
          title={service.title}
          description={service.description}
          listItems={service.listItems}
          link={service.link}
        />
      ))}
    </div>
  );
};
