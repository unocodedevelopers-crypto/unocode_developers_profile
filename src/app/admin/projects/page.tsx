import { getProjects } from "@/actions/projects";
import { getConcepts } from "@/actions/concepts";
import ProjectsClient from "./ProjectsClient";
import { Project, Concept } from "@/components/HomePageClient";

export default async function AdminProjectsPage() {
  const projects = await getProjects();
  const concepts = await getConcepts();
  return <ProjectsClient initialProjects={projects} initialConcepts={concepts} />;
}
