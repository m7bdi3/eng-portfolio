import { cn } from "@/lib/utils";
import Link from "next/link";
type Props = {
  className?: string;
};
export const Navbar = ({ className }: Props) => {
  return (
    <nav
      className={cn(
        "w-full h-16 rounded-b-lg bg-transparent max-w-[95%] mx-auto absolute z-[1000] top-0 left-0 right-0.5 flex items-center justify-between gap-x-2 pl-4 ",
        className
      )}
    >
      <div className="w-full flex-1">
        <Link href={"/"} className="text-primary text-4xl font-bold">
          Brand
        </Link>
      </div>
      <div className="md:flex gap-4 items-center hidden">
        <Link
          href={"/about"}
          className="text-xl font-medium text-primary hover:underline cursor-pointer underline-offset-4"
        >
          About
        </Link>
        <Link
          href={"/portfolio"}
          className="text-xl font-medium text-primary hover:underline cursor-pointer underline-offset-4"
        >
          Portfolio
        </Link>
        <Link
          href={"/services"}
          className="text-xl font-medium text-primary hover:underline cursor-pointer underline-offset-4"
        >
          Services
        </Link>

        <Link
          href={"/contact"}
          className="text-xl font-medium text-primary hover:underline cursor-pointer underline-offset-4"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};
