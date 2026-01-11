import type { Metadata } from "next";
import "./globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Event Pass | Memorial Service",
  description: "Burial event pass and RSVP confirmation",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
