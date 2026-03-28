// components/sections/TestimonialsSection.tsx
"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Working with them was a game-changer. Their AI model increased our efficiency by 40% and the team's expertise was second to none.",
    name: "Jane Doe",
    title: "CEO, Tech Innovators Inc.",
  },
  {
    quote:
      "The data dashboard they built for us is now the single source of truth for our entire leadership team. Invaluable insights, delivered beautifully.",
    name: "John Smith",
    title: "VP of Operations, MarketLeap",
  },
  {
    quote:
      "The new UX has received overwhelmingly positive feedback from our users. Our retention is up, and so is our team's morale. A truly collaborative process.",
    name: "Emily White",
    title: "Head of Product, ConnectApp",
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full py-20 relative" id="testimonials">
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-r from-primary/20 via-secondary/10 to-transparent blur-[120px] opacity-50" />
      </div>
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Real stories from businesses we&apos;ve helped transform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 border border-white/10 rounded-lg glass-panel"
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="text-white/80 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-white/60">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
