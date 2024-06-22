"use client";
import React from "react";
import Wave from "react-wavify";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="relative h-96 w-full">
      <footer className="relative h-full w-full flex px-6 bg-primary">
        <Wave
          paused={true}
          style={{
            display: "flex",
            transform: "rotate(180deg)",
          }}
          options={{
            height: 10,
            amplitude: 100,
            points: 3,
          }}
          className="absolute top-0 left-0 h-[100px]"
        />
        <div className=" h-full flex flex-col items-center justify-center">
          <div className="grid grid-cols-[1.5fr_0.5fr_0.5fr]  w-full">
            <div className="flex flex-col justify-between h-full">
              <Link href="/">
                <h1 className="text-white text-4xl font-bold">Brand</h1>
              </Link>
              <p className="text-sm md:text-base">
                Qui et aliquid qui voluptatem. Quia minima ipsum laborum
                asperiores rerum iste voluptatum vel. Iste eos consectetur aut
                nesciunt consequuntur culpa autem. Quisquam voluptate natus
                eaque ipsum repudiandae commodi alias libero. Et nihil
                consequatur voluptas a ratione corporis nihil. Dolorum qui eum
                excepturi ut iure.
              </p>
              <p className="text-muted-foreground text-xs md:text-sm absolute bottom-0 left-0 w-full mx-auto">
                © <a href="https://github.com/m7bdi3">m7bdi3</a>. All rights
                reserved. 2024-present.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <h5 className="text-xl font-semibold">Website</h5>
              <Link href="/" className="text-sm md:text-base">
                Blog
              </Link>
              <Link href="/" className="text-sm md:text-base">
                Authors
              </Link>
              <Link href="/" className="text-sm md:text-base">
                Categories
              </Link>
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <h5 className="text-xl font-semibold">Legal</h5>
              <Link href="/privacy-policy" className="text-sm md:text-base">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm md:text-base">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-sm md:text-base">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
