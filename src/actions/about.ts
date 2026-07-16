"use server";

import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";
import { kv } from "@vercel/kv";

export type AboutSection = {
  id: string;
  title: string;
  content: string;
  order: number;
};

const getFilePath = () => path.join(process.cwd(), "data", "about.json");

export const getAboutSections = async (): Promise<AboutSection[]> => {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const data = await kv.get<AboutSection[]>("about");
      if (data) return data.sort((a, b) => a.order - b.order);
    } catch (e) {
      console.error("KV get error", e);
    }
  }

  const filePath = getFilePath();
  if (!fs.existsSync(filePath)) return [];
  try {
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8")) as AboutSection[];
    return data.sort((a, b) => a.order - b.order);
  } catch (e) {
    return [];
  }
};

const saveAboutSections = async (entries: AboutSection[]) => {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      await kv.set("about", entries);
      return;
    } catch (error) {
      console.error("Failed to write to KV", error);
    }
  }

  try {
    fs.writeFileSync(getFilePath(), JSON.stringify(entries, null, 2));
  } catch (error) {
    console.error("Failed to write to file system. Note: Vercel has a read-only filesystem.", error);
  }
};

export async function addAboutSection(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  if (!content) return { error: "Content is required" };

  const entries = await getAboutSections();
  const order = entries.length > 0 ? Math.max(...entries.map(e => e.order)) + 1 : 1;
  
  const newEntry: AboutSection = {
    id: crypto.randomUUID(),
    title: title || "",
    content,
    order,
  };

  entries.push(newEntry);
  await saveAboutSections(entries);
  
  revalidatePath("/about");
  revalidatePath("/admin/about");
  return { success: true };
}

export async function deleteAboutSection(id: string) {
  let entries = await getAboutSections();
  entries = entries.filter((e) => e.id !== id);
  await saveAboutSections(entries);
  
  revalidatePath("/about");
  revalidatePath("/admin/about");
  return { success: true };
}

export async function updateAboutSection(id: string, formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const orderStr = formData.get("order") as string;

  let entries = await getAboutSections();
  const index = entries.findIndex((e) => e.id === id);
  
  if (index !== -1) {
    entries[index] = { 
      ...entries[index], 
      title: title || "", 
      content,
      order: orderStr ? parseInt(orderStr, 10) : entries[index].order
    };
    await saveAboutSections(entries);
  }
  
  revalidatePath("/about");
  revalidatePath("/admin/about");
  return { success: true };
}
