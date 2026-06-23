import type { Metadata } from "next";
import { Abel, Afacad_Flux, Aldrich, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./custom.css";
import { cn } from "@/lib/utils";

const abel = Abel({
  variable: "--font-abel",
  subsets: ["latin"],
  weight: "400",
});

const afacadFlux = Afacad_Flux({
  variable: "--font-afacad-flux",
  subsets: ["latin"],
});

const aldrich = Aldrich({
  variable: "--font-aldrich",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artex",
  description: "Artex",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        abel.variable,
        afacadFlux.variable,
        aldrich.variable,
        geistMono.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
