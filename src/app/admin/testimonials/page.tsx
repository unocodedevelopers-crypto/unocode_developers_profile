import fs from "fs";
import path from "path";
import TestimonialsClient from "./TestimonialsClient";
import { Testimonial } from "@/components/HomePageClient";

async function getTestimonials(): Promise<Testimonial[]> {
  const filePath = path.join(process.cwd(), "data", "testimonials.json");
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const fileData = fs.readFileSync(filePath, "utf-8");
  try {
    return JSON.parse(fileData);
  } catch (e) {
    return [];
  }
}

export default async function AdminTestimonialsPage() {
  const testimonials = await getTestimonials();
  return <TestimonialsClient initialTestimonials={testimonials} />;
}
