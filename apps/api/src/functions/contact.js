import { app } from '@azure/functions';
import { Resend } from 'resend';
import * as appInsights from 'applicationinsights';

// Do not call appInsights.setup().start() in Azure Functions! 
// The host automatically instruments the process. Calling it manually causes conflicts and crashes.
let client;
if (process.env.APPLICATIONINSIGHTS_CONNECTION_STRING) {
    client = new appInsights.TelemetryClient();
}

export async function contactHandler(request, context = { warn: () => {}, error: () => {} }) {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
        context.warn?.("Email service not configured.");
        client?.trackException({ exception: new Error("Email service not configured") });
        return { status: 500, jsonBody: { error: "Email service not configured" } };
    }

    const resend = new Resend(resendApiKey);

    try {
        const body = await request.json();
        const { name, email, subject, message } = body || {};

        if (!name || !email || !subject || !message) {
            return { status: 400, jsonBody: { error: "All fields are required" } };
        }
        if (!email.includes("@")) {
            return { status: 400, jsonBody: { error: "Invalid email address" } };
        }

        const { error } = await resend.emails.send({
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

        if (error) {
            context.error?.("Email send error:", error);
            client?.trackException({ exception: new Error(error.message || "Resend API Error") });
            return { status: 500, jsonBody: { error: "Failed to send message. Please try again." } };
        }

        client?.trackEvent({ name: "EmailSentSuccessfully", properties: { subject } });
        return { status: 200, jsonBody: { success: true } };
    } catch (error) {
        context.error?.("Email send error:", error);
        client?.trackException({ exception: error instanceof Error ? error : new Error(String(error)) });
        return { status: 500, jsonBody: { error: "Failed to send message. Please try again." } };
    }
}

app.http('contact', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: contactHandler
});
