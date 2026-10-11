import nodemailer from "nodemailer";
import { BUSINESS_INFO } from "./data";

export const NOTIFICATION_EMAIL =
  process.env.CONTACT_NOTIFICATION_EMAIL || "info@laundro-hub.co.za";

function createTransporter() {
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure:
        process.env.SMTP_SECURE === "true" || process.env.SMTP_PORT === "465",
      auth: process.env.SMTP_USER
        ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          }
        : undefined,
    });
  }

  // Fallback to local server sendmail (common on Plesk/Linux environments)
  return nodemailer.createTransport({
    sendmail: true,
    newline: "unix",
    path: "/usr/sbin/sendmail",
  });
}

export async function sendContactInquiryEmail(data: {
  name: string;
  phone: string;
  email?: string;
  accountType: string;
  service: string;
  estimatedVolume: string;
  message?: string;
}): Promise<boolean> {
  try {
    const transporter = createTransporter();
    const fromAddress =
      process.env.SMTP_FROM || `"Laundro-Hub Website" <info@laundro-hub.co.za>`;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
        <div style="background-color: #2B0F48; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 24px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800;">Laundro-Hub</h1>
          <p style="color: #8FE0DC; margin: 4px 0 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700;">New Website Inquiry</p>
        </div>

        <p style="font-size: 16px; color: #1f2937; line-height: 1.5; margin-bottom: 20px;">
          You have received a new contact inquiry from the website. Details are below:
        </p>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tbody>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 12px; font-weight: 700; color: #4b5563; width: 35%;">Name</td>
              <td style="padding: 10px 12px; color: #111827;">${data.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 12px; font-weight: 700; color: #4b5563;">Phone / WhatsApp</td>
              <td style="padding: 10px 12px; color: #111827;"><a href="tel:${data.phone}" style="color: #0B6E71; font-weight: 700; text-decoration: none;">${data.phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 12px; font-weight: 700; color: #4b5563;">Email Address</td>
              <td style="padding: 10px 12px; color: #111827;">${data.email ? `<a href="mailto:${data.email}" style="color: #0B6E71; text-decoration: none;">${data.email}</a>` : "Not provided"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 12px; font-weight: 700; color: #4b5563;">Category / Type</td>
              <td style="padding: 10px 12px; color: #111827;">${data.accountType}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 12px; font-weight: 700; color: #4b5563;">Requested Service</td>
              <td style="padding: 10px 12px; color: #111827;">${data.service}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 12px; font-weight: 700; color: #4b5563;">Estimated Volume</td>
              <td style="padding: 10px 12px; color: #111827;">${data.estimatedVolume}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; font-weight: 700; color: #4b5563; vertical-align: top;">Notes / Message</td>
              <td style="padding: 10px 12px; color: #111827; white-space: pre-wrap;">${data.message || "None"}</td>
            </tr>
          </tbody>
        </table>

        <div style="background-color: #F4FAF9; border-left: 4px solid #0B6E71; padding: 14px 16px; border-radius: 4px; margin-bottom: 24px;">
          <p style="margin: 0; font-size: 13px; color: #042E30;">
            <strong>Quick Action:</strong> Click <a href="https://api.whatsapp.com/send?phone=${data.phone.replace(/[^0-9]/g, "")}" style="color: #0B6E71; font-weight: 700;">here to WhatsApp ${data.name}</a> directly.
          </p>
        </div>

        <p style="font-size: 12px; color: #9ca3af; text-align: center; margin: 0;">
          Dispatched to ${NOTIFICATION_EMAIL} from the Laundro-Hub website server.
        </p>
      </div>
    `;

    await transporter.sendMail({
      to: NOTIFICATION_EMAIL,
      from: fromAddress,
      replyTo: data.email || undefined,
      subject: `[Laundro-Hub Inquiry] ${data.name} - ${data.service}`,
      text: `New Website Inquiry\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email || "N/A"}\nCategory: ${data.accountType}\nService: ${data.service}\nVolume: ${data.estimatedVolume}\nMessage:\n${data.message || "None"}`,
      html: htmlContent,
    });

    console.info(`[Email Dispatched] Inquiry sent to ${NOTIFICATION_EMAIL}`);
    return true;
  } catch (err) {
    console.warn(`[Email Notification Note] Failed to deliver via SMTP/sendmail:`, err);
    return false;
  }
}

export async function sendPickupOrderEmail(
  data: {
    name: string;
    phone: string;
    email?: string;
    suburb: string;
    address: string;
    accessCode?: string;
    pickupDate: string;
    timeSlot: string;
    services: string;
    estimatedBags: string;
    speed: string;
    logisticsOption?: string;
    deliveryFee?: string;
    notes?: string;
  },
  referenceNumber: string
): Promise<boolean> {
  try {
    const transporter = createTransporter();
    const fromAddress =
      process.env.SMTP_FROM || `"Laundro-Hub Express" <info@laundro-hub.co.za>`;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
        <div style="background-color: #2B0F48; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 24px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800;">Laundro-Hub Express</h1>
          <p style="color: #8FE0DC; margin: 4px 0 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700;">New Doorstep Pickup #${referenceNumber}</p>
        </div>

        <p style="font-size: 16px; color: #1f2937; line-height: 1.5; margin-bottom: 20px;">
          A new My Wash doorstep pickup has been scheduled.
        </p>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tbody>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 12px; font-weight: 700; color: #4b5563; width: 35%;">Order Reference</td>
              <td style="padding: 10px 12px; color: #111827; font-weight: 800; font-family: monospace;">#${referenceNumber}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 12px; font-weight: 700; color: #4b5563;">Customer Name</td>
              <td style="padding: 10px 12px; color: #111827;">${data.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 12px; font-weight: 700; color: #4b5563;">Phone / WhatsApp</td>
              <td style="padding: 10px 12px; color: #111827;"><a href="tel:${data.phone}" style="color: #0B6E71; font-weight: 700; text-decoration: none;">${data.phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 12px; font-weight: 700; color: #4b5563;">Email</td>
              <td style="padding: 10px 12px; color: #111827;">${data.email ? `<a href="mailto:${data.email}" style="color: #0B6E71; text-decoration: none;">${data.email}</a>` : "Not provided"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 12px; font-weight: 700; color: #4b5563;">Suburb</td>
              <td style="padding: 10px 12px; color: #111827; font-weight: 700;">${data.suburb}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 12px; font-weight: 700; color: #4b5563;">Address</td>
              <td style="padding: 10px 12px; color: #111827;">${data.address}${data.accessCode ? ` (Gate/Access Code: ${data.accessCode})` : ""}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 12px; font-weight: 700; color: #4b5563;">Option</td>
              <td style="padding: 10px 12px; color: #111827; font-weight: 700;">${data.logisticsOption || "Collection & Delivery"} (Fee: ${data.deliveryFee || "R0"})</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 12px; font-weight: 700; color: #4b5563;">Pickup Date & Time</td>
              <td style="padding: 10px 12px; color: #111827;">${data.pickupDate} (${data.timeSlot})</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 12px; font-weight: 700; color: #4b5563;">Services Needed</td>
              <td style="padding: 10px 12px; color: #111827;">${data.services}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 12px; font-weight: 700; color: #4b5563;">Estimated Bags</td>
              <td style="padding: 10px 12px; color: #111827;">${data.estimatedBags}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 12px; font-weight: 700; color: #4b5563;">Turnaround Speed</td>
              <td style="padding: 10px 12px; color: #111827;">${data.speed}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; font-weight: 700; color: #4b5563; vertical-align: top;">Special Instructions</td>
              <td style="padding: 10px 12px; color: #111827; white-space: pre-wrap;">${data.notes || "None"}</td>
            </tr>
          </tbody>
        </table>

        <p style="font-size: 12px; color: #9ca3af; text-align: center; margin: 0;">
          Dispatched to ${NOTIFICATION_EMAIL} from the Laundro-Hub website server.
        </p>
      </div>
    `;

    await transporter.sendMail({
      to: NOTIFICATION_EMAIL,
      from: fromAddress,
      replyTo: data.email || undefined,
      subject: `[Laundro-Hub Order #${referenceNumber}] Pickup in ${data.suburb} - ${data.name}`,
      text: `New Pickup Scheduled #${referenceNumber}\n\nCustomer: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email || "N/A"}\nSuburb: ${data.suburb}\nAddress: ${data.address}\nDate: ${data.pickupDate} (${data.timeSlot})\nServices: ${data.services}\nBags: ${data.estimatedBags}\nSpeed: ${data.speed}\nNotes: ${data.notes || "None"}`,
      html: htmlContent,
    });

    console.info(`[Email Dispatched] Pickup #${referenceNumber} sent to ${NOTIFICATION_EMAIL}`);
    return true;
  } catch (err) {
    console.warn(`[Email Notification Note] Failed to deliver pickup order via SMTP/sendmail:`, err);
    return false;
  }
}
