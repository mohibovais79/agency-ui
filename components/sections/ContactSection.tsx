"use client";

import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { motion } from "framer-motion";
import { useState } from "react";

const benefits = [
  { icon: "⚡", text: "Response within 24 hours" },
  { icon: "🎯", text: "No fluff — straight to strategy"  },
  { icon: "🔒", text: "NDA-ready from day one"           },
  { icon: "🚀", text: "First sprint starts in two weeks" },
];

const inputClasses = {
  label:        "text-white/55 text-sm font-medium",
  input:        "text-white bg-transparent placeholder:text-white/25",
  inputWrapper: "bg-white/[0.04] border border-white/[0.08] hover:border-violet-500/40 focus-within:border-violet-500/60 rounded-xl",
  errorMessage: "text-red-400",
};

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative w-full overflow-hidden" id="contact">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[300px] -translate-y-1/2 opacity-35 blur-[80px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(109,40,217,0.22), transparent)",
        }}
      />

      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02]">
          {/* Top gradient rule */}
          <div
            className="h-[1px] w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(139,92,246,0.6) 30%, rgba(34,211,238,0.4) 70%, transparent)",
            }}
          />

          <div className="grid gap-0 md:grid-cols-5">
            {/* ── Left: CTA copy ──────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              className="flex flex-col justify-center border-b border-white/[0.06] p-8 md:col-span-2 md:border-b-0 md:border-r md:p-10"
            >
              <p className="section-eyebrow">Let&apos;s Work Together</p>
              <h2 className="mt-5 text-2xl font-bold leading-snug tracking-tight text-white md:text-3xl">
                Ready to engineer your next competitive moat?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/48">
                Tell us about your product, timeline, and ambitions.
                We&apos;ll follow up with a tailored strategy brief — no pitch deck required.
              </p>

              <ul className="mt-8 space-y-3.5">
                {benefits.map((b) => (
                  <li key={b.text} className="flex items-center gap-3 text-sm text-white/58">
                    <span className="text-base">{b.icon}</span>
                    {b.text}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* ── Right: Form ──────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="p-8 md:col-span-3 md:p-10"
            >
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Input
                    isRequired
                    classNames={inputClasses}
                    label="Full Name"
                    name="name"
                    variant="flat"
                  />
                  <Input
                    isRequired
                    classNames={inputClasses}
                    label="Email Address"
                    name="email"
                    type="email"
                    variant="flat"
                  />
                </div>
                <Input
                  classNames={inputClasses}
                  label="Company (optional)"
                  name="company"
                  variant="flat"
                />
                <Input
                  isRequired
                  classNames={inputClasses}
                  label="Subject"
                  name="subject"
                  variant="flat"
                />
                <Textarea
                  isRequired
                  classNames={inputClasses}
                  label="Tell us about your project"
                  minRows={4}
                  name="message"
                  variant="flat"
                />

                <Button
                  className="w-full rounded-full bg-violet-600 font-semibold text-white shadow-glow hover:bg-violet-500 transition-colors border-0"
                  color="primary"
                  isLoading={status === "sending"}
                  size="lg"
                  type="submit"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </Button>

                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-emerald-400"
                  >
                    ✓ Message sent! We&apos;ll be in touch within 24 hours.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-red-400"
                  >
                    Something went wrong — please try again or email us directly.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
