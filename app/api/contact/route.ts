// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Basic validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        console.log("Received contact form submission:");
        console.log({ name, email, subject, message });

        // =================================================================
        // TODO: Implement your email sending logic here.
        // Use a service like Resend, SendGrid, or Nodemailer.
        // Example with Resend:
        //
        // import { Resend } from 'resend';
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({
        //   from: 'onboarding@resend.dev',
        //   to: 'YOUR_EMAIL_ADDRESS',
        //   subject: `New Contact Form Submission: ${subject}`,
        //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
        // });
        // =================================================================

        // For now, we'll just simulate a successful submission
        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });

    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}