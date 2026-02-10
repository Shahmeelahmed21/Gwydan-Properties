import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: {
    default: "Gwydan Properties Ltd | Property Renovations in Sussex",
    template: "%s | Gwydan Properties Ltd",
  },
  description:
    "Premium property renovations in Goring-by-Sea, Worthing and Sussex. We buy, renovate, style and sell beautiful homes.",
  metadataBase: new URL("https://gwydanproperties.co.uk"),
}

export const viewport: Viewport = {
  themeColor: "#0A243D",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          // biome-ignore lint: needed for JSON-LD
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Gwydan Properties Ltd",
              url: "https://gwydanproperties.co.uk",
              description:
                "Premium property renovations in Sussex, including Goring-by-Sea and Worthing.",
              areaServed: [
                { "@type": "Place", name: "Goring-by-Sea" },
                { "@type": "Place", name: "Worthing" },
                { "@type": "Place", name: "Sussex" },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}
