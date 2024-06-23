"use client";
import React from "react";
import Wave from "react-wavify";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="relative h-fit w-full">
      <footer className="relative h-full w-full flex px-6 bg-primary pt-20 pb-6">
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
          className="absolute top-0 left-0 h-[80px]"
        />
        <div className=" h-full flex flex-col items-center justify-center">
          <Link href="/" className="self-start w-full">
            <h1 className="text-white text-4xl font-bold">Brand</h1>
          </Link>
          <div className="grid grid-cols-[1fr_2fr] gap-x-4 w-full">
            <div className="flex flex-col justify-start h-full mt-2">
              <p className="text-sm md:text-base font-medium">
                Qui et aliquid qui voluptatem. Quia minima ipsum laborum
                asperiores rerum iste voluptatum vel. Iste eos consectetur aut
                nesciunt consequuntur culpa autem.
              </p>
              <p className="text-muted-foreground text-xs md:text-sm absolute bottom-0 mx-auto">
                © <a href="https://github.com/m7bdi3">m7bdi3</a>. All rights
                reserved. 2024-present.
              </p>
            </div>

            <div className="w-full flex items-center justify-around">
              <div className="flex flex-col justify-center gap-2">
                <h5 className="text-xl font-semibold">Website</h5>
                <Link href="/" className="text-sm md:text-base font-medium">
                  Blog
                </Link>
                <Link href="/" className="text-sm md:text-base font-medium">
                  Authors
                </Link>
                <Link href="/" className="text-sm md:text-base font-medium">
                  Categories
                </Link>
              </div>

              <div className="flex flex-col gap-2 justify-center">
                <h5 className="text-xl font-semibold">Legal</h5>
                <Link
                  href="/privacy-policy"
                  className="text-sm md:text-base font-medium"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-sm md:text-base font-medium"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookie-policy"
                  className="text-sm md:text-base font-medium"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
