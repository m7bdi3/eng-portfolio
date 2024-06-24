"use client";
import React from "react";
import Wave from "react-wavify";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="relative w-full">
      <footer className="relative w-full bg-primary text-white pt-20 pb-6 px-6">
        <Wave
          paused={false}
          style={{
            display: "flex",
            transform: "rotate(180deg)",
          }}
          options={{
            height: 20,
            amplitude: 40,
            points: 3,
          }}
          className="absolute top-0 left-0 w-full h-[80px]"
        />
        <div className="flex flex-col items-center justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl">
            <Link href="/" className="self-start w-full">
              <h1 className="text-white text-4xl font-bold">Brand</h1>
            </Link>

            <div className="w-full flex flex-col md:flex-row items-center justify-evenly">
              <div className="flex flex-col justify-center gap-2 w-full md:w-auto">
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

              <div className="flex flex-col gap-2 justify-center w-full md:w-auto">
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
          <p className="text-muted-foreground text-xs md:text-sm mt-4 text-center w-full">
            © <a href="https://github.com/m7bdi3">m7bdi3</a>. All rights
            reserved. 2024-present.
          </p>
        </div>
      </footer>
    </div>
  );
};