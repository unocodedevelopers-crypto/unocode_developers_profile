"use server";

import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";
import { Project } from "@/components/HomePageClient";

const getFilePath = () => path.join(process.cwd(), "data", "projects.json");

const getProjects = (): Project[] => {
  const filePath = getFilePath();
  if (!fs.existsSync(filePath)) return [];
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (e) {
    return [];
  }
};

const saveProjects = (projects: Project[]) => {
  try {
    fs.writeFileSync(getFilePath(), JSON.stringify(projects, null, 2));
  } catch (error) {
    console.error("Failed to write to file system. Note: Vercel has a read-only filesystem.", error);
  }
};

export async function addProject(formData: FormData) {
  const title = formData.get("title") as string;
  const descriptionText = formData.get("description") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const gradientFrom = formData.get("gradientFrom") as string || "#4a4a4a";
  const gradientTo = formData.get("gradientTo") as string || "#757575";

  if (!title || !descriptionText || !imageUrl) return { error: "Title, description, and image URL are required" };

  const description = descriptionText.split("\n").filter(d => d.trim() !== "");

  const projects = getProjects();
  const newProject: Project = {
    id: crypto.randomUUID(),
    title,
    description,
    imageUrl,
    gradientFrom,
    gradientTo
  };

  projects.push(newProject);
  saveProjects(projects);
  
  revalidatePath("/");
  revalidatePath("/admin/projects");
  return { success: true };
}

export async function deleteProject(id: string) {
  let projects = getProjects();
  projects = projects.filter((p) => p.id !== id);
  saveProjects(projects);
  
  revalidatePath("/");
  revalidatePath("/admin/projects");
  return { success: true };
}

export async function updateProject(id: string, formData: FormData) {
  const title = formData.get("title") as string;
  const descriptionText = formData.get("description") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const gradientFrom = formData.get("gradientFrom") as string;
  const gradientTo = formData.get("gradientTo") as string;

  let projects = getProjects();
  const index = projects.findIndex((p) => p.id === id);
  
  if (index !== -1) {
    const description = descriptionText.split("\n").filter(d => d.trim() !== "");
    projects[index] = { 
      ...projects[index], 
      title, 
      description,
      imageUrl,
      gradientFrom,
      gradientTo
    };
    saveProjects(projects);
  }
  
  revalidatePath("/");
  revalidatePath("/admin/projects");
  return { success: true };
}
