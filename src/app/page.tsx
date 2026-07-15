import { getTestimonials } from "@/actions/testimonials";
import { getProjects } from "@/actions/projects";
import { getConcepts } from "@/actions/concepts";
import { getBioEntries } from "@/actions/bio";
import HomePageClient from "@/components/HomePageClient";

export default async function Page() {
  const testimonials = await getTestimonials();
  const projects = await getProjects();
  const concepts = await getConcepts();
  const bioEntries = await getBioEntries();
  
  return <HomePageClient testimonials={testimonials} projects={projects} concepts={concepts} bioEntries={bioEntries} />;
}
