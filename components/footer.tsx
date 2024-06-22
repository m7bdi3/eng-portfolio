"use client";
import React from "react";
import Wave from "react-wavify";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="relative h-fit w-full ">
      <footer className="relative h-[18rem] w-full flex px-6 bg-primary">
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
        <div className="flex-1 h-full flex items-end justify-end">
          <div className="grid md:grid-cols-[1.5fr_0.5fr_0.5fr] gap-12">
            <div className="grid gap-6 justify-start align-top">
              <Link href="/">
                <h1 className="text-white text-4xl font-bold">Brand</h1>
              </Link>
              <p>
                Qui et aliquid qui voluptatem. Quia minima ipsum laborum
                asperiores rerum iste voluptatum vel. Iste eos consectetur aut
                nesciunt consequuntur culpa autem. Quisquam voluptate natus
                eaque ipsum repudiandae commodi alias libero. Et nihil
                consequatur voluptas a ratione corporis nihil. Dolorum qui eum
                excepturi ut iure.
              </p>
              <p className="text-muted-foreground">
                © <a href="https://github.com/m7bdi3">m7bdi3</a>. All rights
                reserved. 2024-present.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <h5 className="text-xl font-semibold ">Website</h5>
              <Link href="/">Blog</Link>
              <Link href="/">Authors</Link>
              <Link href="/">Categories</Link>
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <h5 className="text-xl font-semibold">Legal</h5>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
              <Link href="/cookie-policy">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
