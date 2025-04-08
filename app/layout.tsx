import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://freshandclean.co.za"),
  title: {
    default: "Fresh & Clean | Leaders in Cleaning Chemicals & Hygiene Products",
    template: "%s | Fresh & Clean",
  },
  description:
    "Professional cleaning chemicals and complete hygiene solutions for washrooms. Based in Uitenhage, serving businesses across South Africa.",
  keywords: "cleaning chemicals, hygiene products, washroom solutions, Uitenhage, commercial cleaning",
  authors: [{ name: "Fresh & Clean" }],
  creator: "Fresh & Clean",
  publisher: "Fresh & Clean",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://freshandclean.co.za",
    siteName: "Fresh & Clean",
    title: "Fresh & Clean | Leaders in Cleaning Chemicals & Hygiene Products",
    description:
      "Professional cleaning chemicals and complete hygiene solutions for washrooms. Based in Uitenhage, serving businesses across South Africa.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresh & Clean | Leaders in Cleaning Chemicals & Hygiene Products",
    description:
      "Professional cleaning chemicals and complete hygiene solutions for washrooms. Based in Uitenhage, serving businesses across South Africa.",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://freshandclean.co.za" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fresh & Clean",
              url: "https://freshandclean.co.za",
              logo: "https://freshandclean.co.za/images/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+27-41-922-4554",
                contactType: "customer service",
                areaServed: "ZA",
                availableLanguage: ["en"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Shop 19a, Riverside Industrial Park, Lower Magennis Road",
                addressLocality: "Uitenhage",
                postalCode: "6230",
                addressCountry: "ZA",
              },
              sameAs: ["https://www.facebook.com/freshandclean", "https://www.linkedin.com/company/fresh-and-clean"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'