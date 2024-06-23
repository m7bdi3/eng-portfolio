import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CheckIcon } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export default function PricingSectionCards() {
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

  return (
    <div className="relative flex h-full w-full items-center justify-center" ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="grid lg:grid-cols-4 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-4 gap-4"
      >
        
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: [null, 0.9, 1.05] }}
          transition={{ duration: 0.3 }}
        >
          <Card className="h-full w-full">
            <CardHeader className="text-center pb-2">
              <CardTitle className="mb-7">Free</CardTitle>
              <span className="font-bold text-5xl">Free</span>
            </CardHeader>
            <CardDescription className="text-center">
              Forever free
            </CardDescription>
            <CardContent>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">1 user</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Plan features</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Product support</span>
                </li>
              </ul>
            </CardContent>
           
          </Card>
        </motion.div>
        
        
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: [null, 0.9, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <Card className="border-primary h-full">
            <CardHeader className="text-center pb-2">
              <Badge className="uppercase w-max self-center mb-3">
                Most popular
              </Badge>
              <CardTitle className="!mb-7">Startup</CardTitle>
              <span className="font-bold text-5xl">£39</span>
            </CardHeader>
            <CardDescription className="text-center w-11/12 mx-auto">
              All the basics for starting a new business
            </CardDescription>
            <CardContent>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">2 user</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Plan features</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Product support</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
        
        
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: [null, 0.9, 1.05] }}
          transition={{ duration: 0.3 }}
        >
          <Card className="h-full">
            <CardHeader className="text-center pb-2">
              <CardTitle className="mb-7">Team</CardTitle>
              <span className="font-bold text-5xl">£89</span>
            </CardHeader>
            <CardDescription className="text-center  w-11/12 mx-auto">
              Everything you need for a growing business
            </CardDescription>
            <CardContent>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">5 user</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Plan features</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Product support</span>
                </li>
              </ul>
            </CardContent>
           
          </Card>
        </motion.div>
        
        
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: [null, 0.9, 1.05] }}
          transition={{ duration: 0.3 }}
        >
          <Card className="h-full">
            <CardHeader className="text-center pb-2">
              <CardTitle className="mb-7">Enterprise</CardTitle>
              <span className="font-bold text-5xl">149</span>
            </CardHeader>
            <CardDescription className="text-center  w-11/12 mx-auto">
              Advanced features for scaling your business
            </CardDescription>
            <CardContent>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">10 user</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Plan features</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Product support</span>
                </li>
              </ul>
            </CardContent>
            
          </Card>
        </motion.div>
        
      </motion.div>
    </div>
  );
}
