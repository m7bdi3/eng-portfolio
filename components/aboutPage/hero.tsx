import React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export default function AboutHero() {
  return (
    <div className="relative">
      <section className="relative max-w-full mx-auto z-1">
        <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 md:px-8">
          <div className="space-y-5 max-w-3xl leading-0  lg:leading-5 mx-auto text-center">
            <h1 className="text-sm text-gray-400 group  mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit">
              Build projects for everyone
              <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </h1>

            <h2 className="text-4xl font-medium tracking-tighter mx-auto md:text-6xl">
              Designing your projects faster with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-primary">
                the best archticutre solutions.
              </span>
            </h2>

            <p className="max-w-2xl mx-auto">
              Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <Button
              size={"lg"}
              className="text-2xl p-8 shadow-lg"
              variant={"outline"}
            >
              See our products
            </Button>
          </div>
          <div className="mt-32 mx-10">
            <img
              src="/interior.jpg"
              className="w-full shadow-lg rounded-lg border"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
