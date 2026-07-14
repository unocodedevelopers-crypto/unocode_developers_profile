import fs from "fs";
import path from "path";
import ProjectsClient from "./ProjectsClient";
import { Project, Concept } from "@/components/HomePageClient";

async function getProjects(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), "data", "projects.json");
  if (!fs.existsSync(filePath)) return [];
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (e) {
    return [];
  }
}

async function getConcepts(): Promise<Concept[]> {
  const filePath = path.join(process.cwd(), "data", "concepts.json");
  if (!fs.existsSync(filePath)) return [];
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (e) {
    return [];
  }
}

export default async function AdminProjectsPage() {
  const projects = await getProjects();
  const concepts = await getConcepts();
  return <ProjectsClient initialProjects={projects} initialConcepts={concepts} />;
}
