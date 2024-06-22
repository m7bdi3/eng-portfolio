"use client";
import { NewsLetter } from "@/components/NewsLetter";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/gallary";
import { MainHeader } from "@/components/header";
import { Introduction } from "@/components/introduction";
import { ReachOut } from "@/components/reachOut";
export default function Home() {
  return (
    <>
      <MainHeader />
      <Introduction />
      <Services />
      <Gallery />
      <ReachOut />
      <NewsLetter />
    </>
  );
}
