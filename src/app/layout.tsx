"use client"

import { Poppins } from "next/font/google"
import Provider from "./provider"

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
      <head />
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}