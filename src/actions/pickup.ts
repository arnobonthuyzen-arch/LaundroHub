"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import type { ActionState } from "@/lib/types";

export const pickupRequestSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name (at least 2 characters)"),
  phone: z.string().trim().min(8, "Please enter a valid phone number (at least 8 digits)"),
  email: z.string().trim().email("Please enter a valid email address").optional().or(z.literal("")),
  suburb: z.string().trim().min(1, "Please select your Bloemfontein suburb"),
  address: z.string().trim().min(5, "Please enter your street address and unit/house number"),
  accessCode: z.string().trim().optional().or(z.literal("")),
  pickupDate: z.string().min(1, "Please choose your preferred collection date"),
  timeSlot: z.enum(["morning", "midday", "afternoon"], {
    errorMap: () => ({ message: "Please choose a pickup time window" }),
  }),
  services: z.string().min(1, "Please choose at least one laundry service"),
  estimatedBags: z.string().min(1, "Please select your estimated laundry volume"),
  detergentPreference: z.enum(["standard", "hypoallergenic", "extra-softener"]).default("standard"),
  packagingPreference: z.enum(["folded", "hangers", "mixed"]).default("folded"),
  speed: z.enum(["standard", "express"]).default("standard"),
  notes: z.string().trim().max(1000, "Notes must not exceed 1000 characters").optional().or(z.literal("")),
});

export type PickupRequestData = z.infer<typeof pickupRequestSchema>;

export interface PickupSuccessData {
  referenceNumber: string;
  name: string;
  phone: string;
  suburb: string;
  pickupDate: string;
  timeSlot: string;
  speed: string;
  whatsappConfirmationUrl: string;
}

export async function submitPickupRequest(
  _prevState: ActionState<PickupSuccessData> | null,
  formData: FormData
): Promise<ActionState<PickupSuccessData>> {
  const rawData = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    suburb: formData.get("suburb"),
    address: formData.get("address"),
    accessCode: formData.get("accessCode"),
    pickupDate: formData.get("pickupDate"),
    timeSlot: formData.get("timeSlot"),
    services: formData.get("services"),
    estimatedBags: formData.get("estimatedBags"),
    detergentPreference: formData.get("detergentPreference") || "standard",
    packagingPreference: formData.get("packagingPreference") || "folded",
    speed: formData.get("speed") || "standard",
    notes: formData.get("notes"),
  };

  const validationResult = pickupRequestSchema.safeParse(rawData);

  if (!validationResult.success) {
    return {
      success: false,
      error: "Please complete all required collection details.",
      fieldErrors: validationResult.error.flatten().fieldErrors,
    };
  }

  const { data } = validationResult;
  const referenceNumber = `LH-WASH-${Math.floor(1000 + Math.random() * 9000)}`;

  const timeSlotNames: Record<string, string> = {
    morning: "Morning (08:00 – 11:00)",
    midday: "Midday (11:00 – 14:00)",
    afternoon: "Afternoon (14:00 – 17:30)",
  };

  const speedNames: Record<string, string> = {
    standard: "Standard Turnaround (24–48 hrs)",
    express: "Express Same-Day Turnaround",
  };

  // Pre-formatted WhatsApp message for instant 1-tap confirmation
  const waText = encodeURIComponent(
    `Hello Laundro-Hub! I just scheduled a doorstep pickup on My Wash.\n\n` +
    `*Ref:* ${referenceNumber}\n` +
    `*Name:* ${data.name}\n` +
    `*Suburb:* ${data.suburb}\n` +
    `*Address:* ${data.address}${data.accessCode ? ` (Gate: ${data.accessCode})` : ""}\n` +
    `*Date:* ${data.pickupDate}\n` +
    `*Time Window:* ${timeSlotNames[data.timeSlot] || data.timeSlot}\n` +
    `*Services:* ${data.services}\n` +
    `*Volume:* ${data.estimatedBags}\n` +
    `*Speed:* ${speedNames[data.speed] || data.speed}`
  );

  const whatsappConfirmationUrl = `https://wa.me/27648308785?text=${waText}`;

  // Log dispatch order
  console.info("[My Wash - Pickup Request Logged]", {
    timestamp: new Date().toISOString(),
    referenceNumber,
    data,
  });

  revalidatePath("/my-wash");

  return {
    success: true,
    data: {
      referenceNumber,
      name: data.name,
      phone: data.phone,
      suburb: data.suburb,
      pickupDate: data.pickupDate,
      timeSlot: timeSlotNames[data.timeSlot] || data.timeSlot,
      speed: speedNames[data.speed] || data.speed,
      whatsappConfirmationUrl,
    },
    message: `Pickup scheduled successfully! Reference #${referenceNumber}. Our driver will contact ${data.phone} prior to arrival in ${data.suburb}.`,
  };
}
