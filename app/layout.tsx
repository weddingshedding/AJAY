import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Ajay Saini | Websites, Video Editing & Digital Experiences",
  description: "Portfolio of Ajay Saini, a website developer, video editor and AI creator based in Shimla, India.",
  keywords: ["Ajay Saini", "website developer Shimla", "video editor Shimla", "restaurant website", "wedding video editor", "Firebase developer"],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Ajay Saini | Digital Creator",
    description: "Premium websites, cinematic content and practical app experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${space.variable}`}>{children}</body>
    </html>
  );
}
