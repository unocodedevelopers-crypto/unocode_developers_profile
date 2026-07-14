"use server";

import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    // Honeypot field (should be empty)
    const website = formData.get("website");

    if (website) {
      // Bot detected, silently ignore
      return { success: true };
    }

    if (!name || !email || !message) {
      return { error: "Name, email, and message are required." };
    }

    const newMessage = {
      id: crypto.randomUUID(),
      name,
      email,
      phone: phone || "",
      message,
      date: new Date().toISOString(),
      status: "Unread",
    };

    const filePath = path.join(process.cwd(), "data", "messages.json");
    
    // Read existing messages
    let messages = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf-8");
      messages = JSON.parse(fileData);
    }
    
    // Add new message at the beginning
    messages.unshift(newMessage);
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

    // Revalidate the admin dashboard so the new message shows up immediately
    revalidatePath("/admin");

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { error: "Failed to submit message. Please try again later." };
  }
}
