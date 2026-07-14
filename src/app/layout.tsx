import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles/0.CgMUAhXs.css";
import "./styles/CtaIntro.DxTTeJ3N.css";
import "./styles/References.D-vhQ1gM.css";
import "./styles/Pricing.dTsFNyBh.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Design for Visual Brands | Obermann Web Design",
  description: "Webdesign and web development from Cologne, NRW. Custom high-end websites for visual brands. Individually conceived, designed and programmed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <Script src="/api.js" data-cfasync="false" strategy="beforeInteractive" />
      </head>
      <body suppressHydrationWarning className="font-nunito text-white selection:bg-[#F8F7F7] selection:text-[#161616] min-h-full flex flex-col">{children}</body>
    </html>
  );
}
