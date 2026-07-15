"use server";

import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";
import { Testimonial } from "@/components/HomePageClient";
import { kv } from "@vercel/kv";

const getFilePath = () => path.join(process.cwd(), "data", "testimonials.json");

export const getTestimonials = async (): Promise<Testimonial[]> => {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const data = await kv.get<Testimonial[]>("testimonials");
      if (data) return data;
    } catch (e) {
      console.error("KV get error", e);
    }
  }

  const filePath = getFilePath();
  if (!fs.existsSync(filePath)) return [];
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (e) {
    return [];
  }
};

const saveTestimonials = async (testimonials: Testimonial[]) => {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      await kv.set("testimonials", testimonials);
      return;
    } catch (error) {
      console.error("Failed to write to KV", error);
    }
  }

  try {
    fs.writeFileSync(getFilePath(), JSON.stringify(testimonials, null, 2));
  } catch (error) {
    console.error("Failed to write to file system. Note: Vercel has a read-only filesystem.", error);
  }
};

export async function addTestimonial(formData: FormData) {
  const name = formData.get("name") as string;
  const company = formData.get("company") as string;
  const text = formData.get("text") as string;
  const imageUrl = formData.get("imageUrl") as string;

  if (!name || !text) return { error: "Name and text are required" };

  const testimonials = await getTestimonials();
  const newTestimonial: Testimonial = {
    id: crypto.randomUUID(),
    name,
    company: company || "",
    text,
    imageUrl: imageUrl || undefined,
  };

  testimonials.push(newTestimonial);
  await saveTestimonials(testimonials);
  
  revalidatePath("/");
  revalidatePath("/admin/testimonials");
  return { success: true };
}

export async function deleteTestimonial(id: string) {
  let testimonials = await getTestimonials();
  testimonials = testimonials.filter((t) => t.id !== id);
  await saveTestimonials(testimonials);
  
  revalidatePath("/");
  revalidatePath("/admin/testimonials");
  return { success: true };
}

export async function updateTestimonial(id: string, formData: FormData) {
  const name = formData.get("name") as string;
  const company = formData.get("company") as string;
  const text = formData.get("text") as string;
  const imageUrl = formData.get("imageUrl") as string;

  let testimonials = await getTestimonials();
  const index = testimonials.findIndex((t) => t.id === id);
  
  if (index !== -1) {
    testimonials[index] = { 
      ...testimonials[index], 
      name, 
      company, 
      text,
      imageUrl: imageUrl || undefined 
    };
    await saveTestimonials(testimonials);
  }
  
  revalidatePath("/");
  revalidatePath("/admin/testimonials");
  return { success: true };
}
