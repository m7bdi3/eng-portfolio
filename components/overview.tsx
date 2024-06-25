"use client";

import { useProjects } from "@/lib/mails";
import { Card } from "./ui/card";
import { format, toDate } from "date-fns";
import { CellAction } from "./tables/employee-tables/cell-action";
import { cn } from "@/lib/utils";
import { CheckCircle2, CircleHelpIcon } from "lucide-react";

export function Overview() {
  const projects = useProjects((state) => state);

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full h-full">
      {projects.projects
        ?.slice()
        .reverse()
        .map((project) => {
          return (
            <div key={project.id}>
              <Card
                className={cn(
                  project.completed && project.opened
                    ? "bg-green-500/10"
                    : "bg-white",
                  project.opened && !project.completed
                    ? "bg-yellow-500/50"
                    : "bg-white",
                  "w-full h-fit flex p-4 hover:shadow-lg border relative"
                )}
              >
                <div className="flex-1">
                  <div className="w-full flex gap-2">
                    <p className=" font-medium text-primary">Date:</p>
                    <p className=" font-medium">
                      {format(toDate(project.date), "PPP")}
                    </p>
                  </div>
                  <div className="w-full flex gap-2">
                    <p className=" font-medium text-primary">Name:</p>
                    <p className=" font-medium">{project.fullName}</p>
                  </div>
                  <div className="w-full flex gap-2 items-center">
                    <p className=" font-medium text-primary">Location:</p>
                    <p className=" font-medium">{project.location}</p>
                  </div>
                </div>
                <div className="w-fit h-full flex flex-col items-center justify-end">
                  <CellAction data={project} />
                  {project.opened && !project.completed && (
                    <CircleHelpIcon className="w-4 h-4" />
                  )}
                  {project.opened && project.completed && (
                    <CheckCircle2 className="w-4 h-4" />
                  )}
                </div>
              </Card>
            </div>
          );
        })}
    </div>
  );
}
