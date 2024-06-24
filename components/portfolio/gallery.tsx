"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Residential } from "./projects/Residential";
import { Commercial } from "./projects/Commercial";
import { Interior } from "./projects/Interior";
export default function PortfolioGallery() {
  return (
    <div className="h-screen container mx-auto flex flex-col items-center justify-start mt-[6rem]">
      <Tabs
        defaultValue="Residential"
        className="items-center justify-center flex flex-col"
      >
        <TabsList>
          <TabsTrigger value="Residential">Residential</TabsTrigger>
          <TabsTrigger value="Commercial">Commercial</TabsTrigger>
          <TabsTrigger value="Interior">Interior Design</TabsTrigger>
        </TabsList>
        <TabsContent
          value="Residential"
          className="h-[85svh] w-[85svw] rounded p-8"
        >
          <Residential />
        </TabsContent>
        <TabsContent
          value="Commercial"
          className="h-[85svh] w-[85svw] rounded p-8"
        >
          <Commercial />
        </TabsContent>
        <TabsContent
          value="Interior"
          className="h-[85svh] w-[85svw] rounded p-8"
        >
          <Interior />
        </TabsContent>
      </Tabs>
    </div>
  );
}
