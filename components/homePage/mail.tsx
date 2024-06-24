"use client";
import React from "react";

export const MailReach = () => {
  return (
    <section className=" border p-4 h-full max-w-4xl mx-auto rounded-lg">
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
            className="flex items-center justify-center bg-white rounded-lg p-1 sm:max-w-md sm:mx-auto ocus-within:outline-none focus-within:ring-2 focus-within:ring-gray-500"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="text-gray-500 w-full p-2 outline-none border-none active:border-none focus:outline-none focus:ring-0 focus:border-none"
            />
            <button className="p-2  rounded-lg font-medium bg-gradient-to-br from-zinc-400 to-zinc-700 px-4 py-2 text-lg text-zinc-50 ring-2 ring-white   transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-zinc-500/70  duration-150 outline-none shadow-md focus:shadow-none sm:px-4">
              Subscribe
            </button>
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
