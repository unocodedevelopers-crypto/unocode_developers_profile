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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://unocode-developers-profile.vercel.app"),
  title: {
    default: "Unocode Developers | Custom Web Design & Development in Madurai",
    template: "%s | Unocode Developers",
  },
  description:
    "Unocode Developers offers premium web design and custom web development from Madurai, TN. We build high-end, responsive, and high-performing digital solutions tailored for visual brands.",
  keywords: [
    "Unocode Developers",
    "Web Design Madurai",
    "Web Development Madurai",
    "Website Developer Tamil Nadu",
    "Custom Web Applications",
    "Freelance Web Developer",
    "Next.js Developer",
    "React Developer Madurai",
    "UI UX Web Design",
    "Visual Brand Websites",
  ],
  authors: [{ name: "Unocode Developers" }],
  creator: "Unocode Developers",
  publisher: "Unocode Developers",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Unocode Developers | Custom High-End Web Design & Development",
    description:
      "Web design and web development from Madurai, TN. Custom high-end websites for visual brands. Individually conceived, designed, and programmed.",
    url: "/",
    siteName: "Unocode Developers",
    images: [
      {
        url: "/og-image.webp",
        width: 600,
        height: 400,
        alt: "Unocode Developers Logo",
      },
      {
        url: "/og-image.png",
        width: 600,
        height: 400,
        alt: "Unocode Developers Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unocode Developers | Custom High-End Web Design & Development",
    description:
      "Web design and web development from Madurai, TN. Custom high-end websites for visual brands.",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Unocode Developers",
  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://unocode-developers-profile.vercel.app",
  "logo": "/og-image.png",
  "image": "/og-image.png",
  "description":
    "Web design and web development agency from Madurai, TN. Custom high-end websites for visual brands.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Madurai",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "priceRange": "$$"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="font-nunito text-white selection:bg-[#F8F7F7] selection:text-[#161616] min-h-full flex flex-col"
        style={{
          background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
          backgroundColor: "#0f0c29",
        }}
      >
        <Script src="/api.js" data-cfasync="false" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}

