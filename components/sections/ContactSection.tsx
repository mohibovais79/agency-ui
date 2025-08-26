// components/sections/ContactSection.tsx
"use client";

import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { motion } from "framer-motion";
import { useState } from "react";

export function ContactSection() {
    const [status, setStatus] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("Sending...");

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
                (event.target as HTMLFormElement).reset();
            } else {
                setStatus("Failed to send message. Please try again.");
            }
        } catch (error) {
            setStatus("An error occurred. Please try again.");
        }
    };

    return (
        <section id="contact" className="w-full bg-default-100/50 py-20">
            <motion.div
                className="max-w-2xl mx-auto px-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the section is visible
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Have a Project in Mind?</h2>
                    <p className="mt-4 text-lg text-default-600">Let's talk about how we can help you achieve your goals.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input isRequired label="Full Name" name="name" />
                    <Input isRequired type="email" label="Email Address" name="email" />
                    <Input isRequired label="Subject" name="subject" />
                    <Textarea
                        isRequired
                        label="Your Message"
                        name="message"
                        minRows={5}
                    />
                    <Button type="submit" color="primary" className="w-full font-semibold">
                        Send Message
                    </Button>
                    {status && <p className="text-center mt-4 text-sm">{status}</p>}
                </form>
            </motion.div>
        </section>
    );
}