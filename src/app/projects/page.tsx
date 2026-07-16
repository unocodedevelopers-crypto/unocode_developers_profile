import { getProjects } from "@/actions/projects";
import ProjectsPageClient from "@/components/ProjectsPageClient";

export default async function ProjectsPage() {
  const projects = await getProjects();
  
  return <ProjectsPageClient projects={projects} />;
}
