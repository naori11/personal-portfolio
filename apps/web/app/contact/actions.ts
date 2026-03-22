"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // Validation
  if (!name || !email || !subject || !message) {
    return { error: "All fields are required" };
  }

  if (!email.includes("@")) {
    return { error: "Invalid email address" };
  }

  try {
    await resend.emails.send({
      from: "noreply@contact.juvan.tech",
      to: "juvanpaulo1@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { error: "Failed to send message. Please try again." };
  }
}
