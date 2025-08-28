// components/sections/TestimonialsSection.tsx
"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "Working with them was a game-changer. Their AI model increased our efficiency by 40% and the team's expertise was second to none.",
        name: "Jane Doe",
        title: "CEO, Tech Innovators Inc.",
    },
    {
        quote: "The data dashboard they built for us is now the single source of truth for our entire leadership team. Invaluable insights, delivered beautifully.",
        name: "John Smith",
        title: "VP of Operations, MarketLeap",
    },
    {
        quote: "The new UX has received overwhelmingly positive feedback from our users. Our retention is up, and so is our team's morale. A truly collaborative process.",
        name: "Emily White",
        title: "Head of Product, ConnectApp",
    },
];

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="w-full bg-default-100/50 py-20">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
                    <p className="mt-4 text-lg text-default-600">Real stories from businesses we've helped transform.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="p-6 border border-default-200 rounded-lg bg-background"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <p className="text-default-700 italic">"{testimonial.quote}"</p>
                            <div className="mt-4">
                                <p className="font-semibold text-default-800">{testimonial.name}</p>
                                <p className="text-sm text-default-500">{testimonial.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}