import "@repo/ui/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MotionProvider } from "../components/MotionProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "INFRA_DEV | Infrastructure Editorial",
  description: "Infrastructure Editorial Design System - DevOps Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-[family-name:var(--font-inter)] bg-[#0b1326] text-[#dae2fd] selection:bg-primary/30`}>
        <Navbar />
        <MotionProvider>
          <main className="min-h-screen">
            {children}
          </main>
        </MotionProvider>
        <Footer />
      </body>
    </html>
  );
}
