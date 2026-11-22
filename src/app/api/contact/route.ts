import { NextResponse } from "next/server";
import { submitContactForm } from "@/actions/contact";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const result = await submitContactForm(null, formData);
    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    console.error("[API /api/contact Error]", err);
    return NextResponse.json(
      {
        success: false,
        error:
          "Something went wrong while sending your inquiry. Please try again or WhatsApp us on 064 830 8785.",
      },
      { status: 500 }
    );
  }
}
