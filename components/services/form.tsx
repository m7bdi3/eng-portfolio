"use client";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { FormSchema } from "@/schema/schema";
import { FormSubmittion } from "@/actions/formPost";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { FormError } from "./form-error";

import { motion } from "framer-motion";

const inputVariants = {
  focus: { scale: 1.05, borderColor: "#007AFF" },
  blur: { scale: 1, borderColor: "#ccc" },
};

export const FormSubmitComponent = () => {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      projectType: "Commercial Design",
      description: "",
      location: "",
      date: new Date(),
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    setError("");
    const result = FormSchema.safeParse(values);
    if (!result.success) {
      setError("Validation failed");
      return;
    }
    startTransition(() => {
      console.log(result.data);
      FormSubmittion(values)
        .then(async (data) => {
          if (data?.error) {
            setError(data.error);
          } else {
            form.reset();
          }
        })
        .catch(() => {
          setError("Something went wrong");
        });
    });
  };

  return (
    <Form {...form}>
      <div className="border border-dashed mt-20 space-y-8 py-8 rounded-xl px-12">
        <h2 className="text-xl md:text-2xl lg:text-4xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-primary">
          Let&apos;s Discuss Your Project
        </h2>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full items-center justify-center "
        >
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="rounded-md">
                    <Input
                      disabled={isPending}
                      placeholder="Enter your full name"
                      className="p-2 border rounded"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
          </div>
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="rounded-md">
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="Enter your Email"
                      className="p-2 border rounded"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
          </div>
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="rounded-md">
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="Enter your Phone number"
                      className="p-2 border rounded"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
          </div>
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="projectType"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the type of inquiry" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Residential Design">
                        Residential Design
                      </SelectItem>
                      <SelectItem value="Commercial Design">
                        Commercial Design
                      </SelectItem>
                      <SelectItem value="Interior Design">
                        Interior Design
                      </SelectItem>
                      <SelectItem value="Project Consultation">
                        Project Consultation
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
          </div>
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="rounded-md">
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="Enter the location of your project"
                      className="p-2 border rounded"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
          </div>
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <Popover>
                    <PopoverTrigger asChild className="w-full">
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date);
                        }}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
          </div>
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="rounded-md">
                    <Textarea
                      disabled={isPending}
                      {...field}
                      placeholder="Provide a brief description of your project"
                      className="p-2 border rounded"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
          </div>
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="rounded-md">
                    <Textarea
                      disabled={isPending}
                      {...field}
                      placeholder="Please provide any additional information"
                      className="p-2 border rounded w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
          </div>

          <Button
            disabled={isPending}
            type="submit"
            className="col-span-full bg-primary text-white hover:bg-accent hover:text-neutral-600 p-2 rounded"
          >
            Submit
          </Button>
        </form>
      </div>
    </Form>
  );
};
