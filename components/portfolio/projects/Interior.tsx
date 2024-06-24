import React from "react";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Interior = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-start ">
      <ScrollArea>
        <Tabs
          defaultValue="Loft"
          className="items-center justify-start flex flex-col"
        >
          <TabsList className="w-full flex items-center justify-center gap-x-4 bg-primary">
            <TabsTrigger
              value="Loft"
              className="text-white active:text-gray-800 w-full"
            >
              1
            </TabsTrigger>
            <TabsTrigger
              value="Farmhouse"
              className="text-white active:text-gray-800 w-full"
            >
              2
            </TabsTrigger>
            <TabsTrigger
              value="Apartment"
              className="text-white active:text-gray-800 w-full"
            >
              3
            </TabsTrigger>
            <TabsTrigger
              value="Beach"
              className="text-white active:text-gray-800 w-full"
            >
              4
            </TabsTrigger>
            <TabsTrigger
              value="Beach"
              className="text-white active:text-gray-800 w-full"
            >
              5
            </TabsTrigger>
            <TabsTrigger
              value="Apartment"
              className="text-white active:text-gray-800 w-full"
            >
              6
            </TabsTrigger>
            <TabsTrigger
              value="Farmhouse"
              className="text-white active:text-gray-800 w-full"
            >
              7
            </TabsTrigger>
            <TabsTrigger
              value="Loft"
              className="text-white active:text-gray-800 w-full"
            >
              8
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="Loft"
            className="w-full h-full overflow-y-auto rounded p-8"
            asChild
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="p-6 rounded"
            >
              <h1 className="text-4xl font-bold text-center text-primary mb-6">
                Urban Loft Makeover
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Project Details
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      <strong>Location:</strong> Brooklyn, New York
                    </li>
                    <li>
                      <strong>Client:</strong> Emily Johnson
                    </li>
                    <li>
                      <strong>Completion Date:</strong> March 2023
                    </li>
                    <li>
                      <strong>Architect:</strong> John Smith
                    </li>
                    <li>
                      <strong>Interior Designer:</strong> Jane Doe
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Project Description
                  </h2>
                  <p className="text-gray-700">
                    The Urban Loft Makeover project involved transforming a
                    dated industrial loft into a chic, contemporary living space
                    that reflects the client’s personal style. The design
                    emphasizes open spaces, minimalistic aesthetics, and the
                    creative use of textures and colors to create a vibrant yet
                    cozy atmosphere.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Objectives
                </h2>
                <ul className="list-disc list-inside">
                  <li>
                    Redesign the loft to reflect modern, minimalist aesthetics
                  </li>
                  <li>Maximize natural light and open space</li>
                  <li>
                    Use a mix of textures and colors to create visual interest
                  </li>
                  <li>Ensure functionality and comfort in all areas</li>
                </ul>
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Gallery of Project Images
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                  <div>
                  <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Exterior View</p>
                  </div>
                  <div>
                  <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Living Room</p>
                  </div>
                  <div>
                    <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Kitchen</p>
                  </div>
                  <div>
                    <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Master Bedroom</p>
                  </div>
                  <div>
                    <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Outdoor Area</p>
                  </div>
                  <div>
                    <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Outdoor Area</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Client Testimonial
                </h2>
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700">
                  “My loft has been completely transformed thanks to Innovative
                  Design Group. Jane’s design captured my vision perfectly,
                  combining style, functionality, and comfort. I couldn’t be
                  happier with the result.” - Emily Johnson
                </blockquote>
              </div>
            </motion.div>
          </TabsContent>
          <TabsContent
            value="Farmhouse"
            className="w-full h-full overflow-y-auto rounded p-8"
            asChild
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="p-6 rounded"
            >
              <h1 className="text-4xl font-bold text-center text-primary mb-6">
                Modern Farmhouse Retreat
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Project Details
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      <strong>Location:</strong> Austin, Texas
                    </li>
                    <li>
                      <strong>Client:</strong> The Hernandez Family
                    </li>
                    <li>
                      <strong>Completion Date:</strong> August 2022
                    </li>
                    <li>
                      <strong>Architect:</strong> John Smith
                    </li>
                    <li>
                      <strong>Interior Designer:</strong> Jane Doe
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Project Description
                  </h2>
                  <p className="text-gray-700">
                    This project involved converting an old farmhouse into a
                    modern retreat while preserving its rustic charm. The design
                    focuses on open spaces, natural light, and a blend of
                    traditional and contemporary elements to create a cozy and
                    stylish home.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Objectives
                </h2>
                <ul className="list-disc list-inside">
                  <li>Retain the farmhouse’s rustic character</li>
                  <li>Integrate modern amenities and design elements</li>
                  <li>Maximize natural light and open spaces</li>
                  <li>
                    Use a warm, neutral color palette with natural materials
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Gallery of Project Images
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                  <div>
                    <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Exterior View</p>
                  </div>
                  <div>
                    <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Living Room</p>
                  </div>
                  <div>
                    <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Kitchen</p>
                  </div>
                  <div>
                    <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Master Bedroom</p>
                  </div>
                  <div>
                    <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Outdoor Area</p>
                  </div>
                  <div>
                    <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Outdoor Area</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Client Testimonial
                </h2>
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700">
                  “Innovative Design Group perfectly balanced rustic charm with
                  modern comfort in our farmhouse. Jane’s attention to detail
                  and design expertise made our home both beautiful and
                  functional.” - The Hernandez Family
                </blockquote>
              </div>
            </motion.div>
          </TabsContent>
          <TabsContent
            value="Apartment"
            className="w-full h-full overflow-y-auto rounded p-8"
            asChild
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="p-6 rounded"
            >
              <h1 className="text-4xl font-bold text-center text-primary mb-6">
                Urban Minimalist Apartment
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Project Details
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      <strong>Location:</strong> San Francisco, California
                    </li>
                    <li>
                      <strong>Client:</strong> David Lee
                    </li>
                    <li>
                      <strong>Completion Date:</strong>January 2023
                    </li>
                    <li>
                      <strong>Architect:</strong> John Smith
                    </li>
                    <li>
                      <strong>Interior Designer:</strong> Jane Doe
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Project Description
                  </h2>
                  <p className="text-gray-700">
                    The Urban Minimalist Apartment project focuses on creating a
                    sleek, modern living space in a compact urban setting. The
                    design emphasizes clean lines, neutral colors, and smart
                    storage solutions to maximize the functionality of the small
                    apartment.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Objectives
                </h2>
                <ul className="list-disc list-inside">
                  <li>Optimize the use of limited space</li>
                  <li>Create a clean, minimalist aesthetic</li>
                  <li>Incorporate smart storage solutions</li>
                  <li>
                    Use a neutral color palette with occasional bold accents
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Gallery of Project Images
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                  <div>
                    <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Exterior View</p>
                  </div>
                  <div>
                    <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Living Room</p>
                  </div>
                  <div>
                    <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Kitchen</p>
                  </div>
                  <div>
                    <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Master Bedroom</p>
                  </div>
                  <div>
                    <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Outdoor Area</p>
                  </div>
                  <div>
                    <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Outdoor Area</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Client Testimonial
                </h2>
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700">
                  “Jane transformed my small apartment into a stylish and
                  functional living space. The minimalist design and smart
                  storage solutions make it perfect for urban living.” - David
                  Lee
                </blockquote>
              </div>
            </motion.div>
          </TabsContent>
          <TabsContent
            value="Beach"
            className="w-full h-full overflow-y-auto rounded p-8"
            asChild
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="p-6 rounded"
            >
              <h1 className="text-4xl font-bold text-center text-primary mb-6">
              Coastal Chic Beach House
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Project Details
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      <strong>Location:</strong> Malibu, California
                    </li>
                    <li>
                      <strong>Client:</strong> The Thompson Family
                    </li>
                    <li>
                      <strong>Completion Date:</strong> July 2021
                    </li>
                    <li>
                      <strong>Architect:</strong> John Smith
                    </li>
                    <li>
                      <strong>Interior Designer:</strong> Jane Doe
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Project Description
                  </h2>
                  <p className="text-gray-700">
                  The Coastal Chic Beach House project aims to create a relaxed, airy living space that captures the essence of beachside living. The design features light, breezy colors, natural materials, and open spaces to enhance the coastal vibe.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Objectives
                </h2>
                <ul className="list-disc list-inside">
                  <li>Create a light, airy atmosphere
                  </li>
                  <li>Use coastal-inspired colors and materials
                  </li>
                  <li>Design open, flowing spaces
                  </li>
                  <li>
                  Incorporate large windows to maximize ocean views
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Gallery of Project Images
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                  <div>
                    <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Exterior View</p>
                  </div>
                  <div>
                    <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Living Room</p>
                  </div>
                  <div>
                    <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Kitchen</p>
                  </div>
                  <div>
                    <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Master Bedroom</p>
                  </div>
                  <div>
                    <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Outdoor Area</p>
                  </div>
                  <div>
                    <motion.img
                      src="https://via.placeholder.com/600x400?text=Exterior+View"
                      alt="Exterior View"
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-center mt-2">Outdoor Area</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Client Testimonial
                </h2>
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700">
                “Our beach house feels like a true coastal retreat thanks to Jane’s incredible design. The light, airy spaces and beautiful ocean views make it our perfect getaway.” - The Thompson Family
                </blockquote>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </ScrollArea>
    </div>
  );
};
