import "@repo/ui/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MotionProvider } from "../components/MotionProvider";
import { ThemeProvider } from "../components/ThemeProvider";
import { AppInsightsProvider } from "../components/AppInsightsProvider";

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
  title: "JUVAN.TECH | DevOps & Cloud Engineer",
  description:
    "DevOps and Cloud Engineer specializing in infrastructure automation, CI/CD pipelines, and backend systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-[family-name:var(--font-inter)] selection:bg-[var(--primary)]/30`}
      >
        <ThemeProvider>
          <AppInsightsProvider>
            <Navbar />
            <MotionProvider>
              <main className="min-h-screen">{children}</main>
            </MotionProvider>
            <Footer />
          </AppInsightsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
