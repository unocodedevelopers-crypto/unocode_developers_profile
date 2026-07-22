import type { Metadata } from "next";
import { getProjects } from "@/actions/projects";
import ProjectsPageClient from "@/components/ProjectsPageClient";

export const metadata: Metadata = {
  title: "Web Design Portfolio & Case Studies Madurai | Unocode Developers",
  description: "Explore custom web applications, e-commerce websites, and high-end digital projects developed by Unocode Developers in Madurai, TN.",
  keywords: [
    "Web Design Portfolio Madurai",
    "Web Development Projects",
    "Next.js Portfolio",
    "Ecommerce Websites Madurai",
    "Unocode Developers Projects"
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Web Design Portfolio & Case Studies Madurai | Unocode Developers",
    description: "Explore custom web applications, high-end websites, and digital projects created by Unocode Developers.",
    url: "/projects",
  },
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  
  return <ProjectsPageClient projects={projects} />;
}
