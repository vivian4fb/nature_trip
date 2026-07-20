import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wildora Expeditions | Expert-Led India Wildlife Trips",
  description: "Small-group guided wildlife holidays across India for public travellers, families, photographers, birders and international guests. Tiger safaris, Himalayan birding, wetlands, deserts, rainforests, monsoon frogs, butterflies, night walks and custom group programmes.",
  keywords: [
    "india wildlife tours", "india tiger safari", "india birding tour",
    "india herping tour", "monsoon herping india", "india butterfly tour",
    "guided nature tour india", "india private wildlife tour", "india endemic species tour",
    "himalaya birding", "central india safari", "india family wildlife holiday"
  ],
  openGraph: {
    title: "Wildora Expeditions | Expert-Led India Wildlife Trips",
    description: "Leisure-first guided safaris, birding, herping, butterfly, rainforest, desert, wetland and mountain trips across India.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}
