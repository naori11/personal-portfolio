const { app } = require('@azure/functions');
const { Resend } = require('resend');

app.http('contact', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            context.warn("Email service not configured.");
            return { status: 500, jsonBody: { error: "Email service not configured" } };
        }

        const resend = new Resend(resendApiKey);

        try {
            const body = await request.json();
            const { name, email, subject, message } = body;

            if (!name || !email || !subject || !message) {
                return { status: 400, jsonBody: { error: "All fields are required" } };
            }
            if (!email.includes("@")) {
                return { status: 400, jsonBody: { error: "Invalid email address" } };
            }

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

            return { status: 200, jsonBody: { success: true } };
        } catch (error) {
            context.error("Email send error:", error);
            return { status: 500, jsonBody: { error: "Failed to send message. Please try again." } };
        }
    }
});
