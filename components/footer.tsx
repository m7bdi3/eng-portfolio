"use client";
import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative w-full bg-primary p-6 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl">
        <Link href="/" className="self-start w-full">
          <h1 className="text-4xl font-bold">Brand</h1>
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
      <p className="text-neutral-500 text-xs md:text-sm mt-4 text-center w-full">
        © <a href="https://github.com/m7bdi3">m7bdi3</a>. All rights reserved.
        2024-present.
      </p>
    </footer>
  );
};
