import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";

import { Providers } from "./providers";

import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          fontSans.variable,
        )}
      >
        <Providers>
          <div className="relative flex min-h-screen flex-col overflow-hidden">
            <div aria-hidden className="noise-overlay" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-[-20%] z-0 h-[520px] opacity-60 blur-[160px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(151,99,255,0.45), transparent 55%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-[-10%] z-0 h-[420px] opacity-50 blur-[140px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(25,196,212,0.35), transparent 60%)",
              }}
            />
            <Navbar />
            <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-grow flex-col gap-20 px-4 pb-20 pt-32 md:px-8">
              {children}
            </main>
            <FooterSection />
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
