"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import type { ActionState } from "@/lib/types";

import { sendContactInquiryEmail } from "@/lib/mail";
import { saveContactInquiry } from "@/lib/db";

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
  try {
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

    // Save inquiry to MySQL / MariaDB
    let inquiryId: number | null = null;
    try {
      inquiryId = await saveContactInquiry(data);
    } catch (err) {
      console.error("[Database Error] Failed to save contact inquiry:", err);
    }

    // Dispatch notification email to info@laundro-hub.co.za
    const emailSent = await sendContactInquiryEmail(data);

    if (!inquiryId && !emailSent) {
      return {
        success: false,
        error:
          "We could not submit your inquiry right now. Please try again or reach us directly on WhatsApp.",
      };
    }

    console.info("[Contact Us Inquiry Received]", {
      timestamp: new Date().toISOString(),
      inquiryId,
      emailSent,
      lead: data,
    });

    try {
      revalidatePath("/contact");
    } catch (err) {
      console.warn("[revalidatePath] Warning:", err);
    }

    return {
      success: true,
      message: `Thank you, ${data.name}! We've received your ${data.accountType} inquiry for ${data.service}. Our team will review your requirements and get in touch with you directly on ${data.phone}.`,
    };
  } catch (err) {
    console.error("[submitContactForm Unexpected Error]", err);
    return {
      success: false,
      error:
        "Something went wrong while sending your inquiry. Please try again or WhatsApp us on 064 830 8785.",
    };
  }
}
