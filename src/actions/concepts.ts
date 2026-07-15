"use server";

import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";
import { Concept } from "@/components/HomePageClient";
import { kv } from "@vercel/kv";

const getFilePath = () => path.join(process.cwd(), "data", "concepts.json");

export const getConcepts = async (): Promise<Concept[]> => {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const data = await kv.get<Concept[]>("concepts");
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

const saveConcepts = async (concepts: Concept[]) => {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      await kv.set("concepts", concepts);
      return;
    } catch (error) {
      console.error("Failed to write to KV", error);
    }
  }

  try {
    fs.writeFileSync(getFilePath(), JSON.stringify(concepts, null, 2));
  } catch (error) {
    console.error("Failed to write to file system. Note: Vercel has a read-only filesystem.", error);
  }
};

export async function addConcept(formData: FormData) {
  const title = formData.get("title") as string;
  const imageUrl = formData.get("imageUrl") as string;

  if (!title || !imageUrl) return { error: "Title and image URL are required" };

  const concepts = await getConcepts();
  const newConcept: Concept = {
    id: crypto.randomUUID(),
    title,
    imageUrl,
  };

  concepts.push(newConcept);
  await saveConcepts(concepts);
  
  revalidatePath("/");
  revalidatePath("/admin/projects"); // Concepts are managed on the projects page
  return { success: true };
}

export async function deleteConcept(id: string) {
  let concepts = await getConcepts();
  concepts = concepts.filter((c) => c.id !== id);
  await saveConcepts(concepts);
  
  revalidatePath("/");
  revalidatePath("/admin/projects");
  return { success: true };
}

export async function updateConcept(id: string, formData: FormData) {
  const title = formData.get("title") as string;
  const imageUrl = formData.get("imageUrl") as string;

  let concepts = await getConcepts();
  const index = concepts.findIndex((c) => c.id === id);
  
  if (index !== -1) {
    concepts[index] = { 
      ...concepts[index], 
      title, 
      imageUrl,
    };
    await saveConcepts(concepts);
  }
  
  revalidatePath("/");
  revalidatePath("/admin/projects");
  return { success: true };
}
