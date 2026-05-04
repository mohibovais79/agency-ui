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
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#06090F" },
    { media: "(prefers-color-scheme: dark)",  color: "#06090F" },
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
            <div aria-hidden className="noise-overlay pointer-events-none fixed inset-0 z-0" />
            {/* Single ambient top glow — keeps the background alive without being heavy */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[560px] opacity-100"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(109,40,217,0.20), transparent 70%)",
              }}
            />
            <Navbar />
            <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-grow flex-col gap-24 px-4 pb-28 pt-32 md:px-8">
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
