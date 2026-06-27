import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Tracker from "@/components/analytics/Tracker";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://godfirst-hardware.vercel.app'),
  title: "Godfirst Hardware | Quality Building & Construction Materials",
  description: "Godfirst Hardware - Your one-stop shop for quality building materials, cement, steel, welding rods, and construction supplies in Mombasa, Kenya.",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://godfirst-hardware.vercel.app",
    siteName: "Godfirst Hardware",
    title: "Godfirst Hardware | Quality Building & Construction Materials",
    description: "Your one-stop shop for quality building materials, cement, steel, welding rods, and construction supplies in Mombasa, Kenya.",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Godfirst Hardware Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Godfirst Hardware | Quality Building & Construction Materials",
    description: "Your one-stop shop for quality building materials, cement, steel, welding rods, and construction supplies in Mombasa, Kenya.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <Tracker />
        </ThemeProvider>
      </body>
    </html>
  );
}
