import { getAboutSections, AboutSection } from "@/actions/about";
import AboutClient from "./AboutClient";

export default async function AdminAboutPage() {
  const entries = await getAboutSections();
  return <AboutClient initialEntries={entries} />;
}
