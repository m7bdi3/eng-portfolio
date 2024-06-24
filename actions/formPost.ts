"use server";
import { FormSchema } from "@/schema/schema";
import * as z from "zod";
import { prisma } from "@/lib/db";
export async function FormSubmittion(values: z.infer<typeof FormSchema>) {
  const validatedFields = FormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid input" };
  }

  const {
    fullName,
    email,
    description,
    location,
    phone,
    projectType,
    date,
    additionalInfo,
  } = validatedFields.data;

  const res = await prisma.projectForm.create({
    data: {
      fullName,
      email,
      description,
      location,
      phone,
      projectType,
      date,
      additionalInfo,
    },
  });

  if (!res) {
    return { error: "Something went wrong" };
  }

  return { success: true };
}
