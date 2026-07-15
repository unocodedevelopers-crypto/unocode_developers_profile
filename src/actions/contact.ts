"use server";

import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";
import { kv } from "@vercel/kv";

type Message = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  status: string;
};

const getFilePath = () => path.join(process.cwd(), "data", "messages.json");

export const getMessages = async (): Promise<Message[]> => {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const data = await kv.get<Message[]>("messages");
      if (data) return data;
    } catch (e) {
      console.error("KV get error", e);
    }
  }

  const filePath = getFilePath();
  if (!fs.existsSync(filePath)) return [];
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (e) {
    return [];
  }
};

const saveMessages = async (messages: Message[]) => {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      await kv.set("messages", messages);
      return;
    } catch (error) {
      console.error("Failed to write to KV", error);
    }
  }

  try {
    fs.writeFileSync(getFilePath(), JSON.stringify(messages, null, 2));
  } catch (writeError) {
    console.error("Failed to write message to file system. Note: Vercel has a read-only filesystem.", writeError);
  }
};

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    // Honeypot field (should be empty)
    const website = formData.get("website") as string;

    if (website) {
      // Bot detected, silently ignore
      return { success: true };
    }

    if (!name || !email || !message) {
      return { error: "Name, email, and message are required." };
    }

    const newMessage: Message = {
      id: crypto.randomUUID(),
      name,
      email,
      phone: phone || "",
      message,
      date: new Date().toISOString(),
      status: "Unread",
    };

    let messages = await getMessages();
    
    // Add new message at the beginning
    messages.unshift(newMessage);
    
    await saveMessages(messages);

    // Revalidate the admin dashboard so the new message shows up immediately
    revalidatePath("/admin");

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { error: "Failed to submit message. Please try again later." };
  }
}

export async function deleteMessage(id: string) {
  let messages = await getMessages();
  messages = messages.filter((m) => m.id !== id);
  await saveMessages(messages);
  revalidatePath("/admin/messages");
  return { success: true };
}
