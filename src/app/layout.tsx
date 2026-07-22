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
    "Unocode Developers Madurai",
    "Web Design Madurai",
    "Web Development Madurai",
    "Best Web Developer Madurai",
    "Website Developer Tamil Nadu",
    "Custom Web Applications",
    "Freelance Web Developer",
    "Next.js Developer Madurai",
    "React Developer Madurai",
    "UI UX Web Design",
    "Visual Brand Websites",
    "Ecommerce Web Development Madurai",
    "SEO Optimized Web Design",
    "Full Stack Developer Madurai",
  ],
  authors: [{ name: "Unocode Developers", url: "https://unocode-developers-profile.vercel.app" }],
  creator: "Unocode Developers",
  publisher: "Unocode Developers",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Unocode Developers | Custom Web Design & Web Development in Madurai",
    description:
      "Web design and web development agency from Madurai, TN. Custom high-end websites, web applications, and digital solutions for visual brands.",
    url: "/",
    siteName: "Unocode Developers",
    images: [
      {
        url: "/og-image.webp",
        width: 600,
        height: 400,
        alt: "Unocode Developers Logo - Web Design Agency in Madurai",
      },
      {
        url: "/og-image.png",
        width: 600,
        height: 400,
        alt: "Unocode Developers Logo - Web Design Agency in Madurai",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unocode Developers | Custom Web Design & Web Development in Madurai",
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
  manifest: "/site.webmanifest",
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Unocode Developers",
  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://unocode-developers-profile.vercel.app",
  "logo": "/og-image.png",
  "image": "/og-image.png",
  "description":
    "Web design and web development agency from Madurai, TN. Custom high-end websites, web applications, and digital solutions for visual brands.",
  "email": "unocode.developers@gmail.com",
  "telephone": "+91 80722 24577",
  "sameAs": [
    "https://www.linkedin.com/in/unocode-developers-880107421/"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Madurai",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "9.9252",
    "longitude": "78.1198"
  },
  "areaServed": ["Madurai", "Tamil Nadu", "India", "Worldwide"],
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Web Design & Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Full Stack Web Applications"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO & Performance Optimization"
        }
      }
    ]
  }
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

