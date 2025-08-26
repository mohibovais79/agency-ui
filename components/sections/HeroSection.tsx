// components/sections/HeroSection.tsx
"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section className="w-full max-w-5xl min-h-screen flex flex-col items-center justify-center text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Unlock Your Potential with{" "}
                    <span className="text-primary">AI, Data, and Design</span>
                </h1>
                <p className="mt-6 text-lg text-default-600 max-w-2xl mx-auto">
                    We are a boutique consultancy empowering businesses to innovate and grow by leveraging cutting-edge technology and human-centered design.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className="mt-10"
            >
                <Button
                    as={Link}
                    href="YOUR_CALENDLY_LINK_HERE" // <-- IMPORTANT: Add your link
                    target="_blank"
                    color="primary"
                    size="lg"
                    className="font-semibold"
                >
                    Schedule a Free Consultation
                </Button>
            </motion.div>
        </section>
    );
}