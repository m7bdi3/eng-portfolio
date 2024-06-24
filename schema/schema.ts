import * as z from "zod";

export const FormSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  projectType: z.enum(
    [
      "Residential Design",
      "Commercial Design",
      "Interior Design",
      "Project Consultation",
    ],
    {
      required_error: "Project type is required",
    }
  ),
  description: z
    .string()
    .min(1, { message: "Project description is required" }),
  location: z.string().min(1, { message: "Project location is required" }),
  date: z.date({
    required_error: "Date is required",
    invalid_type_error: "That's not a date!",
  }),
  additionalInfo: z.string().optional(),
});
