"use server";

import { prisma } from "@/lib/db";
import React from "react";

export default async function getInquire() {
  const inquires = await prisma.projectForm.findMany();

  return inquires;
}
