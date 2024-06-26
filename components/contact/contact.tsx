"use client";

import {
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, Loader2 } from "lucide-react";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
type FormType = {
  firstName: string;
  lastName?: string;
  email: string;
  message: string;
};
export default function ContactForm() {
  const [pending, startTransition] = useTransition();

  const [forms, setForms] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <section className="mx-auto z-20 ">
      <div className="relative z-10 max-w-4xl mx-auto space-y-4">
        <Card className="relative py-12 z-20">
          <CardHeader>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              Contact Us
            </h1>
            <CardDescription>
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4 z-20" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 z-20">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input
                    value={forms.firstName}
                    onChange={(e) => handleChange(e)}
                    name="firstName"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input
                    value={forms.lastName}
                    onChange={handleChange}
                    name="lastName"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  value={forms.email}
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter your email"
                  type="email"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  required
                  value={forms.message}
                  className="bg-transparent"
                  onChange={handleChange}
                  name="message"
                  maxLength={200}
                  placeholder="Enter your message"
                />
              </div>
              <Button
                disabled={pending}
                variant="default"
                className="p-6 text-lg text-white active:text-gray-800 hover:text-gray-800 hover:bg-accent"
              >
                Submit
                {pending ? (
                  <Loader2 className="animate-spin ml-3 w-4 h-4 flex items-center" />
                ) : (
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
