import { getBioEntries, BioEntry } from "@/actions/bio";
import BioClient from "./BioClient";

export default async function AdminBioPage() {
  const entries = await getBioEntries();
  return <BioClient initialEntries={entries} />;
}
