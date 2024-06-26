"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const MailReach = () => {
  return (
    <section className="border-dashed border p-4 h-full max-w-4xl mx-auto">
      <div className="relative z-10  mx-auto sm:text-center max-w-2xl">
        <div className="space-y-3">
          <h3 className="text-3xl  font-bold tracking-tighter ">
            Subscribe to our newsletter
          </h3>
          <hr className="w-1/2 h-[1px] mx-auto mb-5" />
          <p className="text-gray-600 leading-relaxed">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
        </div>
        <div className="mt-6">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center justify-center rounded-lg p-1 sm:max-w-md sm:mx-auto ocus-within:outline-none focus-within:ring-2 focus-within:ring-gray-500"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="text-gray-500 w-full p-2 outline-none border-none active:border-none focus:outline-none focus:ring-0 focus:border-none"
            />
            <Button>Subscribe</Button>
          </form>
          <p className="mt-5 max-w-lg text-[15px] text-gray-500 sm:mx-auto">
            No spam ever, we are care about the protection of your data. Read
            our{" "}
            <a className="underline" href="javascript:void(0)">
              {" "}
              Privacy Policy{" "}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
