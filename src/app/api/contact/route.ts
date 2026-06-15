import { Resend } from "resend";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

const contactToEmail = process.env.CONTACT_TO_EMAIL ?? "info@agranitechbd.com";
const contactFromEmail = process.env.CONTACT_FROM_EMAIL ?? "Agrani Website <onboarding@resend.dev>";
const isProduction = process.env.NODE_ENV === "production";

function getText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = getText(payload.name);
  const email = getText(payload.email);
  const subject = getText(payload.subject);
  const message = getText(payload.message);

  if (!name || !email || !subject || !message) {
    return Response.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    const { error } = await resend.emails.send({
      from: contactFromEmail,
      to: [contactToEmail],
      replyTo: email,
      subject: `Website contact: ${subject}`,
      text: [
        "New contact form message",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend contact send failed:", error);
      return Response.json(
        { error: isProduction ? "Could not send your message. Please try again later." : error.message },
        { status: 500 },
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact send failed:", error);
    return Response.json(
      { error: isProduction ? "Could not send your message. Please try again later." : "Could not send your message. Please try again later." },
      { status: 500 },
    );
  }
}
