import { ProjectForm } from "@prisma/client";
import { create } from "zustand";

interface ProjectsState {
  projects: ProjectForm[] | undefined;
}

export const useProjects = create<ProjectsState>()((set) => ({
  projects: [],
}));
