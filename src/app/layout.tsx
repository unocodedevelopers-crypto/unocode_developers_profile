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
    default: "Unocode Developers | Custom Web Design & Web Development Company in Madurai",
    template: "%s | Unocode Developers - Web Design Madurai",
  },
  description:
    "Unocode Developers is a top-rated web design and custom web development company in Madurai, Tamil Nadu. We build high-performing Next.js web applications, e-commerce websites, and visual brand experiences.",
  keywords: [
    "Unocode Developers",
    "Web Design Madurai",
    "Web Development Madurai",
    "Best Web Developer Madurai",
    "Website Design Company Madurai",
    "Freelance Web Developer Madurai",
    "Next.js Developer Tamil Nadu",
    "React Developer Madurai",
    "Software Development Company Madurai",
    "Ecommerce Web Development Madurai",
    "Custom Web Applications",
    "UI UX Web Design Madurai",
    "SEO Services Madurai",
    "Full Stack Developer Madurai",
    "Visual Brand Websites",
  ],
  authors: [{ name: "Unocode Developers", url: "https://unocode-developers-profile.vercel.app" }],
  creator: "Unocode Developers",
  publisher: "Unocode Developers",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Unocode Developers | Best Web Design & Development Company in Madurai",
    description:
      "Premier web design and web development agency in Madurai, TN. Custom high-end websites, full-stack web applications, and digital solutions.",
    url: "/",
    siteName: "Unocode Developers",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Unocode Developers - Top Web Design Agency in Madurai",
      },
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Unocode Developers - Web Development Company Madurai",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unocode Developers | Best Web Design & Development in Madurai",
    description:
      "Top-rated custom web design & web development agency in Madurai, TN. Fast, high-performing visual brand websites.",
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
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://unocode-developers-profile.vercel.app/#website",
      "url": process.env.NEXT_PUBLIC_SITE_URL || "https://unocode-developers-profile.vercel.app",
      "name": "Unocode Developers",
      "description": "Custom Web Design and Web Development Company in Madurai, Tamil Nadu",
      "publisher": {
        "@id": "https://unocode-developers-profile.vercel.app/#organization"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://unocode-developers-profile.vercel.app/#organization",
      "name": "Unocode Developers",
      "url": process.env.NEXT_PUBLIC_SITE_URL || "https://unocode-developers-profile.vercel.app",
      "logo": "https://unocode-developers-profile.vercel.app/og-image.png",
      "image": "https://unocode-developers-profile.vercel.app/og-image.png",
      "description":
        "Top custom web design and web development agency based in Madurai, TN. Building fast, scalable Next.js websites, mobile apps, and digital platforms.",
      "email": "unocode.developers@gmail.com",
      "telephone": "+91-8072224577",
      "sameAs": [
        "https://www.linkedin.com/in/unocode-developers-880107421/"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Madurai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "625001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "9.9252",
        "longitude": "78.1198"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      },
      "areaServed": [
        { "@type": "City", "name": "Madurai" },
        { "@type": "State", "name": "Tamil Nadu" },
        { "@type": "Country", "name": "India" }
      ],
      "priceRange": "$$",
      "knowsAbout": [
        "Web Design",
        "Web Development",
        "React",
        "Next.js",
        "E-commerce Development",
        "Search Engine Optimization (SEO)",
        "UI/UX Design"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development & Design Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Web Design & Front-End Development",
              "description": "Responsive visual website design optimized for modern search engines."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Full Stack Web Applications & Next.js Development",
              "description": "Scalable web app development using modern framework architectures."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO & Website Speed Performance Optimization",
              "description": "Technical SEO enhancements to secure top 10 search engine rankings."
            }
          }
        ]
      }
    }
  ]
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

