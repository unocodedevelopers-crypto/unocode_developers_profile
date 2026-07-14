"use server";

import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";
import { Testimonial } from "@/components/HomePageClient";

const getFilePath = () => path.join(process.cwd(), "data", "testimonials.json");

const getTestimonials = (): Testimonial[] => {
  const filePath = getFilePath();
  if (!fs.existsSync(filePath)) return [];
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (e) {
    return [];
  }
};

const saveTestimonials = (testimonials: Testimonial[]) => {
  fs.writeFileSync(getFilePath(), JSON.stringify(testimonials, null, 2));
};

export async function addTestimonial(formData: FormData) {
  const name = formData.get("name") as string;
  const company = formData.get("company") as string;
  const text = formData.get("text") as string;
  const imageUrl = formData.get("imageUrl") as string;

  if (!name || !text) return { error: "Name and text are required" };

  const testimonials = getTestimonials();
  const newTestimonial: Testimonial = {
    id: crypto.randomUUID(),
    name,
    company: company || "",
    text,
    imageUrl: imageUrl || undefined,
  };

  testimonials.push(newTestimonial);
  saveTestimonials(testimonials);
  
  revalidatePath("/");
  revalidatePath("/admin/testimonials");
  return { success: true };
}

export async function deleteTestimonial(id: string) {
  let testimonials = getTestimonials();
  testimonials = testimonials.filter((t) => t.id !== id);
  saveTestimonials(testimonials);
  
  revalidatePath("/");
  revalidatePath("/admin/testimonials");
  return { success: true };
}

export async function updateTestimonial(id: string, formData: FormData) {
  const name = formData.get("name") as string;
  const company = formData.get("company") as string;
  const text = formData.get("text") as string;
  const imageUrl = formData.get("imageUrl") as string;

  let testimonials = getTestimonials();
  const index = testimonials.findIndex((t) => t.id === id);
  
  if (index !== -1) {
    testimonials[index] = { 
      ...testimonials[index], 
      name, 
      company, 
      text,
      imageUrl: imageUrl || undefined 
    };
    saveTestimonials(testimonials);
  }
  
  revalidatePath("/");
  revalidatePath("/admin/testimonials");
  return { success: true };
}
