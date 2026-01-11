import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Gurusharan Gupta | Building Autonomous Systems with Claude Code",
  description:
    "Full-stack developer specializing in AI-first development, autonomous systems, and production-grade code. Explore my projects and connect.",
  keywords: [
    "Gurusharan Gupta",
    "Claude Code",
    "AI Developer",
    "Full Stack",
    "Autonomous Systems",
    "Solana",
    "Next.js",
  ],
  authors: [{ name: "Gurusharan Gupta" }],
  openGraph: {
    title: "Gurusharan Gupta | Building Autonomous Systems with Claude Code",
    description:
      "Full-stack developer specializing in AI-first development and autonomous systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
