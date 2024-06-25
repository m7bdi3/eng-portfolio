"use client";

import { ProjectForm } from "@prisma/client";
import React, { useEffect, useRef } from "react";
import { useProjects } from "./mails";

export default function InitProjects({
  projects,
}: {
  projects: ProjectForm[] | undefined;
}) {
  const initState = useRef(false);
  useEffect(() => {
    if (!initState.current) {
      useProjects.setState({ projects });
    }
    initState.current = true;
    //eslint-disable-next-line
  }, []);
  return <></>;
}
