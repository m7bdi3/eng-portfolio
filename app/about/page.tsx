import React from "react";
import AboutHero from "@/components/aboutPage/hero";
import { History } from "@/components/aboutPage/history";
import { Team } from "@/components/aboutPage/team";
import { Vision } from "@/components/aboutPage/vision";

export default function AboutPage() {
  return (
    <div className="h-full container">
      <AboutHero />
      <History />
      <Team />
      <Vision />
    </div>
  );
}
