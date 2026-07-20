import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Kazi Abdus Sobur | Veterinarian, Researcher & Consultant",
  description:
    "Bridging technical expertise with business insight to drive impactful research and innovation.",
  keywords:
    "veterinarian, researcher, consultant, publication support, microbiology, one health",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
