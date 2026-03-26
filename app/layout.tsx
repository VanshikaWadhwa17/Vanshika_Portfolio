import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vanshika Wadhwa, Software Developer and AI/Data Engineer",
  description:
    "Vanshika Wadhwa — Software Developer and AI/Data Engineer. MSc Computing (Artificial Intelligence) at Dublin City University. vanshikawadhwa1704@gmail.com",
  keywords: ["Vanshika Wadhwa", "Software Developer", "AI", "Data Engineer", "Machine Learning", "Portfolio"],
  metadataBase: new URL("https://vanshikawadhwa.com"),
  openGraph: {
    title: "Vanshika Wadhwa, Software Developer and AI/Data Engineer",
    description:
      "Software Developer and AI/Data Engineer. 5+ Years of experience · Transunion CIBIL · International WELL Building Institute · Cognizant. vanshikawadhwa1704@gmail.com",
    url: "https://vanshikawadhwa.com",
    siteName: "Vanshika Wadhwa Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanshika Wadhwa, Software Developer and AI/Data Engineer",
    description: "Software Developer and AI/Data Engineer. vanshikawadhwa1704@gmail.com",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
