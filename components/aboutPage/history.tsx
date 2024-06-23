"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface TimeLineItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface TimeLineProps {
  items: TimeLineItem[];
  onHover: (imageUrl: string | null) => void;
}

const TimeLine: React.FC<TimeLineProps> = ({ items, onHover }) => {
  return (
    <div className="relative m-10">
      <motion.div
        className="border-l-4 border-gray-400 absolute h-full top-0 left-4"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.8, delay: 0.2, type: "linear" }}
      />
      {items.map((item, index) => (
        <>
          <motion.div
            className="bg-primary rounded-full h-4 w-4 absolute -left-2 mt-2"
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index, type: "spring" }}
          />
          <motion.div
            key={item.id}
            className="mb-6 ml-10 md:cursor-pointer"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 1.2, type: "spring" }}
            onMouseEnter={() => onHover(item.imageUrl)}
            onMouseLeave={() => onHover(null)}
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        </>
      ))}
    </div>
  );
};

const items = [
  {
    id: 1,
    title: "1990",
    description: "Foundation of Innovative Design Group",
    imageUrl: "/interior.jpg",
  },
  {
    id: 2,
    title: "1995",
    description:
      "Completed our first major commercial project, the Green Tower",
    imageUrl: "/ext1.jpg",
  },
  {
    id: 3,
    title: "2000",
    description: "Won the National Architecture Award for Sustainable Design",
    imageUrl: "/intro1.jpg",
  },
  {
    id: 4,
    title: "2010",
    description:
      "Expanded to international markets with projects in Europe and Asia",
    imageUrl: "/test1.jpg",
  },
  {
    id: 5,
    title: "2010",
    description:
      "Celebrated 30 years of excellence with over 500 completed projects",
    imageUrl: "/test2.jpg",
  },
];

export const History = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center space-y-8">
      <div className="w-full items-center text-center justify-center flex flex-col gap-4 my-12">
        <h1 className="font-medium text-4xl md:text-6xl">About Us</h1>
        <p className="font-medium text-lg md:text-xl">
          Innovative Design Group was founded in 1990 by a group of passionate
          architects and designers with a vision to redefine the architectural
          landscape. From humble beginnings, we have grown into a leading firm
          renowned for our innovative approach and commitment to excellence. Our
          journey began with small residential projects, and over the decades,
          we have expanded our portfolio to include large-scale commercial
          developments, public infrastructure, and bespoke interior designs.
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="font-medium text-4xl md:text-6xl w-full text-center">
          Key Milestones
        </h2>
        <div className="w-full flex h-full items-center justify-center">
          <TimeLine items={items} onHover={setImageUrl} />
          <Image
            alt="image"
            src={imageUrl || "/interior.jpg"}
            width={400}
            height={400}
            className="hidden md:flex object-cover max-w-full w-[400px] h-[400px] rounded-lg shadow-lg flex-1"
          />
        </div>
      </div>
    </div>
  );
};
