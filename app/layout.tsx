import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const geistSans = GeistSans;
const geistMono = GeistMono;

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-instrument",
});

const weissFont = localFont({
  src: "./fonts/WeissRundgotisch.ttf",
  variable: "--font-weiss",
});

const ianSegoe = localFont({
  src: "./fonts/IanSegoe.ttf",
  variable: "--font-ian-segoe",
});

export const metadata: Metadata = {
  title: "Xavier D'Mello",
  description: "Building Smart Contracts and AI Agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.className,
          geistMono.variable,
          instrumentSerif.variable,
          weissFont.variable,
          ianSegoe.variable,
          "antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
