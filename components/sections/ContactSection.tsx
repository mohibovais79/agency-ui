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
    } catch {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section className="w-full py-20 relative" id="contact">
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-r from-secondary/20 via-primary/10 to-transparent blur-[120px] opacity-50" />
      </div>
      <motion.div
        className="max-w-2xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to engineer your next moat?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Let’s discuss your architecture, product vision, and how our pods
            can accelerate your roadmap
          </p>
        </div>

        <motion.div
          className="glass-panel border border-white/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                isRequired
                classNames={{
                  label: "text-white/80 text-sm",
                  input: "text-white bg-transparent",
                  inputWrapper:
                    "bg-white/5 border-white/20 hover:border-white/30",
                }}
                label="Full Name"
                name="name"
                variant="flat"
              />
              <Input
                isRequired
                classNames={{
                  label: "text-white/80 text-sm",
                  input: "text-white bg-transparent",
                  inputWrapper:
                    "bg-white/5 border-white/20 hover:border-white/30",
                }}
                label="Email Address"
                name="email"
                type="email"
                variant="flat"
              />
            </div>
            <Input
              isRequired
              classNames={{
                label: "text-white/80 text-sm",
                input: "text-white bg-transparent",
                inputWrapper:
                  "bg-white/5 border-white/20 hover:border-white/30",
              }}
              label="Subject"
              name="subject"
              variant="flat"
            />
            <Textarea
              isRequired
              classNames={{
                label: "text-white/80 text-sm",
                input: "text-white bg-transparent",
                inputWrapper:
                  "bg-white/5 border-white/20 hover:border-white/30",
              }}
              label="Your Message"
              minRows={5}
              name="message"
              variant="flat"
            />
            <Button
              className="w-full font-semibold shadow-glow"
              color="primary"
              size="lg"
              type="submit"
            >
              Send Message
            </Button>
            {status && (
              <motion.p
                animate={{ opacity: 1 }}
                className="text-center text-sm text-white/80"
                initial={{ opacity: 0 }}
              >
                {status}
              </motion.p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
