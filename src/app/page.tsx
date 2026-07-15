import fs from "fs";
import path from "path";
import HomePageClient, { Testimonial, Project, Concept, BioEntry } from "@/components/HomePageClient";

async function getTestimonials(): Promise<Testimonial[]> {
  const filePath = path.join(process.cwd(), "data", "testimonials.json");
  if (!fs.existsSync(filePath)) return [];
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (e) {
    return [];
  }
}

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

async function getBioEntries(): Promise<BioEntry[]> {
  const filePath = path.join(process.cwd(), "data", "bio.json");
  if (!fs.existsSync(filePath)) return [];
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (e) {
    return [];
  }
}

export default async function Page() {
  const testimonials = await getTestimonials();
  const projects = await getProjects();
  const concepts = await getConcepts();
  const bioEntries = await getBioEntries();
  
  return <HomePageClient testimonials={testimonials} projects={projects} concepts={concepts} bioEntries={bioEntries} />;
}
