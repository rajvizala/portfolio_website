import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Rajvi Zala | Full-Stack Developer & AI Engineer",
  description:
    "Full-Stack Developer & AI Engineer building scalable systems and intelligent applications. Specializing in Distributed Systems, RAG Pipelines, and Production ML.",
  openGraph: {
    title: "Rajvi Zala | Full-Stack Developer & AI Engineer",
    description:
      "Full-Stack Developer & AI Engineer building scalable systems and intelligent applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
