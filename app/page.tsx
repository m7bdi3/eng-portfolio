"use client";
import { NewsLetter } from "@/components/homePage/NewsLetter";
import { Services } from "@/components/homePage/Services";
import { Gallery } from "@/components/homePage/gallary";
import { MainHeader } from "@/components/homePage/header";
import { Introduction } from "@/components/homePage/introduction";
import { ReachOut } from "@/components/homePage/reachOut";
export default function Home() {
  return (
    <div className="space-y-[16rem]">
      <MainHeader />
      <Introduction />
      <Services />
      <NewsLetter />
      <Gallery />
      <ReachOut />
    </div>
  );
}
