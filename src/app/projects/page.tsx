import type { Metadata } from "next";
import { getProjects } from "@/actions/projects";
import ProjectsPageClient from "@/components/ProjectsPageClient";

export const metadata: Metadata = {
  title: "Projects & Portfolio",
  description: "Explore custom web applications, high-end websites, and digital projects created by Unocode Developers.",
  openGraph: {
    title: "Projects & Portfolio | Unocode Developers",
    description: "Explore custom web applications, high-end websites, and digital projects created by Unocode Developers.",
    url: "/projects",
  },
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  
  return <ProjectsPageClient projects={projects} />;
}
