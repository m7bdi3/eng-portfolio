import { GoogleMapComponent } from "@/components/contact/GoogleMaps";
import ContactForm from "@/components/contact/contact";
import React from "react";

export default function ContactPage() {
  return (
    <div className="h-full container space-y-12">
      <GoogleMapComponent />
      <ContactForm />
    </div>
  );
}
