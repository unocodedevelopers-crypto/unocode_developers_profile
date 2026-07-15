import fs from "fs";
import path from "path";
import BioClient from "./BioClient";
import { BioEntry } from "@/actions/bio";

async function getBioEntries(): Promise<BioEntry[]> {
  const filePath = path.join(process.cwd(), "data", "bio.json");
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const fileData = fs.readFileSync(filePath, "utf-8");
  try {
    return JSON.parse(fileData);
  } catch (e) {
    return [];
  }
}

export default async function AdminBioPage() {
  const entries = await getBioEntries();
  return <BioClient initialEntries={entries} />;
}
