"use client"

import { Poppins } from "next/font/google"
import Provider from "./provider"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={poppins.className} lang='en' suppressHydrationWarning>
      <head>
        <title>Uswaaa - Map Enthusiast</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Personal website of Uswatun Hasanah, a passionate Geomatics Engineering Master's student at UGM specializing in GIS, spatial analysis, and cartographic visualization."
        />
        <meta
          name="keywords"
          content="Uswatun Hasanah, Geomatics Engineering, GIS, Spatial Analysis, Cartography, Geospatial Technology, Master's Student UGM"
        />
        <meta name="author" content="Uswatun Hasanah" />
        <meta property="og:title" content="Uswatun Hasanah - Geomatics Engineering Enthusiast" />
        <meta
          property="og:description"
          content="Explore the projects, expertise, and passion of Uswatun Hasanah, a Master's student in Geomatics Engineering at UGM."
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}