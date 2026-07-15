"use server";

import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";
import { kv } from "@vercel/kv";

export type BioEntry = {
  id: string;
  greeting: string;
  text: string;
  closing: string;
  imageUrl?: string;
};

const getFilePath = () => path.join(process.cwd(), "data", "bio.json");

export const getBioEntries = async (): Promise<BioEntry[]> => {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const data = await kv.get<BioEntry[]>("bio");
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

const saveBioEntries = async (entries: BioEntry[]) => {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      await kv.set("bio", entries);
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

export async function addBio(formData: FormData) {
  const greeting = formData.get("greeting") as string;
  const text = formData.get("text") as string;
  const closing = formData.get("closing") as string;
  const imageUrl = formData.get("imageUrl") as string;

  if (!greeting || !text) return { error: "Greeting and text are required" };

  const entries = await getBioEntries();
  const newEntry: BioEntry = {
    id: crypto.randomUUID(),
    greeting,
    text,
    closing,
    imageUrl: imageUrl || undefined,
  };

  entries.push(newEntry);
  await saveBioEntries(entries);
  
  revalidatePath("/");
  revalidatePath("/admin/bio");
  return { success: true };
}

export async function deleteBio(id: string) {
  let entries = await getBioEntries();
  entries = entries.filter((e) => e.id !== id);
  await saveBioEntries(entries);
  
  revalidatePath("/");
  revalidatePath("/admin/bio");
  return { success: true };
}

export async function updateBio(id: string, formData: FormData) {
  const greeting = formData.get("greeting") as string;
  const text = formData.get("text") as string;
  const closing = formData.get("closing") as string;
  const imageUrl = formData.get("imageUrl") as string;

  let entries = await getBioEntries();
  const index = entries.findIndex((e) => e.id === id);
  
  if (index !== -1) {
    entries[index] = { 
      ...entries[index], 
      greeting, 
      text,
      closing,
      imageUrl: imageUrl || undefined 
    };
    await saveBioEntries(entries);
  }
  
  revalidatePath("/");
  revalidatePath("/admin/bio");
  return { success: true };
}
