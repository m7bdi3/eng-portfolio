"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function MarkAsComplete(id: number) {
  await prisma.projectForm.update({
    where: {
      id: id,
    },
    data: {
      completed: true,
    },
  });

  revalidatePath('dashboard','layout')
  revalidatePath('dashboard','page')
}
