import React from "react";

export const Navbar = () => {
  return (
    <nav className="w-full h-16 rounded-b-lg bg-transparent max-w-[95%] mx-auto absolute z-[1000] top-0 left-0 right-0.5 flex items-center justify-between gap-x-2 pl-4 ">
      <div className="w-full flex-1">
        <h1 className="text-[#a36d3e] text-4xl font-bold">Brand</h1>
      </div>
      <div className="md:flex gap-4 items-center hidden" >
        <p className="text-xl text-primary hover:underline cursor-pointer underline-offset-4">
          About
        </p>
        <p className="text-xl text-primary hover:underline cursor-pointer underline-offset-4">
          Portfolio
        </p>
        <p className="text-xl text-primary hover:underline cursor-pointer underline-offset-4">
          Services
        </p>

        <p className="text-xl text-primary hover:underline cursor-pointer underline-offset-4">
          Contact
        </p>
      </div>
    </nav>
  );
};
