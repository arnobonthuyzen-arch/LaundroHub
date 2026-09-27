"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import type { ActionState } from "@/lib/types";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  phone: z.string().trim().min(8, "Please enter a valid phone number (at least 8 digits)"),
  email: z.string().trim().email("Please enter a valid email address").optional().or(z.literal("")),
  accountType: z.string().min(1, "Please select an account or inquiry category"),
  service: z.string().min(1, "Please select a service"),
  estimatedVolume: z.string().min(1, "Please select an estimated load size"),
  message: z.string().trim().max(1000, "Notes must not exceed 1000 characters").optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export async function submitContactForm(
  _prevState: ActionState | null,
  formData: FormData
): Promise<ActionState> {
  const rawData = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    accountType: formData.get("accountType") || "Commercial",
    service: formData.get("service"),
    estimatedVolume: formData.get("estimatedVolume"),
    message: formData.get("message"),
  };

  const validationResult = contactFormSchema.safeParse(rawData);

  if (!validationResult.success) {
    return {
      success: false,
      error: "Please complete all required fields.",
      fieldErrors: validationResult.error.flatten().fieldErrors,
    };
  }

  const { data } = validationResult;

  // In production, dispatch notification via email / SMS webhook / CRM API
  console.info("[Contact Us Inquiry Received]", {
    timestamp: new Date().toISOString(),
    lead: data,
  });

  revalidatePath("/contact");

  return {
    success: true,
    message: `Thank you, ${data.name}! We've received your ${data.accountType} inquiry for ${data.service}. Our team will review your requirements and get in touch with you directly on ${data.phone}.`,
  };
}
