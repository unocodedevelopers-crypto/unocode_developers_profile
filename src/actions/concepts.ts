"use server";

import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";
import { Concept } from "@/components/HomePageClient";

const getFilePath = () => path.join(process.cwd(), "data", "concepts.json");

const getConcepts = (): Concept[] => {
  const filePath = getFilePath();
  if (!fs.existsSync(filePath)) return [];
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (e) {
    return [];
  }
};

const saveConcepts = (concepts: Concept[]) => {
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

  const concepts = getConcepts();
  const newConcept: Concept = {
    id: crypto.randomUUID(),
    title,
    imageUrl,
  };

  concepts.push(newConcept);
  saveConcepts(concepts);
  
  revalidatePath("/");
  revalidatePath("/admin/projects"); // Concepts are managed on the projects page
  return { success: true };
}

export async function deleteConcept(id: string) {
  let concepts = getConcepts();
  concepts = concepts.filter((c) => c.id !== id);
  saveConcepts(concepts);
  
  revalidatePath("/");
  revalidatePath("/admin/projects");
  return { success: true };
}

export async function updateConcept(id: string, formData: FormData) {
  const title = formData.get("title") as string;
  const imageUrl = formData.get("imageUrl") as string;

  let concepts = getConcepts();
  const index = concepts.findIndex((c) => c.id === id);
  
  if (index !== -1) {
    concepts[index] = { 
      ...concepts[index], 
      title, 
      imageUrl,
    };
    saveConcepts(concepts);
  }
  
  revalidatePath("/");
  revalidatePath("/admin/projects");
  return { success: true };
}
