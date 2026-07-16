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
  title: "Unocode Developers",
  description: "Webdesign and web development from Madurai, TN. Custom high-end websites for visual brands. Individually conceived, designed and programmed.",
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
      <body suppressHydrationWarning className="font-nunito text-white selection:bg-[#F8F7F7] selection:text-[#161616] min-h-full flex flex-col"
        style={{ background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)", backgroundColor: "#0f0c29" }}>
        <Script src="/api.js" data-cfasync="false" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}
