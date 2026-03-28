import {
  Fira_Code as FontMono,
  Space_Grotesk as FontSans,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
