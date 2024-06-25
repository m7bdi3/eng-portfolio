"use client";

import { useProjects } from "@/lib/mails";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { format, toDate } from "date-fns";

export function ProjectsCard() {
  const projects = useProjects((state) => state);

  return (
    <div className="h-full">
      {projects.projects?.map((project) => {
        return (
          <div key={project.id}>
            <Card className="w-full">
              <CardHeader className="flex flex-row w-full justify-between">
                <div className="w-full flex gap-2 items-center">
                  <p className="text-lg font-bold text-primary">Name:</p>
                  <p className="text-lg font-bold">{project.fullName}</p>
                </div>
                <div className="w-full flex gap-2 items-center justify-center">
                  <p className="text-lg font-bold text-primary">Tel:</p>
                  <p className="text-lg font-medium">{project.phone}</p>
                </div>
                <div className="w-full flex gap-2 justify-center">
                  <p className="text-lg font-bold text-primary">Location:</p>
                  <p className="text-lg font-medium">{project.location}</p>
                </div>
                <div className="w-full flex gap-2 items-center justify-end">
                  <p className="text-lg font-bold text-primary">Date:</p>
                  <p className="text-lg font-medium">
                    {format(toDate(project.date), "PPP")}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="w-full flex justify-between">
                <div className="w-full flex gap-2 items-center">
                  <p className="text-lg font-bold text-primary">
                    Project type:
                  </p>
                  <p className="text-lg font-medium">{project.projectType}</p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4 w-full">
                <div className="w-full flex flex-col gap-2 items-start">
                  <p className="text-lg font-bold text-primary">Description:</p>
                  <p className="text-base font-medium flex-1">
                    {project.description}
                  </p>
                </div>
                <div className="w-full flex flex-col gap-2 items-start">
                  <p className="text-lg font-bold text-primary">Notes:</p>
                  <p className="text-base flex-1 font-medium">
                    {project.additionalInfo}
                  </p>
                </div>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
