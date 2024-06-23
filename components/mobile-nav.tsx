import React from "react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ChevronRightIcon, Menu } from "lucide-react";

type Props = {
  className?: string;
};
export const MobileNavbar = ({ className }: Props) => {
  return (
    <nav
      className={cn(
        "w-full h-16 rounded-b-lg bg-transparent max-w-[95%] mx-auto absolute top-0 left-0 right-0.5 flex items-center justify-between gap-x-2 pl-4 z-[1000]",
        className
      )}
    >
      <div className="w-full flex-1">
        <h1 className=" text-primary text-4xl font-bold">Brand</h1>
      </div>
      <Sheet>
        <SheetTrigger>
          <Menu className=" text-primary z-[100]" />
        </SheetTrigger>
        <SheetContent className="z-[1000]  h-full flex flex-col " side={"left"}>
          <div className="w-full">
            <h1 className="text-primary text-4xl font-bold">Brand</h1>
          </div>
          <div className=" gap-10 flex flex-col items-start justify-start flex-1 mt-6">
            <p className="text-2xl font-medium hover:underline cursor-pointer underline-offset-4">
              About
            </p>
            <p className="text-2xl font-medium hover:underline cursor-pointer underline-offset-4">
              Portfolio
            </p>
            <p className="text-2xl font-medium hover:underline cursor-pointer underline-offset-4">
              Services
            </p>

            <p className="text-2xl font-medium hover:underline cursor-pointer underline-offset-4">
              Contact
            </p>
          </div>
          <p>
            <a
              className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4 "
              href="#"
            >
              Contact sales to learn more
              <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
            </a>
          </p>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
