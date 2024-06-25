import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { UserNav } from "./user-nav";
import Link from "next/link";

export default function Header() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-14 items-center justify-between px-4">
        <div className="block">
          <Link href={"/"} target="_blank">
            <h1 className="text-xl md:text-2xl lg:text-4xl text-primary font-bold">
              Brand
            </h1>
          </Link>
        </div>
        
      </nav>
    </div>
  );
}
